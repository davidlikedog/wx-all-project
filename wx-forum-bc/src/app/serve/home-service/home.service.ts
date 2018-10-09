import {Injectable, EventEmitter} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {GlobalData} from '../../globalData/globalData';
import {AllData} from '../../interface/interface';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  someArticle: EventEmitter<Array<AllData>>;
  currentPageName: EventEmitter<string>;

  constructor(
    private http: HttpClient
  ) {
    this.someArticle = new EventEmitter<Array<AllData>>();
    this.currentPageName = new EventEmitter<string>();
  }

  getAll() {
    const token = window.sessionStorage.getItem('Authorization');

    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${token}`,
      })
    };
    this.http.get<Array<AllData>>(`${GlobalData.url}/bc/getAll`, httpOptions).subscribe(data => {
      this.someArticle.emit(data);
    });
  }

  getMine() {
    const token = window.sessionStorage.getItem('Authorization');
    const user = window.sessionStorage.getItem('User');

    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${token}`,
      })
    };
    return this.http.get<Array<AllData>>(`${GlobalData.url}/bc/getMine/${user}`, httpOptions).subscribe(data => {
      this.someArticle.emit(data);
    });
  }
}
