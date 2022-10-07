import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <div style="display: flex; align-items: center">
      <img src="assets/murena.png" width="100">
      <h1>RxJS 7 Master class</h1>
    </div>
  `,
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
