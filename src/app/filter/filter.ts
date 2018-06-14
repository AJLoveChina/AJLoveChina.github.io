import {Pipe, PipeTransform} from "@angular/core";
import timeago from 'timeago.js'

@Pipe({name : 'timeago'})
export class Timeago implements PipeTransform {
  transform(input : any) {
    var old :any = new Date(parseInt(input)),
        years :any = new Date().getFullYear() - old.getFullYear();
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
}

@Pipe({name: 'midRange'})
export class MidRange implements PipeTransform {
  transform(input: Array<any>, total: any, curIndex: any) : Array<any> {
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
  }
}
