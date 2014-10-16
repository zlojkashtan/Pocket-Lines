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
.controller('paradasMap', function($scope, $rootScope, $ionicLoading, $ionicPlatform, $state, $ionicViewService, EMT, $timeout) {

	// Backbutton a home
	//=================================================
	if(!$rootScope.$viewHistory.backView){
		$scope.backButton = $ionicPlatform.registerBackButtonAction( function () {
			console.log("MAPABACK");
			$ionicViewService.nextViewOptions({ disableBack: true });
			$state.go('home');
		}, 105 );
		$scope.$on('$destroy', $scope.backButton);
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

	$scope.colores = {
		1: "#44743F",
		2: "#B78DBA",
		3: "#F45BA4",
		4:"-",
		5: "#72C0D8",
		6: "#4F6D5E",
		7: "#499C75",
		8: "#4E43B1",
		9: "#AB478F",
		10: "#623E5A",
		11: "#F3DB78",
		12: "#F1B543",
		13:"-",
		14: "#6173C7",
		15: "#2474CC",
		16: "#5496AF",
		17:"-",
		18: "#716240",
		19: "#5EA532",
		20: "#de544e",
		21: "#6c0007",
		22:"-",
		23: "#B39633",
		24: "#605677",
		25: "#666666",
		26:"-",
		27:"-",
		28: "#E9A0C8",
		29: "#C4A695",
		30: "#A04541",
		31: "#d3dd7d",
		32:"-",
		33: "#687981",
		34: "#969691",
		35:"-",
		36:"-",
		37:"-",
		38:"-",
		39:"-",
		40:"-",
		41: "#F58E49",
		42:"-",
		43:"-",
		44:"-",
		45:"-",
		46: "#EEAA60",
		47:"-",
		48:"-",
		49:"-",
		50: "#E84F4A",
		51:"-",
		52: "#D04742",
	};

	$scope.color = function(idLinea){
		var encontrado = false;
		var colorFound = "";

		angular.forEach($scope.colores, function(item, $index){
			if(!encontrado){
				if($index === idLinea){
					colorFound = item;
					encontrado = true;
				}
			}
		});

		return colorFound;

	};

	function initialize() {
		//Inicializa google maps con opciones de centrado en palma
		//y zoom 13 para ver la periferia. Tipo de mapa: calles
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

		google.maps.event.addListener(map, 'zoom_changed', function() {
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

		$scope.map = map;

		$scope.centerOnMe();
	}


	function setAllMap(map) {
		for (var i = 0; i < markers.length; i++) {
			markers[i].setMap(map);
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
			// This marker is 20 pixels wide by 32 pixels tall.
			size: new google.maps.Size(32, 37),
			// The origin for this image is 0,0.
			origin: new google.maps.Point(0,0),
			// The anchor for this image is the base of the flagpole at 0,32.
			anchor: new google.maps.Point(0, 0)
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
					map: map,
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
					/*

		nombreParada: '',
		numeroParada: 0,
		lineas: false
		*/
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
	$scope.centerOnMe = function() {
		if(!$scope.map) {
			return;
		}

		$ionicLoading.show({
			template: 'Localizando tu punto en el mapa...'
		});

		if(!navigator.geolocation){
			//alert("nav geo fail");
		}
		navigator.geolocation.getCurrentPosition(function(pos) {
		console.log(pos);
			var marker = new google.maps.Marker({
				position: new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude),
				map: $scope.map,
				title: 'User Position'
			});

			$scope.map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
			$ionicLoading.hide();
			$scope.detalles.noGeo = false;

		}, function(error) {

			$ionicLoading.hide();
			$scope.detalles.noGeo = true;

		},{maximumAge: 3000, timeout:5000});

	};

	// Inicializa el mapa
	//=================================================
	$scope.cargarMapa = function(){ initialize(); };
	$timeout( $scope.cargarMapa ,600);

});