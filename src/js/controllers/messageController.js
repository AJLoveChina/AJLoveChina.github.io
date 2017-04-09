/**
 * Created by hejie2.0
 * Coding love on 2017/4/7.
 */
hejie.controller("messageController", function ($scope, commentService) {
    $scope.comments = [];
    $scope.curPage = 1;
    $scope.pageSize = 10;
    $scope.maxPage = 1;

    $scope.refresh = function () {
        commentService.getComments($scope.curPage, $scope.pageSize).then(function (response) {
            var data = response.data;
            $scope.comments = data.data;
        })
    };
    $scope.refresh();

});


hejie.controller("writeMessageController", function ($scope, commonService, $http) {
    $scope.message = {
        id: null,
        to: null,
        gender: commonService.gender.boy,
        name: "",
        content: "",
        date: "",
        contact: ""
    };

    $scope.submit = function () {
        $http({
            url : commonService.config.host + "/message/insert",
            method : "POST",
            data : $.param({
                message : JSON.stringify($scope.message)
            }),
            headers : {'Content-Type': 'application/x-www-form-urlencoded'}
        }).then(function (response) {
            console.log(response);
        })
    };
});