import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';

interface AllData {
  name: string;
  id: number;
}

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(
    private http: HttpClient
  ) {
  }

  getAll(): Observable<AllData> {
    return this.http.get<AllData>('http://localhost:8081/sql');
  }
}
