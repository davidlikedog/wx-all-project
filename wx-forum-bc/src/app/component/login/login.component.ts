import {Component, OnInit} from '@angular/core';
import {LoginService} from '../../serve/login.service';
import {Md5} from 'ts-md5';
import {Router} from '@angular/router';
import {MatSnackBar} from '@angular/material';
import {MsgAlertService} from '../../serve/msg-alert.service';
import {GlobalDataService} from '../../serve/global-data.service';

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
  disabled: boolean;
  i = 0;

  constructor(
    private loginService: LoginService,
    private routes: Router,
    private myAlert: MatSnackBar,
    private alertService: MsgAlertService,
    private globalData: GlobalDataService
  ) {
    this.disabled = false;
  }

  ngOnInit() {
    setInterval(() => {
      this.globalData.change.emit(this.i++);
    }, 1000);
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
    if (this.accountValue !== '' && this.accountValue) {
      if (this.passwordValue !== '' && this.passwordValue) {
        const data = {
          account: this.accountValue,
          password: Md5.hashStr(this.passwordValue),
        };
        this.alertService.waiting('登录中...');
        this.disabled = true;
        this.loginService.login(data).subscribe(result => {
          this.alertService.hideWaiting();
          this.disabled = false;
          if (result.status === 200) {
            window.sessionStorage.setItem('Authorization', result.token);
            window.sessionStorage.setItem('User', result.user.toString());
            this.globalData.setUser(this.accountValue);
            this.alertService.onceOk('登录成功');
            this.routes.navigateByUrl('/home');
          } else {
            this.alertService.onceErr('账号或密码错误');
            this.passwordValue = '';
          }
        });
      } else {
        this.passwordWrongMsg = '密码不能为空';
      }
    } else {
      this.accountWrongMsg = '账号不能为空';
    }
  }

  keyUpLogin(e) {
    if (e.keyCode === 13) {
      this.check();
    }
  }
}
