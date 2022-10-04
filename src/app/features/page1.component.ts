import { Component } from '@angular/core';
import { AppConfigService } from '../core/services/app-config.service';

@Component({
  selector: 'app-page1',
  template: `
    <h1>Page 1</h1>
    <pre>Theme Management with Subject</pre>

    <div> current theme: THEMA </div>

    <button>
      Change theme to dark
    </button>

    <button>
      Change theme to light
    </button>
  `,
})
export class Page1Component {
}
