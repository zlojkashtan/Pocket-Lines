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

angular.module('PL', ['ionic', 'PL.factories', 'PL.services', 'PL.controllers'])

.run(function($rootScope, localstorage, $ionicPlatform, $http){
	console.log("+ App start");

	$rootScope.appOffline = false;
	$rootScope.version = 0.85;
	$rootScope.num_taxi = "871962349";
	$rootScope.app_store = "";

	$rootScope.user = {
		idioma: "es",
		date_votar: Date.now(),
		date_compartir: Date.now(),
		ha_votado: false,
		ha_compartido: false
	};

	// Get Localstorage de paradas guardadas
	//=================================================
	var favoritos = localstorage.getObject('favoritos');
	if(favoritos.length > 0){
		$rootScope.favoritos = favoritos;
	}else{
		$rootScope.favoritos = [];
	}

	//console.log("+ localstorage: Favoritos");
	//console.log($rootScope.favoritos);

	// Get Localstorage de ultimas paradas vistas
	//=================================================
	var Recientes = localstorage.getObject('recientes');
	if(Recientes.length > 0){
		$rootScope.recientes = Recientes;
	}else{
		$rootScope.recientes = [];
	}

	//console.log("+ localstorage: recientes");
	//console.log($rootScope.recientes);

	// Get Localstorage de clicks en paradas top
	//=================================================
	var topParadas = localstorage.getObject('top');
	if(topParadas.length > 0){
		$rootScope.top = topParadas;
	}else{
		$rootScope.top = [];
	}

	//console.log("+ localstorage: top");
	//console.log($rootScope.top);

	// Get Localstorage de usuario
	//=================================================
	var user = localstorage.getObject('user');

	if(user.idioma){
		user.entradas++;
		$rootScope.user = user;
		localstorage.setObject('user', user);
	}else{
		localstorage.setObject('user', $rootScope.user);
	}

	// Funciones de conexión de dispositivo
	//=================================================
	$rootScope.checkConnection = function(){
		var networkState = navigator.connection.type;

		var states = {};
		states[Connection.UNKNOWN]  = 'Unknown connection';
		states[Connection.ETHERNET] = 'Ethernet connection';
		states[Connection.WIFI]     = 'WiFi connection';
		states[Connection.CELL_2G]  = 'Cell 2G connection';
		states[Connection.CELL_3G]  = 'Cell 3G connection';
		states[Connection.CELL_4G]  = 'Cell 4G connection';
		states[Connection.CELL]     = 'Cell generic connection';
		states[Connection.NONE]     = 'No network connection';

		console.log(' + app: Connection type: ' + states[networkState]);
	};

	$rootScope.onOffline = function(){
		console.log("You Are Offline :(");
		$rootScope.appOffline = true;
		$rootScope.$apply();
	};

	$rootScope.onOnline = function(){
		console.log("You Are Online :D");
		$rootScope.appOffline = false;
		$rootScope.$apply();
		$rootScope.loadServer();
	};

	// Google Analytics Init, Success & Error Handler
	// https://github.com/phonegap-build/GAPlugin
	//=================================================
	$rootScope.GA_success = function(a){
		console.log("success",a);
	};

	$rootScope.GA_error = function(a){
		console.log("error",a);
	};

	$rootScope.analytics = function(){
		console.log("+ App: Analytics Start");
		if(window.cordova){
			$rootScope.gaPlugin = window.plugins.gaPlugin;
	    $rootScope.gaPlugin.init($rootScope.GA_success, $rootScope.GA_error, "UA-52218616-1", 30);
  	}
	};

	$rootScope.loadServer = function(){
		// Get información del server
		//=================================================
		if(!$rootScope.server){
			if($rootScope.appOffline === false){

				$rootScope.server = true; //Para evitar que cargue dos veces antes de recoger los datos.

				$http({method: 'GET', url: 'http://gasparsabater.com/api/EMT'}).
				success(function(data, status, headers, config) {
					console.log("+ JSON: server");
					console.log(data);
					$rootScope.server = data;
					$rootScope.analytics();
				}).
				error(function(data, status, headers, config){
					$rootScope.server = false;
				});
			}
		}
	};

	// Funciones eventlistener de deviceready
	//=================================================
	$ionicPlatform.ready(function() {
		console.log("+ app: DeviceReady");

		//ionic.Platform.isFullScreen = true;

		$rootScope.loadServer();
		$rootScope.checkConnection();

		document.addEventListener("offline", $rootScope.onOffline, false);
		document.addEventListener("online", $rootScope.onOnline, false);


		if(window.cordova && window.cordova.plugins.Keyboard) {
       cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }

    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
		
    // Google Maps Dynamic
    // ----------------------
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://maps.googleapis.com/maps/api/js?v=3&key=AIzaSyBZTsXko-Ayp6A6zHZvObauktcVe4S64fI&sensor=true' + '&libraries=places&'+'callback=initialize';
    document.body.appendChild(script);
    //http://stackoverflow.com/questions/23354358/how-do-i-load-google-maps-external-javascript-after-page-loads

	});

	if ($ionicPlatform.is('android')) {
		console.log("+ App platform: android");
	} else if ($ionicPlatform.is('ios')) {
		console.log("+ App platform: ios");
	} else {
		console.log("+ App platform: pc");
		// LoadServer, comentado en app
		//$rootScope.loadServer();
	}


	//
	// Back Button behaviour
	// - 100 Exit app
	// - 110 -> resetBusqueda
	//
	// PLATFORM_BACK_BUTTON_PRIORITY_VIEW = 100;
	// PLATFORM_BACK_BUTTON_PRIORITY_SIDE_MENU = 150;
	// PLATFORM_BACK_BUTTON_PRIORITY_ACTION_SHEET = 300;
	// PLATFORM_BACK_BUTTON_PRIORITY_POPUP = 400;
	// PLATFORM_BACK_BUTTON_PRIORITY_LOADING = 500;

})
.config(function($stateProvider, $urlRouterProvider) {

	$stateProvider

		.state('home', {
			url: '/home',
			templateUrl: 'templates/home.html',
			controller: 'HomeCtrl'
		})

		// EMT
		//=================================================
		.state('parada', {
			url: '/parada/:idParada',
			templateUrl: 'templates/home.html',
			controller: 'HomeCtrl'
		})

		.state('paradai', {
			url: '/parada/:idParada/:isTIB',
			templateUrl: 'templates/home.html',
			controller: 'HomeCtrl'
		})

		.state('favoritos', {
			url: '/favoritos',
			templateUrl: 'templates/paradas-guardadas.html',
			controller: 'Favoritos'
		})

		.state('cercanas', {
			url: '/cercanas',
			templateUrl: 'templates/paradas-cercanas.html',
			controller: 'paradasMap'
		})

		.state('lineas', {
			url: '/lineas',
			templateUrl: 'templates/lineas.html',
			controller: 'Lineas'
		})

		.state('linea', {
			url: '/linea/:idLinea/:itinerario',
			templateUrl: 'templates/linea.html',
			controller: 'Linea'
		})

		.state('lineai', {
			url: '/linea/:idLinea',
			templateUrl: 'templates/linea.html',
			controller: 'Linea'
		})


		.state('tarifas', {
			url: '/tarifas',
			templateUrl: 'templates/tarifas.html',
			controller: 'Tarifas'
		})

		.state('avisos', {
			url: '/avisos',
			templateUrl: 'templates/avisos.html',
			controller: 'Avisos'
		})

		// TIB
		//=================================================
		.state('TIB_tren_lineas', {
			url: '/tib_tren_lineas',
			templateUrl: 'templates/lineas.html',
			controller: 'TIB_tren_lineas'
		})

		.state('TIB_tren_lineai', {
			url: '/tib_tren_linea/:idLinea/:itinerario',
			templateUrl: 'templates/linea.html',
			controller: 'TIB_tren_linea'
		})

		.state('TIB_tren_linea', {
			url: '/tib_tren_linea/:idLinea',
			templateUrl: 'templates/linea.html',
			controller: 'TIB_tren_linea'
		})

		// Taxis
		//=================================================
		.state('taxis', {
			url: '/taxis',
			templateUrl: 'templates/taxis.html',
			controller: 'Taxis'
		})

		// Misc
		//=================================================
		.state('about', {
			url: '/about',
			templateUrl: 'templates/acercade-contacto.html',
			controller: 'about'
		})

		.state('about_', {
			url: '/about/:param',
			templateUrl: 'templates/acercade-contacto.html',
			controller: 'about'
		})

		.state('publicidad', {
			url: '/publicidad/:idP',
			templateUrl: 'templates/publicidad.html',
			controller: 'Publicidad'
		});

	// if none of the above states are matched, use this as the fallback
	$urlRouterProvider.otherwise('/home');

});