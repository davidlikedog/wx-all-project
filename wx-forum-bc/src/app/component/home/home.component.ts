import {Component, OnInit} from '@angular/core';
import {HomeService} from '../../serve/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

  constructor(
    private serve: HomeService
  ) {
  }

  ngOnInit() {
    this.serve.getAll().subscribe(data => {
      console.log(data);
    });
    console.log('this is home component');
  }

}
