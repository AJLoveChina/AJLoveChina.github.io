/**
 * Created by hejie2.0
 * Coding love on 2017/4/7.
 */

hejie.service("commentService", function ($http, commonService) {

    this.getComments = function (page, size, fn) {
        return $http({
            url: commonService.config.host + "/message/get?" + $.param({
                page: page,
                size: size
            }),
            method: "GET"
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