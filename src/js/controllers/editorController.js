/**
 * Created by hejie on 2017/4/28.
 */
hejie.controller("ueditorController", function ($rootScope, $scope, $log, $ocLazyLoad) {

    if (!window.UE) {
        $log.log("no ue, load ue");
        $ocLazyLoad.load([
            'src/js/ueditor.config.js',
            'http://apps.bdimg.com/libs/ueditor/1.4.3.1/ueditor.all.min.js'
        ]).then(function () {
            _deal();
        })
    } else {
        $log.log("ue already exists");
        _deal();
    }


    function _deal() {
        $log.log("deal");
        var div = $("<div>");
        div.attr("id", "container");
        $("#container-wrap").append(div);

        var ue = UE.getEditor('container');
    }


});