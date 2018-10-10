import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HomeService} from '../../../serve/home-service/home.service';
import {AllData} from '../../../interface/interface';
import {PageEvent} from '@angular/material';

@Component({
  selector: 'app-home-body-article',
  templateUrl: './home-body-article.component.html',
  styleUrls: ['./home-body-article.component.less']
})
export class HomeBodyArticleComponent implements OnInit {
  data: Array<AllData>;

  constructor(
    private route: ActivatedRoute,
    private homeService: HomeService
  ) {
    this.data = [];
  }

  ngOnInit() {
    // this.type = this.route.snapshot.paramMap.get('type');
    console.log('this is home body');
    this.homeService.getAll();
    this.homeService.currentPageName.emit('所有笔记');
    this.homeService.someArticle.subscribe(someData => {
      console.log(someData);
      this.data = someData;
    });
  }

  pageChangeEvent(event) {
    console.log(event);
  }

}
