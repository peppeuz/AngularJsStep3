'use strict';

/* Controllers */
mediaApp.controller('mediaAppControllers', ['$scope', '$http',
	function ($scope, $http){
	$http.get('res/json/elenco.json').success(function(data){
		$scope.variabile="Linguaggi e tecnologie multimediali 9";
		$scope.students = data;
	});
		$scope.orderLTM = 'cognome';
}]);
