import {Component, OnInit} from '@angular/core';
import {Page, PageModel} from '../homeGlobolData';

@Component({
  selector: 'app-home-bread',
  templateUrl: './home-bread.component.html',
  styleUrls: ['./home-bread.component.less']
})
export class HomeBreadComponent implements OnInit {
  page: PageModel = Page;

  constructor() {
  }

  ngOnInit() {
  }

}
