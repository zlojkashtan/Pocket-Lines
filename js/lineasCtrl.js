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
// Lineas / Linea
// Muestra un listado de todas las lineas de la EMT
// y muestra el itinerario e info de la linea on click
//=================================================
.controller('Lineas', function($scope, $rootScope, $ionicPlatform, $state, $ionicViewService, EMT){
	$scope.lineas = EMT.lineas;
	$scope.empresa = "emt";

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

.controller('Linea', function($scope, $rootScope, $stateParams, $ionicPlatform, $state, $ionicViewService, EMT, InfoItinerario){


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

	$scope.idLinea = $stateParams.idLinea;
	$scope.linea = EMT.lineas[$stateParams.idLinea];

	$scope.verItinerario = false;

	$scope.itinerario = [];
	$scope.paradas = [];

	// Página principal de línea, con los itinerarios
	// de esta línea en concreto
	//=================================================
	if(!$stateParams.itinerario){

		if(!$scope.linea.itinerarios[0].i[0].n){
			angular.forEach($scope.linea.itinerarios, function(item){
				//console.log(item);
				angular.forEach(item.i, function(obj){
					$scope.i = [{l:'',n:''}];
					$scope.parada = InfoItinerario.getInfo(false,obj);

					$scope.i.l = obj;
					$scope.i.n = $scope.parada.nombre + " <i class='ion-arrow-right-b icono-separador-lineas'></i> " + $scope.parada.destino;

					item.i[item.i.indexOf(obj)] = $scope.i;
				});
				$scope.itinerario.push(item);

			});

		}

	}else{
		$scope.itinerario = InfoItinerario.getInfo(false,$stateParams.itinerario);
		$scope.verItinerario = true;

		angular.forEach($scope.itinerario.paradas, function(item){
			$scope.parada = InfoItinerario.getParada(item);
			$scope.paradas.push($scope.parada);
		});
	}


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
});