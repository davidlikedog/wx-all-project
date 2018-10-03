import {Injectable, EventEmitter} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalDataService {
  User: string;
  change: EventEmitter<number>;

  constructor() {
    this.change = new EventEmitter();
  }

  public setUser(user) {
    this.User = user;
  }

  public getUser(): string {
    return this.User;
  }
}
