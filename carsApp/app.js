let myApp = angular.module('myApp', []);
myApp.controller('mainCtrl', ['$scope', function($scope) {
	$scope.hello = 'Hey';
	$scope.test = "test";
}]);

myApp.controller('userCtrl', ['$scope', function($scope) {
	$scope.toto = true;
	$scope.user = {};
	$scope.user.details = {
    "username": "Todd Motto",
    "id": "89101112"
    };

}]);
