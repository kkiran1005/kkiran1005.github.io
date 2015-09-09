var services = angular.module('services', []);

services.factory('cricketAPIservice', function($http) {

	var cricketAPI = {};

	cricketAPI.getMatches = function() {
		return $http({
			method: 'GET',
			url: 'http://www.cricscore-api.appspot.com/csa'
		});
	}

	cricketAPI.getMatch = function(id) {
		return $http({
			method: 'GET',
			url: 'http://www.cricscore-api.appspot.com/csa?id=' + id
		});
	}

	return cricketAPI;
});
