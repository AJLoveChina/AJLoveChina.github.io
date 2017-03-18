/**
 * Created by hejie2.0
 * Coding love on 2017/3/18.
 */
hejie.controller("home", function ($scope, $rootScope) {
    $scope.title = "Hi I am hejie2.0";
    $rootScope.$broadcast("head.changeTitle", "Home");
});

hejie.controller("headCtrl", function ($scope) {
    $scope.title = "Hi I am hejie2.0";

    $scope.$on("head.changeTitle", function (ev, title) {
        $scope.title = title;
    })
});