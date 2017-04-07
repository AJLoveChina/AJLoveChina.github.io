var hejie = angular.module("hejie", [ 'ui.router']);

hejie.value('loadingService', {
    dom : null,
    request: function(config) {
        var commonService = angular.element(document.body).injector().get('commonService');
        commonService.showWaitingShadow();
    },
    response: function(response) {
        var commonService = angular.element(document.body).injector().get('commonService');
        commonService.hideWaitingShadow();
    }
});

hejie.factory('loadingInterceptor', function($q, loadingService, $location, $timeout) {
    return {
        request: function(config) {
            loadingService.request(config);
            return config;
        },
        response: function(response) {
            loadingService.response(response);
            return response;
        }
    }
});

hejie.config(function($stateProvider, $locationProvider, $urlRouterProvider, $logProvider, $httpProvider) {
    $httpProvider.interceptors.push('loadingInterceptor');

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
        .state('message', {
            url: '/message',
            templateUrl: 'src/tpl/message.html'
        })


});
