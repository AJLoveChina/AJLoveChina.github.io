import { Component, OnInit } from '@angular/core';
import {BlogService} from "../../service/blog.service";

import * as moment from 'moment'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private blogService : BlogService) { }

  ngOnInit() {
    this.refresh();
    this.loadBlogNameList();
  }

  items : Array<any> = [];
  maxPage : number = 1;
  curPage : number = 1;
  pageSize : number  = 2;

  ps = [
    {
      say: "八百里分麾下炙 五十弦翻塞外声",
      name : "辛弃疾"
    },{
      say: "人生若只如初见，何事秋风悲画扇",
      name : "纳兰性德"
    },
    {
      say : "四十三年，望中犹记，烽火扬州路",
      name : "辛弃疾"
    },
    {
      say : "纸上得来终觉浅，绝知此事要躬行",
      name : "陆游"
    },
    {
      say : "采菊东篱下，悠然见南山",
      name : "陶渊明"
    },
    {
      say : "倒是浮华多奢靡, 何有此景饭特稀",
      name : "<small>hejie</small>"
    }
  ];

  blogNameList : Array<any> = [];

  getHref(page : any) : string {
    return "";
  }

  refresh() {
    var obj = this.blogService.getBlogs(this.curPage, this.pageSize);
    this.items = obj.blogs;

    this.blogService.getTotal(total => {
      this.maxPage = Math.ceil(total / this.pageSize);
    });
  }

  loadBlogNameList() : void{
    var res = this.blogService.getBlogs(1, 10000);

    var list = [],
      year = 0,
      index = 1;
    res.blogs.sort(function (a, b) {
      return b.createTime - a.createTime;
    });
    res.blogs.forEach(function (item) {
      if (moment(parseInt(item.createTime)).year() !== year) {
        index = 1;
        year = moment(parseInt(item.createTime)).year();
        list.push({
          isCutline: true,
          title: year
        });
      }
      item.index = index++;
      list.push(item);
    });
    this.blogNameList = list;
  }

}
