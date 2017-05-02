/**
 * Created by hejie on 2017/5/2.
 */
hejie.controller("slickTestController", function ($scope, $ocLazyLoad) {
    $ocLazyLoad.load([
        "//cdn.bootcss.com/slick-carousel/1.6.0/slick.min.js",
        "//cdn.bootcss.com/slick-carousel/1.6.0/slick.min.css",
        "//cdn.bootcss.com/slick-carousel/1.6.0/slick-theme.min.css"
    ]).then(function () {
        _deal();
    });

    function _deal() {
       $("#container").slick({
           arrows : true,
           prevArrow : "<span class='hejie-arrow hejie-prev glyphicon glyphicon-chevron-left'></span>",
           nextArrow : "<span class='hejie-arrow hejie-next glyphicon glyphicon-chevron-right'></span>",
           dots : true
       });
    }
});