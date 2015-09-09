var cricketController = angular.module('cricketController', []);

cricketController.controller('matchesController', ['cricketAPIservice', '$scope', function(cricketAPIservice, $scope){
	
	cricketAPIservice.getMatches().success(function(response){
		
		$scope.matches = response;
	}).error(function(data, status){
		$scope.data = data;
		$scope.status = status;
	});
}]);

cricketController.controller('matchController', ['cricketAPIservice', '$routeParams', '$scope', function(cricketAPIservice, $routeParams, $scope) {
	$scope.id = $routeParams.id;
	$scope.matchDetail = null;
	
	cricketAPIservice.getMatch($routeParams.id).success(function(response){
		$scope.matchDetail = response;
	}).error(function(data, status){
		$scope.data = data;
		$scope.status = status;
	});



}]);
