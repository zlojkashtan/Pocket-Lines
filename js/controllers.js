angular.module('PL.controllers', []);
angular.module('PL.controllers')

//=================================================
// HomeCtrl
// Active sidemenu
//=================================================
.controller('LeftMenuCtrl', function($scope, $location) {
	$scope.isItemActive = function(item) {
		//console.log("wat", $location.path().indexOf(item) > -1);
		return $location.path().indexOf(item) > -1;
	};
})

//=================================================
// HomeCtrl
// Controler de la página principal que se encarga de:
// - Buscar paradas en la EMT
// - sumar paradas al contador de localstorage
//=================================================
.controller('HomeCtrl', ['$scope', '$rootScope', '$stateParams', 'contactoEMT', 'elTiempo', 'InfoItinerario', 'Publicidad', '$filter', '$timeout', '$ionicLoading', '$ionicPopup', '$ionicModal', '$ionicPlatform', '$ionicNavBarDelegate', 'localstorage', 'EMT', 'FavTop', 'shareVar' ,function($scope, $rootScope, $stateParams, contactoEMT, elTiempo, InfoItinerario, Publicidad, $filter, $timeout, $ionicLoading, $ionicPopup, $ionicModal, $ionicPlatform, $ionicNavBarDelegate, localstorage, EMT, FavTop, shareVar) {
	$scope.busqueda = false;
	$scope.respuesta = false;
	$scope.error = false;
	$scope.detalles = false;
	$scope.paradaFav = false;
	$scope.verMapa = false;

	$scope.counter = 1000;
	$scope.idActual = 0;
	$scope.parada = {};
	$scope.isTIB = $stateParams.isTIB;

	$scope.buscar = {texto: ""};

	$scope.publicidad = {home: false, parada: false};

	$scope.paradas = EMT.paradas;

	var today = new Date();


	//$ionicNavBarDelegate.showBackButton(false);

	// Aplicar clicks guardados a JSON de paradas
	//=================================================
	angular.forEach($scope.top, function(item){
		keepGoing = true;
		angular.forEach($scope.paradas, function(parada){
			if(keepGoing){
				if(parseInt(parada.id) === parseInt(item.id)){
					parada.clicks = item.clicks;
					keepGoing = false;
				}
			}
		});
	});

	// Function ontimeout, para el contador de segundos
	// de última parada vista.
	//=================================================
	/*
	$scope.onTimeout = function(){
		$scope.counter++;
		mytimeout = $timeout($scope.onTimeout,1000);
	};

	var mytimeout = $timeout($scope.onTimeout,1000);

	$scope.stop = function(){
		$timeout.cancel(mytimeout);
	};
 //*/

	// Check de publicidad inicial
	//=================================================
	$rootScope.$watch('server', function(newValue, oldValue) {
		if(typeof newValue === "object"){
			$scope.publicidad.home = Publicidad.getTipo("home");
			console.log("publicidad",$scope.publicidad.home);

			//elTiempo.getTiempo();
		}
	});

	elTiempo.getTiempo();

	if(!confirmPopup){
		// Check de votar (cada 17 días)
		//=================================================
		if($rootScope.user.ha_votado === false){

			var oneWeekAgo = new Date();
			var twoDaysAgo = new Date();
			oneWeekAgo.setDate(oneWeekAgo.getDate() - 30);
			twoDaysAgo.setDate(twoDaysAgo.getDate() - 7);

			if(oneWeekAgo.getTime() > $rootScope.user.date_votar){
			if(twoDaysAgo.getTime() > $rootScope.user.date_compartir){
				var confirmPopup = $ionicPopup.confirm({
					title: 'Votar Pocket Lines',
					template: '¿Te parece útil nuestra app? Vota la app con 5 estrellas',
					cancelText: 'Ahora no',
					okText: 'Votar',
				});
				confirmPopup.then(function(res) {
					if(res) {
						$rootScope.user.ha_votado = true;
						localstorage.setObject('user', $rootScope.user);
						window.open('market://details?id=es.bonda.pocketlines', '_system', 'location=yes');
					} else {
						$rootScope.user.date_votar = Date.now();
						localstorage.setObject('user', $rootScope.user);
					}
				});
			}
			}

		}
	}

	if(!confirmPopup){
		// Check de compartir (cada 10 días)
		//=================================================
		if($rootScope.user.ha_compartido === false){

			var oneWeekAgo = new Date();
			var twoDaysAgo = new Date();
			oneWeekAgo.setDate(oneWeekAgo.getDate() - 19);
			twoDaysAgo.setDate(twoDaysAgo.getDate() - 7);

			if(oneWeekAgo.getTime() > $rootScope.user.date_compartir){
			if(twoDaysAgo.getTime() > $rootScope.user.date_votar){
				var confirmPopup = $ionicPopup.confirm({
					title: 'Comparte Pocket Lines',
					template: 'Si la app te parece útil, ¡compártela con tus contactos!',
					cancelText: 'Ahora no',
					okText: 'Compartir',
				});
				confirmPopup.then(function(res) {
					if(res) {
						$rootScope.user.ha_compartido = true;
						localstorage.setObject('user', $rootScope.user);
						window.plugins.socialsharing.share("Ey, porque no pruebas Pocket Lines?", null, null, "https://play.google.com/store/apps/details?id=es.bonda.pocketlines&hl=es");

						if($rootScope.gaPlugin){
							$rootScope.gaPlugin.trackEvent( false, false, "Share App_", "Share App__", "Share App___", 0);
						}
					} else {
						$rootScope.user.date_compartir = Date.now();
						localstorage.setObject('user', $rootScope.user);
					}
				});
			}
			}

		}
	}

	// Function buscarParada
	// Muestra la información de una parada tras
	// consultar a la EMT, además, añade +1 al contador
	// de paradas mas vistas.
	//=================================================
	$scope.buscarParada = function(idParada, item){

		if(typeof idParada === 'undefined'){
			idParada = $scope.idActual;
		}else{
			if(typeof idParada === 'boolean'){
				if(isNaN(parseInt($scope.buscar.texto))){	return false;	}

				idParada = $scope.buscar.texto;
				$scope.idActual = $scope.buscar.texto;

				document.getElementById('inputBusqueda').blur();
			}else{
				$scope.idActual = idParada;
			}

		}

		$scope.busqueda = true;
		$scope.respuesta = false;
		$scope.verMapa = false;

		if(item && item.isTIB){ $scope.isTIB = true; }
		if(!$scope.isTIB){

			$ionicLoading.show({
				template: 'Consultando EMT...'
			});

			contactoEMT.getParada(idParada).then(function (respuesta) {

				$scope.counter = 0;
				$scope.error = false;

				$scope.respuesta = respuesta.data;
				$scope.buscar.texto = $scope.respuesta.nombreParada;
				$ionicLoading.hide();

				// Inserto la información de la última parada vista en paradas recientes.
				// Incluso se podrían poner los clicks
				//=================================================
				$scope.ultima = {id: idParada, nombre: $scope.buscar.texto};
				$rootScope.recientes = FavTop.recientes($scope.ultima, $rootScope.recientes);
				localstorage.setObject('recientes', $rootScope.recientes);

				// Incremento el contador de clicks de la parada
				// para scope y rootscope
				//=================================================
				$rootScope.top = FavTop.incrementar(idParada, $scope.top, $scope.buscar.texto);
				localstorage.setObject('top',$rootScope.top);

				if(item){
					/*
					console.log("el item en cuestion: ", item);
					console.log("Parada Index: ", EMT.paradas.indexOf(item));
					console.log("Parada Object: ", EMT.paradas[EMT.paradas.indexOf(item)]);
					*/
					EMT.paradas[EMT.paradas.indexOf(item)].clicks++;
				}

				// Compruebo el favorito de esta parada
				//=================================================
				$scope.paradaFav = FavTop.checkFavorito(idParada);

				// Get información de la parada (para el mapa)
				//=================================================
				$scope.infoParada = InfoItinerario.getParada(idParada);

				// Get Publicidad de esa parada
				//=================================================
				if(typeof $rootScope.server === "object"){
					$scope.publicidad.parada = Publicidad.getParada(idParada);
					console.log("publicidad parada",$scope.publicidad.parada);
				}

				// Guardar evento en Analytics
				//=================================================
				$rootScope.gaPlugin.trackEvent( false, false, "Buscar Parada_", idParada, "Buscar Parada___", 0);

			}, function(err) {
				$ionicLoading.hide();
				$scope.error = true;
				// An error occured. Show a message to the user
				console.log("error",err);
			});
		}else{

			$scope.respuesta = true;

			// Get información de la parada y línea
			//=================================================
			$scope.infoParada = InfoItinerario.getParada(idParada, 'tib');
			$scope.infoLineas = InfoItinerario.getItinerarios(idParada, 'tib');

			// Set nombre del input search
			//=================================================
			$scope.buscar.texto = $scope.infoParada.nombre;

			// Compruebo el favorito de esta parada
			// Falta: comprobar que isTIB
			//=================================================
			$scope.paradaFav = FavTop.checkFavorito(idParada);

			// Inserto la información de la última parada vista
			// en paradas recientes.
			//=================================================
			$scope.ultima = {id: idParada, nombre: $scope.buscar.texto, isTIB: true};
			$rootScope.recientes = FavTop.recientes($scope.ultima, $rootScope.recientes);
			localstorage.setObject('recientes', $rootScope.recientes);
		}

		// Bind Back button a una función
		//=================================================
		$scope.backButton_resetBusqueda = $ionicPlatform.registerBackButtonAction( function () { resetB(); }, 110 );
		//$scope.$on('$destroy', backButton_resetBusqueda);

	};


	// BuscarParada mediante parametro de URL
	//=================================================
	if(($stateParams.idParada !== "") && (typeof $stateParams.idParada !== 'undefined')){
		$scope.buscar.texto = $stateParams.idParada;
		$scope.buscarParada($stateParams.idParada);
	}

	// Function resetBusqueda
	// Al hacer click a la X se borra el texto y se vuelve
	// al estado incial
	//=================================================
	$scope.resetBusqueda = function(modo, apply){

		$scope.busqueda = false;
		$scope.respuesta = false;
		$scope.verMapa = false;
		$scope.counter = 0;
		$scope.error = false;
		$scope.isTIB = false;

		if(modo === "cross"){
			$scope.buscar.texto = "";
			if(apply){
				$scope.$apply();
			}
		}

	};

	function resetB(){
		console.log("Reseteando!!");
		$scope.resetBusqueda('cross',true);
		$scope.backButton_resetBusqueda();
	}

	// Function detalles
	// Al hacer click busca información sobre esa linea
	// y informa de los horarios
	//=================================================
	$scope.detalles = function(nombreItinerario, idLinea){

		if(this.detalls === true){this.detalls = false;}else{
			this.detalls = true;

			$scope.itinerario = InfoItinerario.getInfo(nombreItinerario);
			console.log($scope.itinerario);

			if(!$scope.itinerario || $scope.itinerario.indeterminado === '1'){
				this.infoLinea = "Debido a variaciones en la trayectoria de esta línea, para más información consulta su itinerario.";
			}else{
				//Determino si el día es feiner, sabado o festivo.
				//Habrá que hacer un script que cuente los días festivos 100% por fecha
				//Con una bateria de dias festivos
				if(today.getDay() === 6){
					$scope.dia = "sabado";
					this.infoLinea = "Los sábados, el bus está en servicio desde las "+ $scope.itinerario.primeroSab + " hasta las " + $scope.itinerario.ultimoSab + " con una frecuencia media de " + $scope.itinerario.frecuenciaSab + " minutos";
				}else{
					if((today.getDay() === 0) || ($rootScope.server.es_festivo === 1)){
						$scope.dia = "domingo";
						this.infoLinea = "Los domingos y festivos, el bus está en servicio desde las "+ $scope.itinerario.primeroFest + " hasta las " + $scope.itinerario.ultimoFest + " con una frecuencia media de " + $scope.itinerario.frecuenciaFest + " minutos";
					}else{
						$scope.dia = "feiner";
						this.infoLinea = "Bus en servicio desde las "+ $scope.itinerario.primero + " hasta las " + $scope.itinerario.ultimo + " con una frecuencia media de " + $scope.itinerario.frecuencia + " minutos";
					}
				}
			}
		}

	};

	// Function numIncidencias
	// se encarga de devolver el número de incidencias
	// que tiene una línea en particular
	//=================================================
	$scope.numIncidencias = function(idLinea){
		if($scope.busqueda){
			var inc = InfoItinerario.getIncidencias(idLinea);
			return inc;
		}
	};

	$ionicModal.fromTemplateUrl('modal.html', function(modal) {
		$scope.modal = modal;
	}, {
		animation: 'no-animation',
		focusFirstInput: true
	});

	$scope.verAvisos = function(idLinea){
		$rootScope.avisosLinea = idLinea;
		$scope.modal.show();
	};

	//Cleanup the modal when we're done with it!
	$scope.$on('$destroy', function() {
		$scope.modal.remove();
	});

	$scope.mostrarMapa = function(){
		$scope.verMapa = !$scope.verMapa;
	};

	// Function addFavorito
	// Añade una parada al rootscope y localstorage
	//=================================================
	$scope.addFavorito = function(){
		$scope.paradaFav = !$scope.paradaFav;

		// Añado la parada en favoritos o la elimino
		//=================================================
		if($scope.isTIB){
			$scope.parada = {id: $scope.idActual, nombre: $scope.buscar.texto, isTIB: true};
		}else{
			$scope.parada = {id: $scope.idActual, nombre: $scope.buscar.texto};
		}
		//console.log($scope.parada);
		$rootScope.favoritos = FavTop.toggleFavorito($scope.parada, $rootScope.favoritos);
		localstorage.setObject('favoritos', $rootScope.favoritos);
	};

	// Function alarma
	// Activa una alarma Dados X minnutos
	//=================================================
	$scope.alarma = function(){
		$ionicPopup.prompt({
			title: 'Establecer alarma',
			inputType: 'number',
			subTitle: '¿Avisar en cuántos minutos?'
		}).then(function(res) {
			if((res !== "") && (typeof res !== 'undefined')){
				var minutos = parseInt(res);
				if(isNaN(minutos)){
					$ionicPopup.alert({
						title: 'Error',
						template: 'Escribe un número'
					});
				}else{
					$ionicPopup.alert({
						title: 'Nueva alarma',
						template: 'Se ha activado una alarma para dentro de '+ minutos + ' minutos'
					});
					minutos = new Date(Date.now() + (minutos * 60 * 1000));

					window.plugin.notification.local.add({
						/*
						id:         String,  // A unique id of the notifiction
						date:       Date,    // This expects a date object
						message:    String,  // The message that is displayed
						title:      String,  // The title of the message
						repeat:     String,  // Either 'secondly', 'minutely', 'hourly', 'daily', 'weekly', 'monthly' or 'yearly'
						badge:      Number,  // Displays number badge to notification
						sound:      String,  // A sound to be played
						json:       String,  // Data to be passed through the notification
						autoCancel: Boolean, // Setting this flag and the notification is automatically canceled when the user clicks it
						ongoing:    Boolean, // Prevent clearing of notification (Android only)
						*/
					id: "EMT",
					date: minutos,
					message: "El bus va a llegar!",
					title: "Pocket Lines: EMT",
					//sound: '/www/res/raw/tone.mp3',
					autoCancel: true
				});

				}

			}else{
				$ionicPopup.alert({
					title: 'Cancelado',
					template: 'No se ha activado ninguna alarma',
					okType: 'button-dark'
				});
			}
		});
	};

}])




//=================================================
// Tarifas de autobús
//=================================================
.controller('Tarifas', function($scope, $rootScope, $ionicPlatform){

	// Backbutton a home
	//=================================================
	if(!$rootScope.$viewHistory.backView){
		$scope.backButton = $ionicPlatform.registerBackButtonAction( function () {
			$ionicViewService.nextViewOptions({ disableBack: true });
			$state.go('home');
		}, 105 );
		$scope.$on('$destroy', $scope.backButton);
	}

	$scope.tab = 0;
	
})

//=================================================
// About static Text
// Y contacto
//=================================================
.controller('about', function($scope, $rootScope, $stateParams, $http, $ionicPlatform, localstorage){

	// Backbutton a home
	//=================================================
	if(!$rootScope.$viewHistory.backView){
		$scope.backButton = $ionicPlatform.registerBackButtonAction( function () {
			$ionicViewService.nextViewOptions({ disableBack: true });
			$state.go('home');
		}, 105 );
		$scope.$on('$destroy', $scope.backButton);
	}

	$scope.tab = 0;
	if($stateParams.param){ $scope.tab = 1; }
	$scope.enviado = false;

	$scope.contacto = function(nombre, email, comentario){

		$scope.enviando = true;

		var xsrf = {
			nombre: nombre,
			email: email,
			comentario: comentario
		};

		//Envio los datos al servidor

		$http({
			url: 'http://gasparsabater.com/api/contacto',
			method: "POST",
			data: xsrf,
			headers: {'Content-Type': 'application/x-www-form-urlencoded'}
		})
		.success(function (data, status, headers, config) {
			//console.log(JSON.stringify(data));
			$scope.enviado = true;

		}).error(function (data, status, headers, config) {
			//console.log("msg: " + data.error);
		});
	};

	$scope.compartir = function(){
		$rootScope.user.ha_compartido = true;
		localstorage.setObject('user', $rootScope.user);
		window.plugins.socialsharing.share("Ey, porque no pruebas Pocket Lines?", null, null, "https://play.google.com/store/apps/details?id=es.bonda.pocketlines&hl=es");

		if($rootScope.gaPlugin){
			$rootScope.gaPlugin.trackEvent( false, false, "Share App_", "Share App__", "Share App___", 0);
		}
	}
})

//=================================================
// About static Text
// Y contacto
//=================================================
.controller('Publicidad', function($scope, $rootScope, $stateParams, $filter, Publicidad){

	$scope.idPubli = $stateParams.idP;
	console.log($scope.idPubli);

	$scope.data = Publicidad.getId($stateParams.idP);

	$scope.verWeb = function(){
		var ref = window.open($scope.data.url, '_system', 'location=yes');
		if($rootScope.gaPlugin){
			$rootScope.gaPlugin.trackEvent( false, false, "Open URL Pub_", $scope.data.url, "Open URL Pub___", 0);
		}
	};

	$scope.share = function(){
		/*
		https://github.com/EddyVerbruggen/SocialSharing-PhoneGap-Plugin#2-screenshots

		Mail: message, subject, file.
		Twitter: message, image (other filetypes are not supported), link (which is automatically shortened).
		Google+ / Hangouts (Android only): message, subject, link
		Flickr: message, image (an image is required for this option to show up).
		Facebook iOS: message, image (other filetypes are not supported), link.
		Facebook Android: sharing a message is not possible. You can share either a link or an image (not both), but a description can not be prefilled. See this Facebook issue which they won't solve.
		 */
		window.plugins.socialsharing.share($filter('sharear')($scope.data.texto), null, null, $scope.data.url);

		if($rootScope.gaPlugin){
			$rootScope.gaPlugin.trackEvent( false, false, "Share Pub_", $scope.idPubli +" ("+$scope.data.anunciante+")", "Share Pub___", 0);
		}

	};

	// Guardar evento en Analytics
	// - Abrir publicidad
	//=================================================
	if($rootScope.gaPlugin){
		$rootScope.gaPlugin.trackEvent( false, false, "Open Publicidad_", $scope.idPubli +" ("+$scope.data.anunciante+")", "Open Publicidad___", 0);
	}

})

//=================================================
// Taxis
// Listado de taxis
//=================================================
.controller('Taxis', function($scope){

	$scope.taxis = [
		{nombre: 'Taxis Palma Radio', numero: 971401414, zona: 'Palma'},
		{nombre: 'Radio-Taxi Ciutat', numero: 971201212, zona: 'Palma'},
		{nombre: 'Fono Taxi', numero: 971728081, zona: 'Palma, Aeropuerto'},
		{nombre: 'Radio-Taxi Llucmajor', numero: 971440212, zona: "Llucmajor, s'Arenal"},
		{nombre: 'Radio-Taxi Calvia', numero: 971134700, zona: 'Calviá'}
	];
})

//=================================================
// paradasMap
// - Controller de google maps para mostrar todas las
// paradas en el mapa
// https://github.com/apache/cordova-plugin-geolocation/blob/master/doc/index.md
//=================================================
.controller('paradasMap', function($scope, $rootScope, $ionicLoading, $ionicPlatform, EMT, $timeout) {

	// Backbutton a home
	//=================================================
	if(!$rootScope.$viewHistory.backView){
		$scope.backButton = $ionicPlatform.registerBackButtonAction( function () {
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
	$scope.cargarMapa = function(){
		initialize();
	};
	$timeout( $scope.cargarMapa ,700);


});
