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
//=================================================
.controller('LlegarCtrl', function($scope, $rootScope, $ionicPlatform, $state, $ionicViewService, gMaps, EMTdb){

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

	$scope.place = null;

										$scope.autocompleteOptions = {
												componentRestrictions: { country: 'au' },
												types: ['geocode']
										}
})