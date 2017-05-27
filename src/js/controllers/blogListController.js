/**
 * Created by hejie2.0
 * Coding love on 2017/3/18.
 */
hejie.controller("blogListCtrl", function ($scope, blogService) {
    $scope.items = [];
    $scope.maxPage = 1;
    $scope.curPage = 1;
    $scope.pageSize = 2;
    

    $scope.refresh = function () {
        blogService.getBlogs($scope.curPage, $scope.pageSize, function (err, res) {
            if (!err) {
                $scope.items = res.blogs;
            }
        });
        blogService.getTotal(function (total) {
            $scope.maxPage = Math.ceil(total / $scope.pageSize);
        });
    };
    $scope.refresh();
    $scope.goPage = function (page) {
        if (!$.isNumeric(page)) return;
        if (page <= 1) page = 1;
        if (page > $scope.maxPage) page = $scope.maxPage;

        $scope.curPage = page;
        $scope.refresh();
    }
});

hejie.controller("blogOneCtrl", function ($scope, $stateParams, blogService) {
    var fileName = $stateParams.fileName;
    blogService.getBlogByContent(fileName, function (err, item) {
        if (!err) {
            $scope.item = item;
        }
    });
});