(function() {

    angular.module('myApp', ['ui.router','ngMaterial'])
        .config(function($urlRouterProvider) {
            $urlRouterProvider.otherwise('/index');
        });
})();
