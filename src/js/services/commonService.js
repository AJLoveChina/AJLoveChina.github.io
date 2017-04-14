/**
 * Created by hejie2.0
 * Coding love on 2017/4/7.
 */

hejie.service("commonService", function () {
    this.config = {
        host : location.host.indexOf("localhost") !== -1 ? "http://localhost:3000" : "http://nigeerhuo.com:3000",
        ajax : {
            success : 1,
            error : 0
        },
        errorInfo : {
            ajax : "亲, 网络异常了~~请待会试试吧~~(づ￣3￣)づ╭❤～"
        }
    };


    var _waitingShadowIndexQueue = [];
    /**
     * 显示全屏的等待遮罩
     */
    this.showWaitingShadow = function () {
        _waitingShadowIndexQueue.push({
            index : layer.load(0, {shade: [0.1, "#fff"]}),
            timestamp : (new Date()).valueOf()
        });
    };

    /**
     * 隐藏全屏的等待遮罩
     */
    this.hideWaitingShadow = function () {
        _waitingShadowIndexQueue.forEach(function (item) {
            var interval = new Date().valueOf() - item.timestamp;
            setTimeout(function () {
                layer.close(item.index);
            }, (500 - interval) > 0 ? (500 - interval) : 0);
        })
    };


    var _maxIndex  = 1000;
    this.getMaxZindex = function () {
        _maxIndex = ++_maxIndex > layer.zIndex ? _maxIndex : layer.zIndex;
        return _maxIndex;
    };


    /**
     * 性别
     * @type {{boy: 1, girl: 0}}
     */
    this.gender = {
        boy : 1,
        girl : 0
    };

    /**
     * @param jDom|index
     */
    this.layerClose = function (jDom) {
        if ($.isNumeric(jDom)) {
            layer.close(jDom);
        } else if (_.isString(jDom)) {
            this.layerClose($(jDom));
        } else {
            layer.close(parseInt(jDom.data("pop-zIndex")));
        }
    };

    this.layerMsg = function (info) {
        layer.msg(info, {
            time: 5000
        });
    };

    this.layerOpen = function (params) {
        var _params = _.extend({
            type: 1,
            content: "",
            area: "400px",
            title: "面板"
        }, params);

        var index = layer.open(_params);
        params.content.data("pop-zIndex", index);
    }
});