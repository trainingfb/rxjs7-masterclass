import { Component } from '@angular/core';
import { AppConfigService } from '../services/app-config.service';
import { CrudService } from '../services/crud.service';

@Component({
  selector: 'app-navbar',
  template: `

    <nav
      class="navbar"
      appTheme
    >
      <button routerLink="home">home</button>
      <button routerLink="todos">todos</button>
      <button routerLink="timer">timer</button>
      <button routerLink="crud">crud</button>
      <button routerLink="page1">Page1</button>
      <button routerLink="page2">Page2</button>
      <!--<span>{{(crudService.items.value$ | async)?.length}}</span>-->

    </nav>
    <hr>
  `,
  styles: [`
    nav { padding: 10px}
    .dark { background-color: #222; color: white }
    .light { background-color: #ccc }
  `]
})
export class NavbarComponent {
  constructor(public crudService: CrudService) {}
}
