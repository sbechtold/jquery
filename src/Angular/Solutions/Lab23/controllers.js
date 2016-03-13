/*

Define a simple controller & module that sets up the subTitle Variable

*/

var app = angular.module("myFirstApp", []);
app.controller("myController", ["$scope", function ($scope) {
   $scope.subTitle = "Hello World";
}]);