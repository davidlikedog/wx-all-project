import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {GlobalData} from '../globalData/globalData';

interface User {
  account: number;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private url: string;

  constructor(
    private http: HttpClient
  ) {
    this.url = GlobalData.url;
  }

  login(data): Observable<User> {
    return this.http.post<User>(`${this.url}/bc/login`, data);
  }
}
