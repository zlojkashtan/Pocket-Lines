angular.module('PL.controllers')

//=================================================
// TIB tren/metro
// Muestra un listado de todas las lineas del tren y metro de TIB
// y muestra el itinerario e info de la linea on click
//=================================================
.controller('TIB_tren_lineas', function($scope, $rootScope, $ionicPlatform, $state, $ionicViewService, TIBTREN){
	$scope.lineas = TIBTREN.lineas;
	$scope.empresa = "tib";

	// Backbutton a home
	//=================================================
	if(!$rootScope.$viewHistory.backView){
		$scope.backButton = $ionicPlatform.registerBackButtonAction( function () {
			$ionicViewService.nextViewOptions({ disableBack: true });
			$state.go('home');
		}, 105 );
		$scope.$on('$destroy', $scope.backButton);
	}
})


//=================================================
// TIB tren/metro
// Muestra la info de la linea seleccionada
// y muestra el itinerario e info de la linea on click
//=================================================
.controller('TIB_tren_linea', function($scope, $rootScope, $stateParams, $ionicPlatform, $state, $ionicViewService, TIBTREN, InfoItinerario){

	$scope.tab = 0;
	$scope.empresa = "tib";

	$scope.idLinea = $stateParams.idLinea;
	$scope.linea = InfoItinerario.getLinea(false, $scope.idLinea,'tib');

	$scope.verItinerario = false;

	$scope.itinerario = [];
	$scope.paradas = [];

	// Backbutton a home
	//=================================================
	if(!$rootScope.$viewHistory.backView){
		$scope.backButton = $ionicPlatform.registerBackButtonAction( function () {
			$ionicViewService.nextViewOptions({ disableBack: true });
			$state.go('home');
		}, 105 );
		$scope.$on('$destroy', $scope.backButton);
	}

	// Página principal de línea de trenes TIB, con los itinerarios
	// de esta línea en concreto
	//=================================================
	if(!$stateParams.itinerario){

		if(!$scope.linea.itinerarios[0].i[0].n){
			angular.forEach($scope.linea.itinerarios, function(item){
				//console.log(item);
				angular.forEach(item.i, function(obj){
					$scope.i = [{l:'',n:''}];
					$scope.parada = InfoItinerario.getInfo(false,obj,'tib');

					$scope.i.l = obj;
					$scope.i.n = $scope.parada.nombre + " <i class='ion-arrow-right-b icono-separador-lineas'></i> " + $scope.parada.destino;

					item.i[item.i.indexOf(obj)] = $scope.i;
				});
				$scope.itinerario.push(item);

			});

		}

	}else{
		$scope.itinerario = InfoItinerario.getInfo(false,$stateParams.itinerario, 'tib');
		$scope.verItinerario = true;

		angular.forEach($scope.itinerario.paradas, function(item){
			$scope.parada = InfoItinerario.getParada(item, 'tib');
			$scope.paradas.push($scope.parada);
		});
	}


$scope.colores = {
	'T1': '#005192',
	'T2': '#005192',
	'T3': '#005192',
	'M1': '#fd0',
	'M2': '#fd0'
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
})
