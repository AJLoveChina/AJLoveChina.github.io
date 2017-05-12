/**
 * Created by hejie2.0
 * Coding love on 2017/3/18.
 */
hejie.controller("meCtrl", function ($scope, $http) {
    $scope.teks = [
        {
            name: "Web Developer(Full Stack)"
        },
        {
            name: "Javascript"
        }, {
            name: "Java"
        }, {
            name: "Nodejs"
        }, {
            name: "Spring MVC"
        }, {
            name: "AngularJS"
        }, {
            name: "Git"
        }, {
            name: "Write Poems"
        }
    ];

    $scope.loadTimeLine = function () {
        var xx = new Date();
        $http({
            url: "src/data/timeline-data.json?t=" + xx.getFullYear() + (xx.getMonth() + 1) + xx.getDate(),
            method: "GET"
        }).then(function (res) {

            var _default = res.data.timeline.date[0],
                date = new Date();
            _default["startTime"] = date.getYear() + "," + (date.getMonth() + 1) + "," + date.getDate() + "," + (date.getHours() + 1) + "," +
                    date.getMinutes() + "," + date.getSeconds();
            _default["endTime"] = _default["startTime"];

            createStoryJS({
                type: 'timeline',
                width: '100%',
                height: '600',
                source: res.data,
                lang: "zh-cn",
                start_at_end:true,
                embed_id: 'my-timeline'
            });

        });
    };
    $scope.loadTimeLine();
});
