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
        $http({
            url: "src/data/timeline-data.json",
            method: "GET"
        }).then(function (res) {


            createStoryJS({
                type: 'timeline',
                width: '100%',
                height: '600',
                source: res.data,
                lang: "zh-cn",
                embed_id: 'my-timeline'
            });

        });
    };
    $scope.loadTimeLine();
});