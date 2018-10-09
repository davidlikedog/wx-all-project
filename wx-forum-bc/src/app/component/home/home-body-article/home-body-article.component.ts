import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Page} from '../homeGlobolData';
import {HomeService} from '../../../serve/home.service';
import {AllData} from '../../../interface/interface';

// const DATA = [
//   {
//     src: '../../../../assets/img/a.jpg',
//     content: '西伯利亚雪橇犬(俄语:Сибирский хаски，英语:Siberian husky)，常见别名哈士奇，俗名为二哈。西伯利亚雪橇犬体重介于雄犬20-27公斤，雌犬16-23公斤，身高大约雄犬肩高53-58厘米，雌犬51-56厘米，是一种中型犬。'
//   },
//   {
//     src: '../../../../assets/img/b.jpg',
//     content: '橘猫（Felis silvestris catus）是家猫常见的一种毛色，也叫橘子猫，桔猫，普遍存在于混种猫和不具独特规定毛色的注册纯种猫中，与品种无关，与被毛基因有关。'
//   }
// ];

@Component({
  selector: 'app-home-body-article',
  templateUrl: './home-body-article.component.html',
  styleUrls: ['./home-body-article.component.less']
})
export class HomeBodyArticleComponent implements OnInit {
  type: string;
  data: Array<AllData>;

  constructor(
    private route: ActivatedRoute,
    private homeService: HomeService
  ) {
    this.data = [];
  }

  ngOnInit() {
    // this.type = this.route.snapshot.paramMap.get('type');
    // if (this.type === 'all') {
    //   Page.PageName = '胖橘';
    //   this.data = DATA[1];
    // } else {
    //   Page.PageName = '二哈';
    //   this.data = DATA[0];
    // }
    console.log('this is home body');
    this.homeService.getAll();
    this.homeService.someArticle.subscribe(someData => {
      console.log(someData);
      this.data = someData;
    });
  }

}
