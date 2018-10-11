import {Component, OnInit, ElementRef, Renderer2} from '@angular/core';
import {Router} from '@angular/router';
import {HomeService} from '../../../serve/home-service/home.service';

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
        for (let n = 0; n < li.length; n++) {
          this.render.removeClass(li[n], 'liSelected');
          this.render.removeClass(li[n], 'liSelectedRotate');
          if (li[n].childNodes.length > 1) {
            this.render.setStyle(li[n].childNodes[1], 'height', '0');
          }
        }
        this.render.addClass(li[i], 'liSelected');
        if (li[i].childNodes.length > 1) {
          this.render.addClass(li[i], 'liSelectedRotate');
          const realHeight: number = li[i].childNodes[1].scrollHeight;
          const currentHeight: number = li[i].childNodes[1].clientHeight;
          this.render.setStyle(li[i].childNodes[1], 'height', realHeight + 'px');
          if (currentHeight === 0) {
            this.render.setStyle(li[i].childNodes[1], 'height', realHeight + 'px');
            this.render.addClass(li[i], 'liSelected');
            this.render.addClass(li[i], 'liSelectedRotate');
          } else {
            this.render.setStyle(li[i].childNodes[1], 'height', '0px');
            this.render.removeClass(li[i], 'liSelected');
            this.render.removeClass(li[i], 'liSelectedRotate');
          }
          const childLi: any = li[i].childNodes[1].childNodes;
          for (let s = 0; s < childLi.length; s++) {
            this.render.listen(childLi[s], 'click', () => {
              for (let v = 0; v < li.length; v++) {
                if (li[v].childNodes.length > 1) {
                  for (let c = 0; c < li[v].childNodes[1].childNodes.length; c++) {
                    this.render.removeClass(li[v].childNodes[1].childNodes[c], 'asideLiOneDetailSelected');
                  }
                }
              }
              this.render.addClass(childLi[s], 'asideLiOneDetailSelected');
            });
          }
        }
      });
    }
  }

  go(event, type?) {
    event.stopPropagation();
    this.router.navigateByUrl('/home');
    if (type === 'all') {
      this.homeService.getAll();
      this.homeService.currentPageName.emit('所有笔记');
    } else if (type === 'mine') {
      this.homeService.getMine();
      this.homeService.currentPageName.emit(('我的笔记'));
    }
  }

  goToAdd() {
    this.router.navigateByUrl('/home/add');
  }
}
