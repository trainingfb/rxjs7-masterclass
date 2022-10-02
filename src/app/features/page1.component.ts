import { Component } from '@angular/core';
import { AppConfigService } from '../core/services/app-config.service';

@Component({
  selector: 'app-page1',
  template: `
    <h1>Page 1</h1>
    <pre>Theme Management with Subject</pre>

    <div> current theme: {{appConfigService.theme$ | async}} </div>

    <button (click)="appConfigService.theme = 'dark'">
      Change theme to dark
    </button>

    <button (click)="appConfigService.theme = 'light'">
      Change theme to light
    </button>
  `,
})
export class Page1Component {
  constructor(public appConfigService: AppConfigService) {}
}
