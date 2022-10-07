import { Component } from '@angular/core';
import { UsersService } from '../core/services/users.service';
import { User } from '../model/user';

@Component({
  selector: 'app-page2',
  template: `
    <button (click)="userService.clear()">Clear Cache</button>
    <li *ngFor="let u of items">{{u.name}}</li>
  `,
})
export class Page2Component  {
  items: User[] = []
  public userService: UsersService;

  constructor(userService: UsersService) {
    this.userService = userService;
    userService.users$.subscribe(res => {
      console.log('page2', res)
      this.items = res
    })
  }
}
