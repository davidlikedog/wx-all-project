import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-err-page',
  templateUrl: './err-page.component.html',
  styleUrls: ['./err-page.component.less']
})
export class ErrPageComponent implements OnInit {
  errMsg: string;

  constructor(
    private params: ActivatedRoute
  ) {
    this.errMsg = '404';
  }

  ngOnInit() {
    this.errMsg = this.params.snapshot.paramMap.get('msg');
  }

}
