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


hejie.directive("pagination", function () {
   return {
       restrict : "E",
       templateUrl : "src/tpl/includes/pagination.html",
       scope: {
           page : '=page',
           maxPage : '=',
           onClick : "="
       }
   }
});

hejie.directive("blogShow", function () {
    return {
        restrict : "E",
        templateUrl : "src/tpl/includes/blog.html",
        scope : {
            item : "=item"
        }
    }
})


hejie.directive("weather", function () {
    return {
        restrict : "A",
        link : function (scope, ele, attr) {
            var val = scope.$eval(attr.weather);
            var result = "&#xe6df;"; // sun
            switch (val) {
                case "rain":
                    result = "&#xe604;";
                    break;
                case "cloud":
                    result = "&#xe653;";
                    break;
                case "snow":
                    result = "&#xe645;";
                    break;
                case "sun":
                default:
                    result = "&#xe6df;";
                    break;
            }
            ele.css("font-family", "iconfont");
            ele.html(result);
        }
    }
});