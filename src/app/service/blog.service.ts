import {Injectable} from '@angular/core';
import {Observable, of} from "rxjs";
import axios from 'axios'

let blogsJson = require("../data/blogs.json");

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor() {
  }

  blogsJson = blogsJson;

  getBlogs(page: number, size: number) : any {
    let obj = JSON.parse(JSON.stringify(this.blogsJson));

    obj.blogs.forEach(function (item, i, items) {
      item.url = `${obj.dir}/${item.content}`
    });
    obj.blogs = obj.blogs.slice((page - 1) * size, page * size);

    obj.blogs.forEach(async (item) => {
      var res = await this.getBlogHTML(item.url);
      item.htmlData = res.data;
    });

    return obj;
  }

  getBlogHTML(path) : Promise {
    return axios.get(path)
  }

  getTotal(fn) : number {
    fn(this.blogsJson.blogs.length);
  }
}
