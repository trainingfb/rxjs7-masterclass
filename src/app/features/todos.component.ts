import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { combineLatest, forkJoin, map, startWith, switchMap } from 'rxjs';
import { Todo } from '../model/todo';
import { User } from '../model/user';

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
    <!--NEW-->
    <div *ngIf="data$ | async as data">
      <h1>{{data[0].name}}</h1>
      <li *ngFor="let item of data[1]">
        <input type="checkbox" [checked]="item.completed">
        {{item.title}}
      </li>
    </div>
  `,
})
export class TodosComponent  {
  input = new FormControl<boolean | null>(null)
  data$ = combineLatest([
    this.input.valueChanges.pipe(startWith(null)),
    this.activateRoute.params.pipe(map(params => params['id']))
  ])
    .pipe(
      map(([ filter, id ]) => ({ filter, id } )),
      // NEW
      map(res => {
        let todosUrl = `${endpoint}/todos?userId=${res.id}`
        todosUrl += res.filter === null ? '' : `&completed=${res.filter}`;

        const userUrl = `${endpoint}/users/${res.id}`
        return ({ userUrl, todosUrl  })
      }),
      switchMap(urls => {
        return forkJoin([
          this.http.get<User>(urls.userUrl),
          this.http.get<Todo[]>(urls.todosUrl),
        ])
      })
    )

  constructor(
    private fb: FormBuilder,
    private activateRoute: ActivatedRoute,
    private router: Router,
    private http: HttpClient
  ) {

  }

  next() {
    let paramsId = +this.activateRoute.snapshot.params['id'] || 0;
    let nextId = paramsId < 10 ? ++paramsId : 1;
    this.router.navigateByUrl(`todos/${nextId}`)
  }
}
