import {Component, OnInit} from '@angular/core';
import {HomeService} from '../../../serve/home.service';

@Component({
  selector: 'app-home-bread',
  templateUrl: './home-bread.component.html',
  styleUrls: ['./home-bread.component.less']
})
export class HomeBreadComponent implements OnInit {
  page: string;

  constructor(
    private homeService: HomeService
  ) {
  }

  ngOnInit() {
    this.homeService.currentPageName.subscribe(value => {
      this.page = value;
    });
  }

}
