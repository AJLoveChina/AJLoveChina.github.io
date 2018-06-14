import {Component, Input, OnInit} from '@angular/core';
import {BlogService} from "../../service/blog.service";

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  @Input() item : any;
  @Input() titleLink : boolean;

  constructor(private blogService : BlogService) { }

  ngOnInit() {

  }



}
