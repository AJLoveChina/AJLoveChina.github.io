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
    $scope.message = {};
    var _init = function () {
        $scope.message = {
            id: null,
            to: null,
            gender: commonService.gender.boy,
            name: "",
            content: "",
            date: "",
            contact: ""
        }
    };

    $scope.submit = function () {

        commentService.insert($scope.message, function (res) {
            if (res.code === commonService.config.ajax.success) {
                commonService.layerClose("#comment-write-panel");
                commonService.layerMsg("谢谢您的留言~~O(∩_∩)O~~");
                _init();
            } else {
                commonService.layerMsg(res.msg);
            }
        });

    };
});