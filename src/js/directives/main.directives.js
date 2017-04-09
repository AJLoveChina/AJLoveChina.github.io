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
        restrict: "E",
        templateUrl: "src/tpl/includes/blog.html",
        scope: {
            item: "=item"
        }
    }
});


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

hejie.directive("comment", function () {
    return {
        restrict: "E",
        templateUrl: "src/tpl/includes/comment.html",
        scope: {
            items: "=items",
            reply : "=reply"
        }
    }
});

hejie.directive("showPop", function (commonService, $rootScope) {
    return function (scope, ele, attrs) {
        ele.on("click", function () {
            var selector = attrs.showPop,
                width = attrs.width,
                title = attrs.title;

            var dom = $(selector);
            commonService.layerOpen({
                type: 1,
                content: dom,
                area: width + "px",
                title: title
            });
            $rootScope.$broadcast("event.showPop." + attrs.showPop.replace(/[^\w]/g, ""));
        });
    }
});

hejie.directive("hidePop", function () {
    return function (scope, ele, attrs) {
        ele.on("click", function () {
            var sele = attrs.hidePop;
            var index = parseInt($(sele).data("pop-zIndex"));
            layer.close(index);
        })
    }
})
