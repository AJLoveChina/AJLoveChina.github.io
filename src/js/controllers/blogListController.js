/**
 * Created by hejie2.0
 * Coding love on 2017/3/18.
 */
hejie.controller("blogListCtrl", function ($scope, blogService) {
    $scope.items = [
        {
            title : "title1",
            content : "content1"
        },{
            title : "title2",
            content : "content2"
        }
    ];
    
    blogService.getBlogs(1, 10, function (err, res) {
        if (!err) {
            $scope.items = res.blogs;
        }
    })
});