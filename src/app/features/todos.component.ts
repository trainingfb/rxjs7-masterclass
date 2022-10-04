import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { combineLatest, map, startWith } from 'rxjs';
import { Todo } from '../model/todo';

const endpoint = 'https://jsonplaceholder.typicode.com';

@Component({
  selector: 'app-todos',
  template: `
    <select [formControl]="input">
      <option [ngValue]="null" >all</option>
      <option [ngValue]="true">completed</option>
      <option [ngValue]="false">uncompleted</option>
    </select>
    <button (click)="next()">Next User</button>
    <hr>
    <li *ngFor="let item of items">
      <input type="checkbox" [checked]="item.completed">
      {{item.title}}
    </li>
  `,
})
export class TodosComponent  {
  input = new FormControl<boolean | null>(null)
  items: Todo[] = []

  constructor(
    private fb: FormBuilder,
    private activateRoute: ActivatedRoute,
    private router: Router,
  ) {

  }

  next() {
    let paramsId = +this.activateRoute.snapshot.params['id'] || 0;
    let nextId = paramsId < 10 ? ++paramsId : 1;
    this.router.navigateByUrl(`todos/${nextId}`)
  }
}
