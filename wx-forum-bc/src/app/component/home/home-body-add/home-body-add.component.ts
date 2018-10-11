import { Component, OnInit } from '@angular/core';
import {HomeService} from '../../../serve/home-service/home.service';

@Component({
  selector: 'app-home-body-add',
  templateUrl: './home-body-add.component.html',
  styleUrls: ['./home-body-add.component.less']
})
export class HomeBodyAddComponent implements OnInit {

  constructor(
    private homeService: HomeService
  ) {
  }

  ngOnInit() {
    this.homeService.currentPageName.emit('添加笔记');
  }

}
