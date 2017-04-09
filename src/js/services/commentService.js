/**
 * Created by hejie2.0
 * Coding love on 2017/4/7.
 */

hejie.service("commentService", function ($http, commonService) {

    this.getComments = function (page, size, fn) {
        $http({
            url: commonService.config.host + "/message/get?" + $.param({
                page: page,
                size: size
            }),
            method: "GET",
            cached : true
        }).then(function (response) {
            if (response.data.code === commonService.config.ajax.success) {
                var replyList = _.filter(response.data.data.items, function (item) {
                    return item.to > 0;
                });
                var commentList = _.filter(response.data.data.items, function (item) {
                    return item.to === 0;
                });
                replyList.forEach(function (item) {
                    commentList.forEach(function (one) {
                        if (one.id === item.to) {
                            if (!one["data"] || one["data"].length === 0) {
                                one["data"] = [];
                            }
                            one["data"].push(item);
                        }
                    })
                });
                fn(null, {
                    data : commentList,
                    total : response.data.data.total
                });
            } else {
                fn(new Error(response.data.msg))
            }
        }).catch(function () {
            fn(new Error(commonService.config.errorInfo.ajax));
        })
    };


    this.insert = function (item, success, error) {
        $http({
            url : commonService.config.host + "/message/insert",
            method : "POST",
            data : $.param({
                message : JSON.stringify(item)
            }),
            headers : {'Content-Type': 'application/x-www-form-urlencoded'}
        }).then(function (response) {
            success(response.data);
        }).catch(function (response) {
            if (error) {
                error(new Error(response.statusText));
            } else {
                commonService.layerMsg(commonService.config.errorInfo.ajax);
            }
        });
    }
});