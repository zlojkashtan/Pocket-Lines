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
// Avisos Controller
// Gestiona la llamada de API para mostrar los 
// avisos de la EMT en tiempo real
//=================================================
.controller('Avisos', function($scope, $rootScope, $ionicPlatform, $state, $ionicViewService, InfoItinerario){

	// Backbutton a home
	//=================================================
	if(!$rootScope.$viewHistory.backView){
		$scope.backButton = $ionicPlatform.registerBackButtonAction( function () {
			$ionicViewService.nextViewOptions({ disableBack: true });
			$state.go('home');
		}, 105 );
		$scope.$on('$destroy', $scope.backButton);
	}

	// Watch en AvisosLinea
	// Maqueta la información para modificar el modal
	$rootScope.$watch('avisosLinea', function(newValue, oldValue) {

		if(newValue !== undefined){
			$scope.linea = newValue;
			newValue = parseInt(newValue);
			$scope.incidencias = InfoItinerario.getIncidencias(newValue,true);

		}
	});

	$scope.verEMT = function(){
		window.open('http://www.emtpalma.es/EMTPalma/Front/incidencias.es.svr', '_system', 'location=yes');	
	}
	
});