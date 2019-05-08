/**
 * Created by hejie2.0
 * Coding love on 2017/3/18.
 */
hejie.controller('home', function ($scope, $rootScope, commonService) {
  $scope.title = commonService.config.title
  $rootScope.$broadcast('head.changeTitle', 'Home')
})

hejie.controller('TypingCtrl', function ($scope) {

    var options = {
        strings: [
            [
                `我是AJ，很高兴你来到这里 ：）`,
                `我已经很久没有在这里更新博客了`,
                `因为从去年6月份开始我就在<a href="https://www.zhihu.com/people/AJLoveChina">知乎</a>上面写文章了`,
                `这里记录的文章都是18年6月份以前写的`,
                `包括我大学的时候，留着作为一份回忆吧`,
                `我平时很多的业余时间都在为开源社区做贡献，你可以在<a href="https://github.com/AJLoveChina">Github</a>找到我`,
                `就是这样，喵~`,
                `-- 2019年4月26日 by 一直会做饭的程序汪`
            ].join("<br>")
        ],
        typeSpeed: 60
    };
    var options2 = {
        strings: [
            [
                `关于内推：`,
                `我目前在Zoom从事前端开发工作`,
                `如果你需要内推，`,
                `可以将简历发送到我的邮箱 baker.he@zoom.us`,
                `我会在看到邮件之后立刻回复你`
            ].join("<br>")
        ],
        typeSpeed: 60
    };

    new Typed(".typing-container", options);
    new Typed(".typing-leitui", options2);

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


hejie.controller('workCtrl', function ($scope, commonService) {
  $scope.list = [
    {
      title : "全国大学生英语四六级模拟考试",
      duration : "2016.09 - 2017.03",
      content : "1.UI页面集成<br>\n" +
      "2.浏览器兼容问题解决<br>\n" +
      "3.前端组件封装, 实现开箱即用(如获取验证码, 粘性表单, 下拉选框等)",
      topics : ["AngularJS"]
    },{
      title : "智学网-教考平台开发",
      duration : "2017.03 - 至今",
      content : "1.配置项目框架,拉通流程. 如:日志, 事务, 单元测试, mysql与mongo数据库访问, 工具类, 配置分离等<br>\n" +
      "2.业务功能开发, 主要是数据统计, 成绩分析等功能<br>\n" +
      "3.独立服务开发。跨平台的HTML转PDF服务，英语单词翻译服务<br>\n" +
      "4.前端优化, 如:播放音频组件,实现多音频播放。引入npm-install-webpack-plugin, 实现webpack自动定位依赖缺失问题。切面的方式实现请求加载动画<br>\n" +
      "5.ckeditor深度定制，实现前端上传截图到第三方文件存储服务（阿里云OSS以及腾讯云COS）<br>\n",
      topics : ["spring", "mybatis", "vuejs", "webpack"]
    }
  ];
})

