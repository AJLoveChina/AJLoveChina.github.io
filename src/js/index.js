var hejie = angular.module("hejie", [ 'ui.router']);

hejie.config(function($stateProvider, $locationProvider, $urlRouterProvider, $logProvider) {

    $logProvider.debugEnabled(true);
    $urlRouterProvider.when("", "/home");

    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'src/tpl/home.html'
        })
        .state('me', {
            url: '/me',
            templateUrl: 'src/tpl/me.html'
        })

});
