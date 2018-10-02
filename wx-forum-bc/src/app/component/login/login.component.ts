import {Component, OnInit} from '@angular/core';
import {LoginService} from '../../serve/login.service';
import {Md5} from 'ts-md5';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
  accountWrongMsg: string;
  passwordWrongMsg: string;
  accountValue: string;
  passwordValue: string;

  constructor(
    private login: LoginService
  ) {
  }

  ngOnInit() {
  }

  verifyAccount(sth) {
    if (sth.value === '') {
      this.accountWrongMsg = '账号不能为空';
    } else {
      this.accountWrongMsg = '';
    }
  }

  verifyPassword(sth) {
    if (sth.value === '') {
      this.passwordWrongMsg = '密码不能为空';
    } else {
      this.passwordWrongMsg = '';
    }
  }

  check() {
    if (this.accountValue !== '' && this.passwordValue !== '' && this.accountValue && this.passwordValue) {
      const data = {
        account: this.accountValue,
        password: Md5.hashStr(this.passwordValue),
      };
      this.login.login(data).subscribe(result => {
        console.log(result);
        window.sessionStorage.setItem('Authorization', result.token);
      });
    } else {
      console.log('sth is empty');
    }
  }

  testJwt() {
    this.login.test().subscribe(data => {
      console.log(data);
    });
  }
}
