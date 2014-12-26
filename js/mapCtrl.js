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
// paradasMap
//
// Controller de google maps para mostrar todas
// las paradas cercanas al usuario en el mapa
// https://github.com/apache/cordova-plugin-geolocation/blob/master/doc/index.md
//=================================================
.controller('paradasMap', function($scope, $rootScope, $ionicLoading, $ionicPlatform, $state, $ionicHistory, EMT, $timeout) {

	// Backbutton a home
	//==================================================
	if(!$ionicHistory.backView()){
		var backButton = $ionicPlatform.registerBackButtonAction( function () {
			$ionicHistory.nextViewOptions({ disableBack: true });
			$state.go('home');
		}, 105 );
		$scope.$on('$destroy',backButton);
	}

	var markers = []; //Guardo los markers para poder actuar posteriormente

	$scope.detalles = {
		abierto:false,
		nombreParada: '',
		numeroParada: 0,
		lineas: false,
		marcadores: false,
		noGeo:false
	};

	function initialize() {
		// Inicializa google maps con opciones de centrado en palma
		// y zoom 13 para ver la periferia. Tipo de mapa: calles
		// http://stackoverflow.com/questions/8406636/how-to-remove-all-from-google-map
		//
		// Polyline: https://developers.google.com/maps/documentation/javascript/examples/polyline-remove
		// Google maps events: http://www.w3schools.com/googleapi/google_maps_events.asp
		// Change zoom: https://developers.google.com/maps/documentation/javascript/examples/event-properties

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
			zoom: 16,
			mapTypeId: google.maps.MapTypeId.ROADMAP,
			disableDefaultUI: true,
			styles: mapStyles
		};

		var map = new google.maps.Map(document.getElementById("map"), mapOptions);

		setMarkers(map, EMT.paradas);

		//Listener de zoom
		google.maps.event.addListener(map, 'zoom_changed', function(){
			var zoomLevel = map.getZoom();

			if(zoomLevel < 15){
				clearMarkers();
				$scope.detalles.marcadores = true;
			}else{
				if($scope.detalles.marcadores){
					showMarkers();
					$scope.detalles.marcadores = false;
				}
			}

			$scope.$apply();
		});

		//Listener de movimiento
		google.maps.event.addListener(map, 'dragend', function() {
			showMarkers();
		});

		$scope.map = map;

		$scope.centerOnMe();
	}


	function setAllMap(map) {
		var bounds = $scope.map.getBounds();

		for (var i = 0; i < markers.length; i++) {
			if( bounds.contains(markers[i].getPosition())){
				markers[i].setMap(map);
			}else{
				markers[i].setMap(null);
			}
		}
	}

	function clearMarkers() {
		setAllMap(null);
	}

	function showMarkers() {
		setAllMap($scope.map);
	}

	function setMarkers(map, locations) {
		// Add markers to the map

		// Marker sizes are expressed as a Size of X,Y
		// where the origin of the image (0,0) is located
		// in the top left of the image.

		// Origins, anchor positions and coordinates of the marker
		// increase in the X direction to the right and in
		// the Y direction down.
		var image = {
			url: 'img/busstop.png',
			size: new google.maps.Size(32, 37),
			origin: new google.maps.Point(0,0),
			anchor: new google.maps.Point(0,0)
		};
		// Shapes define the clickable region of the icon.
		// The type defines an HTML &lt;area&gt; element 'poly' which
		// traces out a polygon as a series of X,Y points. The final
		// coordinate closes the poly by connecting to the first
		// coordinate.
		var shape = {
				coord: [1, 1, 1, 20, 18, 20, 18 , 1],
				type: 'poly'
		};

		for (var i = 0; i < locations.length; i++) {
			var beach = locations[i];
			var myLatLng = new google.maps.LatLng(beach.lat, beach.lng);
			var marker = new google.maps.Marker({
					position: myLatLng,
					//map: map,
					map: null,
					icon: image,
					//shape: shape,
					title: beach.nombre,
					parada: beach
					//zIndex: beach[3]
			});

			markers.push(marker);

			//evento de click para cada marker
			google.maps.event.addListener(marker, 'click', function() {
				//console.log(this);
				if(this.parada.id !== $scope.detalles.numeroParada){
					$scope.detalles.numeroParada = this.parada.id;
					$scope.detalles.nombreParada = this.title;
					$scope.detalles.abierto = true;
					$scope.detalles.lineas = this.parada.otras;
				}else{
					$scope.detalles.abierto = !$scope.detalles.abierto;
				}

				$scope.$apply();
			});
		}
	}

	// Function centerOnMe
	// Función que utiliza la funcionalidad del GPS
	// para localizar al usuario en el mapa
	// https://github.com/apache/cordova-plugin-geolocation/blob/master/doc/index.md
	//=================================================
	$scope.centerOnMe = function(){
		if(!$scope.map) {
			return;
		}

		$ionicLoading.show({
			template: '<i class="ion ion-ios-location"></i> Buscándote...'
		});

		if(!navigator.geolocation){
			//alert("nav geo fail");
		}

		navigator.geolocation.getCurrentPosition(function(pos) {

		console.log("User en:",pos);

			var marker = new google.maps.Marker({
				position: new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude),
				map: $scope.map,
				title: 'User Position'
			});

			$scope.map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
			$ionicLoading.hide();
			$scope.detalles.noGeo = false;

			showMarkers();

		}, function(error) {

			$ionicLoading.hide();
			$scope.detalles.noGeo = true;

		},{maximumAge: 3000, timeout:5000});

	};

	// Inicializa el mapa tras medio segundo
	//=================================================
	$scope.cargarMapa = function(){ initialize(); };
	$timeout( $scope.cargarMapa ,500);

});
