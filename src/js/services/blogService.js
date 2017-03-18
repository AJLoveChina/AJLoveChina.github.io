/**
 * Created by hejie2.0
 * Coding love on 2017/3/18.
 */
hejie.service("blogService", function ($http) {
    
    this.getBlogsConfig = function () {
        return $http({
            method: "GET",
            url : "src/data/blogs.json"
        });
    };

    this.getBlogs = function (page, size, fn) {
        this.getBlogsConfig().then(function (res) {
            var data = res.data;
            data.blogs.forEach(function (item, i, items) {
                items[i].url = data.dir + item.content
            });
            fn(null, data);
        }).catch(function (res) {
            fn(new Error(res.statusText), null);
        })

    }
});