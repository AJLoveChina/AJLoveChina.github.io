import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  @Input() page :number;
  @Input() maxPage:number;
  @Input() onClick:Function;
  @Input() getHref:Function;

  constructor() { }

  ngOnInit() {
  }

}
