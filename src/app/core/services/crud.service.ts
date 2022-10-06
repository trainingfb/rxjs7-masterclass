import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { User } from '../../model/user';
import { rxstate } from '../utils/rxstate';

const API = 'https://jsonplaceholder.typicode.com';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  public items = rxstate<User[]>([]);

  constructor(private http: HttpClient) { }

  init() {
    this.http.get<User[]>(`${API}/users`)
      .subscribe(res => this.items.set(res))
  }

  add(name: string) {
    this.http.post<User>(`${API}/users`, { name }).subscribe(
      // by value
      // res => this.items.set(([...this.items.get(), res]))
      // by function
      res => this.items.set(prev => ([...prev, res]))
    );
  }

  delete(id: number) {
    this.http.delete(`${API}/users/${id}`).subscribe(
      () => this.items.set(
        // set value
        this.items.get().filter(u => u.id !== id)
        // set by function
        // prev => prev.filter(u => u.id !== id)
      )
    );
  }

  getTotal$() {
    return this.items.value$
      .pipe(map(items => items.length))
  }
}




