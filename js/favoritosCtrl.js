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
// Favoritos Controller
//
// - Paradas guardadas
// - Más vistas
// - Recientes
//=================================================
.controller('Favoritos', function($scope, $rootScope, $ionicPopup, $ionicPlatform, $state, $ionicViewService, localstorage, FavTop){

	// Backbutton a home
	//==================================================
	if(!$rootScope.$viewHistory.backView){
		$scope.backButton = $ionicPlatform.registerBackButtonAction( function () {
			console.log("FAVORITOSBACK");
			$ionicViewService.nextViewOptions({ disableBack: true });
			$state.go('home');
		}, 105 );
		$scope.$on('$destroy', $scope.backButton);
	}

	$scope.tab = 0;
	$rootScope.tabs = true;
	$scope.$on('$destroy', function(){$rootScope.tabs = false;});

	$scope.data = {
		showDelete: false,
		cambios: false
	};

	$scope.showPrompt = function(element) {
		$ionicPopup.prompt({
			title: 'Cambiar aliass',
			subTitle: 'Elije un nombre para esta parada'
		}).then(function(res) {
			if((res !== "") && (typeof res !== 'undefined')){
				$rootScope.favoritos[$rootScope.favoritos.indexOf(element)].alias = res;
				localstorage.setObject('favoritos', $rootScope.favoritos);
				//console.log('Your name is', res);
				//console.log($rootScope.favoritos.indexOf(element));
			}
		});
	};

	$scope.borrarParada = function(element, tipo){
		if(tipo === "favoritos"){
			$scope.index = $rootScope.favoritos.indexOf(element);
			$rootScope.favoritos.splice($scope.index, 1);
			$scope.data.cambios = true;
		}

		if(tipo === "top"){
			$scope.index = $rootScope.top.indexOf(element);
			$rootScope.top.splice($scope.index, 1);
			$scope.data.cambios = true;
		}

		if(tipo === "recientes"){
			$scope.index = $rootScope.recientes.indexOf(element);
			$rootScope.recientes.splice($scope.index, 1);
			$scope.data.cambios = true;
		}
	};

	$scope.editarGuardar = function(){
		$scope.data.showDelete = !$scope.data.showDelete;

		if($scope.data.cambios === true){
			localstorage.setObject('favoritos', $rootScope.favoritos);
			localstorage.setObject('recientes', $rootScope.recientes);
			localstorage.setObject('top', $rootScope.top);
			$scope.data.cambios = false;
		}
	};

});
