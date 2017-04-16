/**
 * Created by hejie2.0
 * Coding love on 2017/3/18.
 */
hejie.controller("home", function ($scope, $rootScope, commonService) {
    $scope.title = commonService.config.title;
    $rootScope.$broadcast("head.changeTitle", "Home");
});

hejie.controller("headCtrl", function ($scope, commonService) {
    $scope.title = commonService.config.title;

    $scope.$on("head.changeTitle", function (ev, title) {
        $scope.title = title;
    })
});