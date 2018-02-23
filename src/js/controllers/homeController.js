/**
 * Created by hejie2.0
 * Coding love on 2017/3/18.
 */
hejie.controller('home', function ($scope, $rootScope, commonService) {
  $scope.title = commonService.config.title
  $rootScope.$broadcast('head.changeTitle', 'Home')
})

hejie.controller('headCtrl', function ($scope, commonService) {
  $scope.title = commonService.config.title

  $scope.$on('head.changeTitle', function (ev, title) {
    $scope.title = title
  })
})

hejie.controller('artsCtrl', function ($scope, commonService) {
  $scope.title = '下面的列表是我创作的一些可展示的在线作品(其中标题有链接标识的网页程序可以在线演示)'

  var arr = [
    {
      title: '图像处理(均衡化与二值化)',
      link : "http://nigeerhuo.com/DigitalImageProcessing/index.html",
      createTime: '2014-05-06',
      git : "https://github.com/AJLoveChina/DigitalImageProcessing",
      desc : "大学计算机图像处理课程期末作业, 使用JS实现图像处理相关的算法, 主要是大津阈值法"
    }, {
      title: '2048小游戏网页版',
      link : "http://nigeerhuo.com/2048/index.html",
      git : "https://github.com/AJLoveChina/2048",
      createTime: '2015-07-18',
      desc : "使用JS编写的2048小游戏, 使用Div+span, 非Canvas实现"
    }, {
      title: '宋词自动生成网页版',
      link : "http://nigeerhuo.com/songci/index.html",
      git : "https://github.com/AJLoveChina/Songci",
      createTime: '2015-10-21',
      desc : "大学自然语言处理课程期末作业, 主要是从宋词库中提取常用的词语根据词牌的押韵以及组合方式生成新的宋词"
    }, {
      title: '扫雷小游戏网页版',
      git : "https://github.com/AJLoveChina/CleanBombs",
      link : "http://nigeerhuo.com/CleanBombs/index.html",
      createTime: '2017-01-26',
      desc : "实现了和windows经典扫雷游戏一样的处理逻辑, 主要使用递归检查策略, 但是UI体验不太好 囧.."
    }, {
      title: '经典汉诺塔问题解法动态演示',
      link : "http://nigeerhuo.com/Hanoi/index.html",
      git : "https://github.com/AJLoveChina/Hanoi",
      createTime: '2017-02-23',
      desc : "在网页上动态展示如何解决汉诺塔问题, 使用JS编写"
    }, {
      title: '合肥高新区公寓空房自动查询申请工具',
      git : "https://github.com/AJLoveChina/HefeiGaoxinApartment",
      createTime: '2017-10-22',
      desc : "自动登录, 自动查询空房, 查询到空房后自动申请"
    }
  ];
  $scope.list = arr.reverse()

})

