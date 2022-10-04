import { Component } from '@angular/core';
import { User } from '../model/user';

@Component({
  selector: 'app-page2',
  template: `
    <h1>User Service with cache</h1>
    <li *ngFor="let u of items">{{u.name}}</li>
  `,
})
export class Page2Component  {
  items: User[] = []
}
