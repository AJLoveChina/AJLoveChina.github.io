/**
 * Created by hejie2.0
 * Coding love on 2017/3/18.
 */
hejie.service("blogService", function ($http) {
    
    this.getBlogsConfig = function () {
        return $http({
            method: "GET",
            url : "src/data/blogs.json",
            cached : true
        });
    };

    /**
     *
     * @param page
     * @param size
     * @param fn
     */
    this.getBlogs = function (page, size, fn) {
        this.getBlogsConfig().then(function (res) {
            var data = res.data;
            data.blogs.forEach(function (item, i, items) {
                items[i].url = data.dir + item.content
            });
            data.blogs = data.blogs.slice((page - 1) * size, page * size);
            fn(null, data);
        }).catch(function (res) {
            fn(new Error(res.statusText), null);
        });
    };

    this.getTotal = function (fn) {
        this.getBlogsConfig().then(function (res) {
            fn(res.data.blogs.length);
        })
    };


});