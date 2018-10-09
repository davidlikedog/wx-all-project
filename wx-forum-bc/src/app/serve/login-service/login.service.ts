import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {from, Observable, of} from 'rxjs';
import {GlobalData} from '../../globalData/globalData';
import {User} from '../../interface/interface';
import {catchError} from 'rxjs/operators';

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

  test() {
    const token = window.sessionStorage.getItem('Authorization');

    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${token}`,
      })
    };
    return this.http.get(`${this.url}/bc/test`, httpOptions);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      return of(result as T);
    };
  }
}
