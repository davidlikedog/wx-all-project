import {Component, OnInit, ElementRef, Renderer2} from '@angular/core';
import {Router} from '@angular/router';
import {HomeService} from '../../../serve/home.service';

@Component({
  selector: 'app-home-aside',
  templateUrl: './home-aside.component.html',
  styleUrls: ['./home-aside.component.less']
})
export class HomeAsideComponent implements OnInit {

  constructor(
    private el: ElementRef,
    private render: Renderer2,
    private router: Router,
    private homeService: HomeService
  ) {
  }

  ngOnInit() {
    this.asideShowMore();
  }

  asideShowMore() {
    const li: any = this.el.nativeElement.querySelectorAll('.asideLi');
    for (let i = 0; i < li.length; i++) {
      this.render.listen(li[i], 'click', () => {
        const realHeight: number = li[i].childNodes[1].scrollHeight;
        const currentHeight: number = li[i].childNodes[1].clientHeight;
        for (let s = 0; s < li.length; s++) {
          this.render.removeClass(li[s], 'liSelected');
          this.render.setStyle(li[s].childNodes[1], 'height', 0 + 'px');
        }
        this.render.addClass(li[i], 'liSelected');
        if (currentHeight === 0) {
          this.render.setStyle(li[i].childNodes[1], 'height', realHeight + 'px');
        } else {
          this.render.removeClass(li[i], 'liSelected');
          this.render.setStyle(li[i].childNodes[1], 'height', 0 + 'px');
        }
      });
    }
  }

  go(type) {
    console.log(type);
    if (type === 'all') {
      this.homeService.getAll();
      this.homeService.currentPageName.emit('所有笔记');
    }else if (type === 'mine') {
      this.homeService.getMine();
      this.homeService.currentPageName.emit(('我的笔记'));
    }
  }
}
