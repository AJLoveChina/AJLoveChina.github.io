/**
 * Created by hejie2.0
 * Coding love on 2017/4/7.
 */

hejie.service("commonService", function () {
    var _self = this;
    this.config = {
        title : "霸都丶傲天",
        host : location.host.indexOf("localhost") !== -1 ? "http://localhost:3000" : "http://nigeerhuo.com:3000",
        ajax : {
            success : 1,
            error : 0
        },
        errorInfo : {
            ajax : "亲, 网络异常了~~请待会试试吧~~(づ￣3￣)づ╭❤～"
        },
        baoliuNames : ["傲天", "hejie", "何杰", "阿杰"]
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
    };

    /**
     * @returns {undefined|admin password}
     */
    this.isAdmin = function () {
        return new URI(location.href).query(true).isAdmin;
    };

    this.isNameOfHejie = function (name) {
        var bool = false;
        this.config.baoliuNames.forEach(function (item, i) {
            if (name.indexOf(item) !== -1) {
                bool = true;
            }
        });
        return bool;
    };

    this.md5 = function (val) {

    };

    this.random = function (max) {
        return Math.floor(Math.random() * max);
    };

    /**
     * 伪唯一数
     * @returns {string}
     */
    this.guid = function () {
        function s4() {
            return Math.floor((1 + Math.random()) * 0x10000)
                .toString(16)
                .substring(1);
        }

        return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
            s4() + '-' + s4() + s4() + s4();
    };


    this.isMobile = function () {
        var check = false;
        (function (a) {
            if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true;
        })(navigator.userAgent || navigator.vendor || window.opera);
        return check;
    };

});