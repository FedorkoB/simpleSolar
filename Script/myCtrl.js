app.controller('myCtrl', function($scope, $http){
	$http.get('Script/Data.json').then(function(response){
		$scope.planet = response.data.planets;
	});
	
});