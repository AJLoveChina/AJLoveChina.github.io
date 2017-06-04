var hejie = angular.module("hejie", [ 'ui.router', 'oc.lazyLoad', 'ngSanitize']);

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

            try {
                var isAdmin = new URI(location.href).query(true).isAdmin;
                if (isAdmin) {
                    config.url = new URI(config.url).addSearch({isAdmin:isAdmin}).toString();
                }
            } catch (ex) {}
            if (config.method.toUpperCase() === "GET" && !config.cache) {
                // 解决在IE低版本浏览器会有缓存的问题
                config.url = new URI(config.url).addSearch({"_date" : moment(new Date()).format("YYYYMMDD")}).toString()
            }

            return config;
        },
        response: function(response) {
            loadingService.response(response);
            return response;
        }
    }
});

hejie.config(function($stateProvider, $locationProvider, $urlRouterProvider, $logProvider, $httpProvider, $provide) {
    $provide.decorator('$rootScope', ['$delegate', function($delegate){

        Object.defineProperty($delegate.constructor.prototype, '$onRootScope', {
            value: function(name, listener){
                var unsubscribe = $delegate.$on(name, listener);
                this.$on('$destroy', unsubscribe);

                return unsubscribe;
            },
            enumerable: false
        });


        return $delegate;
    }]);

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
        .state('test', {
            url : '/test',
            templateUrl : "src/tpl/test.html"
        })
        .state('test.slick', {
            url : '/slick',
            templateUrl : "src/tpl/test/slick.html"
        })
        .state('test.encodeXDecode', {
            url : '/encodeXDecode',
            templateUrl : "src/tpl/test/encodeXdecode.html"
        })
        .state('test.questionnaire', {
            url : '/questionnaire',
            templateUrl : "src/tpl/test/questionnaire.html"
        })
        .state('test.qqconnect', {
            url : '/qqconnect',
            templateUrl : "src/tpl/test/qqconnect.html"
        })
        //
        // .state('editor', {
        //     url : '/editor',
        //     templateUrl : "src/tpl/editor/editor.html"
        // })
        .state('test.ueditor', {
            url : '/ueditor',
            templateUrl : "src/tpl/editor/ueditor.html"
        })
        .state('test.quill', {
            url : '/quill',
            templateUrl : "src/tpl/editor/quill.html"
        })

        .state('519', {
            url : '/519',
            templateUrl : "src/tpl/519.html"
        })
        .state('blog', {
            url : '/blog/:fileName',
            templateUrl : "src/tpl/blog.html"
        })
        .state('wenjuan', {
            url : '/wenjuan/:fileName',
            templateUrl : "src/tpl/wenjuan.html"
        })


});
