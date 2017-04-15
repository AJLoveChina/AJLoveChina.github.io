/**
 * Created by hejie2.0
 * Coding love on 2017/4/7.
 */
hejie.controller("messageController", function ($scope, commentService, $rootScope, commonService) {
    $scope.comments = [];
    $scope.curPage = 1;
    $scope.pageSize = 10;
    $scope.maxPage = 1;

    $scope.refresh = function () {
        commentService.getComments($scope.curPage, $scope.pageSize, function (err, res) {
            $scope.comments = res.data;
            $scope.maxPage = Math.ceil(res.total / $scope.pageSize);
        });
    };
    $scope.refresh();

    $scope.goPage = function (page) {
        if (page <= 1) {
            page = 1;
        }
        if (page > $scope.maxPage) {
            page = $scope.maxPage;
        }
        $scope.curPage = page;
        $scope.refresh();
    };

    $scope.$onRootScope("event.refreshMessageList", function () {
        $scope.refresh();
    });
    

    $scope.reply = function (item) {
        $rootScope.$broadcast("event.replyToSomeOne", item);
    }
});


hejie.controller("writeMessageController", function ($scope, commonService, commentService, $rootScope) {
    $scope.message = {};
    $scope.reply = null;
    var _init = function () {
        $scope.message = {
            id: null,
            to: null,
            gender: commonService.gender.boy,
            name: "",
            content: "",
            date: "",
            contact: ""
        };
        $scope.reply = null;
    };

    $scope.submit = function () {
        var _names = commonService.config.baoliuNames,
            _i = -1;
        _names.forEach(function (item, i) {
            if ($scope.message.name.indexOf(item) !== -1) {
                _i = i;
            }
        });
        if (_i !== -1 && !commonService.isAdmin()) {
            commonService.layerMsg("亲, 名字中不可以有<code>" + _names[_i] + "</code>哦~~");
            return;
        }
        if ($scope.reply !== null) {
            $scope.message.to = $scope.reply.id;
        }
        commentService.insert($scope.message, function (res) {
            if (res.code === commonService.config.ajax.success) {
                commonService.layerClose("#comment-write-panel");
                commonService.layerMsg("谢谢您的留言~~O(∩_∩)O~~");
                _init();
                $rootScope.$broadcast("event.refreshMessageList");
            } else {
                commonService.layerMsg(res.msg);
            }
        });
    };

    $scope.$onRootScope("event.replyToSomeOne", function (ev, item) {
        $scope.reply = item;
        commonService.layerOpen({
            content: $("#comment-write-panel"),
            area: "480px",
            title: "评论" + item.name + "の说说"
        });
    });

    $scope.$onRootScope("event.showPop.commentwritepanel", function () {
        $scope.$apply(function () {
            _init();
        })
    })

});