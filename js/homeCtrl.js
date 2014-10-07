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
//.controller('HomeCtrl', ['$scope', '$rootScope', '$stateParams', 'contactoEMT', 'elTiempo', 'InfoItinerario', 'Publicidad', '$filter', '$ionicLoading', '$ionicPopup', '$ionicPlatform', 'localstorage', 'EMTdb', 'FavTop' ,function($scope, $rootScope, $stateParams, contactoEMT, elTiempo, InfoItinerario, Publicidad, $filter, $ionicLoading, $ionicPopup, $ionicPlatform, localstorage, EMTdb, FavTop) {
.controller('HomeCtrl', function($scope, $rootScope, $stateParams, contactoEMT, elTiempo, InfoItinerario, Publicidad, $filter, $ionicLoading, $ionicPopup, $ionicPlatform, localstorage, EMTdb, FavTop) {
	
	$scope.busqueda = false;
	$scope.respuesta = false;
	$scope.error = false;
	$scope.detalles = false;
	$scope.paradaFav = false;

	$scope.idActual = 0;
	$scope.parada = {};
	$scope.isTIB = $stateParams.isTIB;
	$scope.buscar = {texto: ""};

	$scope.publicidad = {
		home: false, 
		parada: false
	};

	//$scope.verMapa = false;
	$scope.actions = {
		mapa: false
	}

	// Check de publicidad inicial
	//=================================================
	$rootScope.$watch('server', function(newValue, oldValue) {
		if(typeof newValue === "object"){
			$scope.publicidad.home = Publicidad.getTipo("home");
			console.log("publicidad",$scope.publicidad.home);
		}
	});

	if($rootScope.user.elTiempo){
		elTiempo.getTiempo();	
	}

/*
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
	}*/

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

		// Reset estados
		$scope.busqueda = true;
		$scope.respuesta = false;
		//$scope.verMapa = false;
		$scope.actions.mapa = false;

		if(item && item.isTIB){ $scope.isTIB = true; }
		if(!$scope.isTIB){
			$ionicLoading.show({
				template: '<i class="ion ion-loading-c"></i>'
			});

			contactoEMT.getParada(idParada).then(function (respuesta) {

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
				// SQLite
				//=================================================
				EMTdb.clicks(idParada);

				// Compruebo el favorito de esta parada
				//=================================================
				$scope.paradaFav = FavTop.checkFavorito(idParada);

				// Get información de la parada (para el mapa)
				// EMTdb.getParadas()
				//=================================================
				EMTdb.getParada(idParada).then(function(data){ $scope.infoParada = data; });
				//console.log($scope.infoParada);

				// Get Publicidad de esa parada
				//=================================================
				if(typeof $rootScope.server === "object"){
					$scope.publicidad.parada = Publicidad.getParada(idParada);
					console.log("publicidad parada", $scope.publicidad.parada);
				}

				// Guardar evento en Analytics
				//=================================================
				$rootScope.gaPlugin.trackEvent( false, false, "Buscar Parada_", idParada, "Buscar Parada___", 0);

			}, function(err) {				
				$ionicLoading.hide();
				$scope.error = true;
				// An error occured. Show a message to the user
				// console.log("error",err);
			});

		}else{ // Else -> is tib

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
		//$scope.verMapa = false;
		$scope.actions.mapa = false;
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
		$scope.resetBusqueda('cross',true);
		$scope.backButton_resetBusqueda();
	}

	// Function detalles
	// Al hacer click busca información sobre esa linea
	// e informa de los horarios
	//=================================================
	$scope.detalles = function(nombreItinerario){

		var that = this;

		if(this.detalls === true){this.detalls = false;}else{
			this.detalls = true;

			EMTdb.getItinerarioByNombre(nombreItinerario).then(function(data){ 
				that.infoLinea = $filter('infoItinerario')(data);
			}, function(err){ 
				console.log(err);
			});
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

	$scope.verAvisos = function(idLinea){

	};
/*
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
	});*/

	// Function addFavorito
	// Añade una parada al rootscope y localstorage
	//=================================================
	$scope.addFavorito = function(){
		$scope.paradaFav = !$scope.paradaFav;

		// Añado la parada en favoritos o la elimino
		//=================================================
		$scope.parada = {id: $scope.idActual, nombre: $scope.buscar.texto};
		if($scope.isTIB){ $scope.parada.isTIB = true; }
		
		$rootScope.favoritos = FavTop.toggleFavorito($scope.parada, $rootScope.favoritos);
		localstorage.setObject('favoritos', $rootScope.favoritos);
	};

	// Function alarma
	// Activa una alarma Dados X minutos
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
						template: 'No se ha podido activar un alarma'
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
					title: "Pocket Lines",
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


	// Update paradas
	// Update DB
	//=================================================
	$scope.update = function(){
		$scope.showUpdate = true;
	}
	$scope.cancelUpdate = function(){
		$scope.showUpdate = false;
	}
	$scope.doUpdate = function(){
		$scope.updating = true;
		$rootScope.UpdatedbEMT();
	}

//}])
})


//=================================================
// Tarifas de autobús
//=================================================
.controller('Tarifas', function($scope, $rootScope, $ionicPlatform, $state, $ionicViewService){

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
	$rootScope.tabs = true;
	$scope.$on('$destroy', function(){$rootScope.tabs = false;});
	
})

//=================================================
// About static Text
// Y contacto
//=================================================
.controller('about', function($scope, $rootScope, $stateParams, $http, $ionicPlatform, $state, $ionicViewService, localstorage){

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
	$rootScope.tabs = true;
	$scope.$on('$destroy', function(){$rootScope.tabs = false;});
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
// Ajustes
//=================================================
.controller('Ajustes', function($scope, $rootScope, $ionicPlatform, $state, $ionicViewService, $translate, localstorage){

	$scope.idioma = $rootScope.user.lang;

	// Backbutton a home
	//---------------------------------------------------
		if(!$rootScope.$viewHistory.backView){
			$scope.backButton = $ionicPlatform.registerBackButtonAction( function () {
				$ionicViewService.nextViewOptions({ disableBack: true });
				$state.go('home');
			}, 105 );
			$scope.$on('$destroy', $scope.backButton);
		}

	// Guardar preferencias de ajustes
	//---------------------------------------------------
		$scope.guardar = function(){
			localstorage.setObject('user', $rootScope.user);
		};

	// Cambiar idioma en ajustes y save en rootscope
	//---------------------------------------------------
		$scope.changeLanguage = function (key) {
			$rootScope.user.lang = key;
			$translate.use(key);

			$scope.guardar();

		};
	
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
});
