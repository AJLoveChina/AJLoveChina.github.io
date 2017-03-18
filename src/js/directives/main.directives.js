/**
 * Created by hejie2.0
 * Coding love on 2017/3/19.
 */
hejie.directive("randomListItemStyle", function () {
    // name on html should be 'random-list-item-style'
    var i = 0;
    return function (scope, ele, attr) {
        var arr = ["success", "info", "warning", "danger"];

        ele.addClass("list-group-item-" + arr[i++ % 4]);
    }
});