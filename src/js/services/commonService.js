/**
 * Created by hejie2.0
 * Coding love on 2017/4/7.
 */

hejie.service("commonService", function () {
    /**
     * 显示全屏的等待遮罩
     */
    this.showWaitingShadow = function () {
        var dom = $("#ajax-waiting-modal");
        dom.css({zIndex: this.getMaxZindex()});
        dom.show();
    };

    /**
     * 隐藏全屏的等待遮罩
     */
    this.hideWaitingShadow = function () {
        $("#ajax-waiting-modal").fadeOut();
    };


    var _maxIndex  = 1000;
    this.getMaxZindex = function () {
        _maxIndex = ++_maxIndex > layer.zIndex ? _maxIndex : layer.zIndex;
        return _maxIndex;
    };

});