var cricketApp = angular.module('cricketApp', [
		'services',
		'ngRoute',
	'cricketController'
	

	]);

cricketApp.config(['$routeProvider', function($routeProvider) {
	$routeProvider.
		when("/matches",
		{
			templateUrl: "partials/list.html",
			controller: "matchesController"
		}
			).
		when("/matches/:id",
		{
			templateUrl: "partials/details.html",
			controller: "matchController"
		}
			).
		otherwise({redirectTo: "/matches"});
}]);
