//=================================================================
//
//	██████╗  ██████╗ ███╗   ██╗██████╗  █████╗    ███████╗███████╗
//	██╔══██╗██╔═══██╗████╗  ██║██╔══██╗██╔══██╗   ██╔════╝██╔════╝
//	██████╔╝██║   ██║██╔██╗ ██║██║  ██║███████║   █████╗  ███████╗
//	██╔══██╗██║   ██║██║╚██╗██║██║  ██║██╔══██║   ██╔══╝  ╚════██║
//	██████╔╝╚██████╔╝██║ ╚████║██████╔╝██║  ██║██╗███████╗███████║
//	╚═════╝  ╚═════╝ ╚═╝  ╚═══╝╚═════╝ ╚═╝  ╚═╝╚═╝╚══════╝╚══════╝
//
//	http://bonda.es - FROM MALLORCA WITH LOVE
//=================================================================

angular.module('PL.controllers')

//=================================================
// Como llegar
// https://developers.google.com/maps/documentation/staticmaps/index
// http://stackoverflow.com/questions/7893857/how-do-you-style-the-dropdown-on-google-places-autocomplete-api
//=================================================
.controller('LlegarCtrl', function($scope, $rootScope, $ionicPlatform, $state, $ionicViewService, $timeout, gMaps, EMTdb){

	$scope.details = "";
	$scope.verMapa = 0;
	$scope.options = {
		types: [],
		componentRestrictions: {}
	};

	$scope.OrigenDestino = {
		orLat: false,
		orLon: false,
		deLat: false,
		deLon: false,
		zoom: 13
	}

	var neighborhoods = [];
	var flightPlanCoordinates = [];
	var markers = [];
	var iterator = 0;

	// Backbutton a home
	//=================================================
	if(!$rootScope.$viewHistory.backView){
		$scope.backButton = $ionicPlatform.registerBackButtonAction( function () {
			$ionicViewService.nextViewOptions({ disableBack: true });
			$state.go('home');
		}, 105 );
		$scope.$on('$destroy', $scope.backButton);
	}

	// Get coordenadas de usuario
	//=================================================
	gMaps.getLocation().then(function(pos){
		$scope.userPosition = pos;
		console.log("client position: ",pos);

		$scope.OrigenDestino.orLat = pos.coords.latitude;
		$scope.OrigenDestino.orLon = pos.coords.longitude;

		var geocoder = new google.maps.Geocoder();
		var latlng = new google.maps.LatLng(pos.coords.latitude,pos.coords.longitude);
		geocoder.geocode({'latLng': latlng}, function(results, status) {
			console.log("results",results);
			console.log("status", status);
			$scope.userPositionName = results[0].address_components[1].short_name;//+", "+results[0].address_components[0].short_name;
			EMTdb.getNearest(pos.coords.latitude,pos.coords.longitude).then(function(data){ console.log("Nearest paradas",data); $scope.nearestClient = data; });
			/*
			if (status == google.maps.GeocoderStatus.OK) {
				if (results[1]) {
					map.setZoom(11);
					marker = new google.maps.Marker({
							position: latlng,
							map: map
					});
					infowindow.setContent(results[1].formatted_address);
					infowindow.open(map, marker);
				} else {
					alert('No results found');
				}
			} else {
				alert('Geocoder failed due to: ' + status);
			}
			*/
		});

	}, function(reason) {
		alert('Failed: ' + reason);
	});
	
	// Google places autocomplete & events
	//=================================================
	$scope.gPlace = new google.maps.places.Autocomplete(document.getElementById('type-selector'), $scope.options);
	google.maps.event.addListener($scope.gPlace, 'place_changed', function() {
		$scope.$apply(function() {
			$scope.details = $scope.gPlace.getPlace();
			console.log($scope.details);    

			deleteMarkers();

			$scope.OrigenDestino.deLat = $scope.details.geometry.location.k;
			$scope.OrigenDestino.deLon = $scope.details.geometry.location.B;

			neighborhoods = [
			  new google.maps.LatLng($scope.OrigenDestino.orLat, $scope.OrigenDestino.orLon),
			  new google.maps.LatLng($scope.OrigenDestino.deLat, $scope.OrigenDestino.deLon),
			];

			flightPlanCoordinates = [
			  new google.maps.LatLng($scope.OrigenDestino.orLat, $scope.OrigenDestino.orLon),
			  new google.maps.LatLng($scope.OrigenDestino.deLat, $scope.OrigenDestino.deLon),
			];

			drop();


			var a = Math.abs($scope.OrigenDestino.orLat - $scope.OrigenDestino.deLat);
			var b = Math.abs($scope.OrigenDestino.orLon - $scope.OrigenDestino.deLon);

			
			if((a > 0.03)||(b > 0.03)){
				$scope.OrigenDestino.zoom = 11;
			}else{
				if((a < 0.01)||(b < 0.01)){
					$scope.OrigenDestino.zoom = 15;
				}else{
					$scope.OrigenDestino.zoom = 13;
				}
				
			}

			console.log("a",a,b);

		});
	});

	// Google Maps
	//=================================================
	function initialize() {

		var mapStyles =[{
			featureType: "poi",
			elementType: "labels",
			stylers: [{visibility: "off" }]
		},
		{
			featureType: "transit",
			elementType: "labels",
			stylers: [{visibility: "off" }]
		}];

		var palma = new google.maps.LatLng(39.573793,2.6406497);

		var mapOptions = {
			center: palma,
			zoom: 13,
			mapTypeId: google.maps.MapTypeId.ROADMAP,
			disableDefaultUI: true,
			styles: mapStyles
		};

		var map = new google.maps.Map(document.getElementById("map"), mapOptions);
		$scope.map = map;

	};

	function drop() {
		iterator = 0;
	  for (var i = 0; i < neighborhoods.length; i++) {
	    setTimeout(function() {
	      addMarker();
	    }, i * 200);
	  }
	  crearLinea($scope.map);
	  $scope.map.panTo(new google.maps.LatLng($scope.OrigenDestino.deLat, $scope.OrigenDestino.deLon));
	}

	function addMarker() {
	  markers.push(new google.maps.Marker({
	    position: neighborhoods[iterator],
	    map: $scope.map,
	    draggable: false,
	    animation: google.maps.Animation.DROP,
	    label: "a"
	  }));
	  iterator++;
	}

	function deleteMarkers() {
	  clearMarkers();
	  neighborhoods = [];
	  markers = [];
	}

	function setAllMap(map) {
	  for (var i = 0; i < markers.length; i++) {
	    markers[i].setMap(map);
	  }
	}

	function clearMarkers() {
	  setAllMap(null);
	  crearLinea(null);
	}

	function crearLinea(map){
	  var flightPath = new google.maps.Polyline({
	    path: flightPlanCoordinates,
	    geodesic: true,
	    strokeColor: '#FF0000',
	    strokeOpacity: 1.0,
	    strokeWeight: 2
	  });

	  flightPath.setMap(map);
	}

	$scope.toggleMapa = function(){
		$scope.verMapa = ($scope.verMapa == 100)?0:100;
	}

	// Inicializa el mapa
	//=================================================
	$scope.cargarMapa = function(){ initialize(); };
	$timeout( $scope.cargarMapa ,300);

});