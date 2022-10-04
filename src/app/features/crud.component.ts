import { Component } from '@angular/core';
import { CrudService } from '../core/services/crud.service';

@Component({
  selector: 'app-page2',
  template: `

    <input
      type="text" #text
      placeholder="Add a new user name"
    >

    <li>
      TESTO
      <button>del</button>
    </li>


  `,
})
export class CrudComponent  {

}
