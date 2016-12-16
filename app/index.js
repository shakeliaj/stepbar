(function() {
  'use strict';

    angular.module('myApp', ['ui.router','ngMaterial'])
        .config(function($urlRouterProvider) {
            $urlRouterProvider.otherwise('/');
        })
        .controller('stepController', [
            '$scope',
            function($scope) {
                $scope.name = 'Shakelia';
                $scope.finallyDammit = 'Finally Dammit!!!';
            }
        ]);
})();
