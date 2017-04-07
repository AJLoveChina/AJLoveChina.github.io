/**
 * Created by hejie2.0
 * Coding love on 2017/4/7.
 */

hejie.service("commentService", function ($http) {

    this.getComments = function (page, size, fn) {
        return $http({
            url : "src/data/comments.json?" + $.param({
                page : page,
                size : size
            }),
            method : "GET"
        })
    }
});