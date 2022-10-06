import { Component } from '@angular/core';
import { CrudService } from '../core/services/crud.service';

@Component({
  selector: 'app-page2',
  template: `

    <input
      type="text" #text
      (keydown.enter)="crudService.add(text.value); text.value = ''"
      placeholder="Add a new user name"
    >

    <li *ngFor="let u of crudService.items.value$ | async">
      {{u.name}}
      <button (click)="crudService.delete(u.id)">del</button>
    </li>


  `,
})
export class CrudComponent  {

  constructor(public crudService: CrudService) {
    crudService.init();
  }

}
