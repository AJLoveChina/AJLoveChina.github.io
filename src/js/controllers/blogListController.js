/**
 * Created by hejie2.0
 * Coding love on 2017/3/18.
 */
hejie.controller("blogListCtrl", function ($scope, blogService, $stateParams) {
    $scope.items = [];
    $scope.maxPage = 1;
    $scope.curPage = 1;
    $scope.pageSize = 2;

    if ($stateParams.page) {
        $scope.curPage = parseInt($stateParams.page);
    }

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
    };

    $scope.getHref = function (page) {
        if (!$.isNumeric(page)) return "javascript:;";
        if (page <= 1) page = 1;
        if (page > $scope.maxPage) page = $scope.maxPage;

        return "#/home/page/" + page;
    }
});

hejie.controller("wenzhangTitleListCtrl", function ($scope, blogService) {
    $scope.items = [];

    blogService.getAllBlogs(function (err, res) {
        if (!err) {
            var list = [],
                year = 0,
                index = 1;
            res.blogs.sort(function (a, b) {
                return b.createTime - a.createTime;
            });
            res.blogs.forEach(function (item) {
                if (moment(parseInt(item.createTime)).year() !== year) {
                    index = 1;
                    year = moment(parseInt(item.createTime)).year();
                    list.push({
                        isCutline: true,
                        title: year
                    });
                }
                item.index = index++;
                list.push(item);
            });
            $scope.items = list;

        }
    })

});
hejie.controller("blogOneCtrl", function ($scope, $stateParams, blogService, commonService) {
    var fileName = $stateParams.fileName;
    blogService.getBlogByContent(fileName, function (err, item) {
        if (!err) {
            item["commentid"] = "blog-comment-" + commonService.md
            $scope.item = item;
        }
    });
});