import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalDataService {
  private User: string;

  constructor() {
  }

  public setUser(user) {
    this.User = user;
  }

  public getUser(): string {
    return this.User;
  }
}
