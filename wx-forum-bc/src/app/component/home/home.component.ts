import {Component, OnInit} from '@angular/core';
import {HomeService} from '../../serve/home.service';
import {Router} from '@angular/router';
import {GlobalDataService} from '../../serve/global-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
  i: number;

  constructor(
    private serve: HomeService,
    private route: Router,
    private globalData: GlobalDataService
  ) {
  }

  ngOnInit() {
    this.globalData.change.subscribe((value: number) => {
      this.i = value;
    });
    const isLogin: string = window.sessionStorage.getItem('Authorization');
    const user: string = window.sessionStorage.getItem('User');
    const whoLogin: string = this.globalData.getUser();
    if (!isLogin && isLogin !== '' && !user && user !== '' && whoLogin !== user) {
      this.route.navigateByUrl('/err/notLoginIn');
    } else {
      console.log('ok');
    }
    // this.serve.getAll().subscribe(data => {
    //   console.log(data);
    // });
  }

}
