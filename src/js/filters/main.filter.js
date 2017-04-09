/**
 * Created by hejie2.0
 * Coding love on 2017/4/7.
 */
/**
 * midRange 请搭配 goPage 指令共同使用, 因为当 页码为 "..."时, goPage指令可以正常处理
 */
hejie.filter('midRange', function() {
    return function(input, total, curIndex) {
        var list = [];
        total = parseInt(total);
        curIndex = parseInt(curIndex);
        var num = 5; // 请给一个奇数 例如 : [5个, 中间1个, 5个]
        var i = 1,
            max = total;
        i = (curIndex - (num - 1) / 2) > 1 ? (curIndex - (num - 1) / 2) : i;
        max = (i + num - 1) > total ? total : (i + num - 1);

        if (i > 1) {
            list.push("..");
        }
        for (; i <= max; i++) {
            list.push(i);
        }
        if (max < total) {
            list.push("...");
        }
        return list;
    };
});

hejie.filter("timeago", function () {
    return function (input) {
        var old = new Date(parseInt(input)),
            years = new Date().getFullYear() - old.getFullYear();
        if (years >= 1) {
            if (years === 1) {
                years = "去年";
            } else if (years == 2) {
                years = "前年";
            } else {
                years = years + "年前";
            }
            return years +  (old.getMonth() + 1) + "月" + old.getDate() + "号";
        } else {
            var timeagoInstance = timeago();
            return timeagoInstance.format(input, 'zh_CN');
        }
    }
});


hejie.filter("userImg", function () {
    return function (input) {
        if (input) {
            return input;
        }
        return "src/imgs/default-user-boy.jpg";
    }
})