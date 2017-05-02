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
            var title = "写作的那天阳光正好";
            switch (val) {
                case "rain":
                    result = "&#xe604;";
                    title = "写作的那天细雨蒙蒙";
                    break;
                case "cloud":
                    result = "&#xe653;";
                    title = "写作的那天乌云密布";
                    break;
                case "snow":
                    result = "&#xe645;";
                    title = "写作的那天大雪纷飞";
                    break;
                case "sun":
                default:
                    result = "&#xe6df;";
                    title = "写作的那天阳光正好";
                    break;
            }
            ele.css("font-family", "iconfont");
            ele.attr("title", title);
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
});

hejie.directive("stateListPrefix", function ($state) {
    return function (scope, ele, attrs) {
        var prefix = attrs.stateListPrefix;
        var result = [];
        var regExp = new RegExp("^" + prefix + "\.");
        $state.get().forEach(function (item) {
            if (regExp.test(item.name)) {
                result.push(item);
            }
        });

        var ul = $("<ul>");
        result.forEach(function (item) {
            var li = $("<li>"),
                a = $("<a>");
            a.attr("href", "#/" + prefix + item.url);
            a.html(item.name);
            li.append(a);
            ul.append(li);
        });
        ele.html(ul);
    }
});
