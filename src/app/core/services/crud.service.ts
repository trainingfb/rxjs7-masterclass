import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../../model/user';

const API = 'https://jsonplaceholder.typicode.com';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  private _items$ = new BehaviorSubject<User[]>([])
  public  items$ = this._items$.asObservable()

  constructor(private http: HttpClient) { }

  init() {
    this.http.get<User[]>(`${API}/users`)
      .subscribe(
        res => this._items$.next(res)
      )
  }

  add(name: string) {
    this.http.post<User>(`${API}/users`, { name }).subscribe(
      res => this._items$.getValue().push(res)
      // or
      // res => this._items$.next([...this._items$.getValue(), res])
    );
  }

  delete(id: number) {
    const index = this._items$.getValue().findIndex(u => u.id == id)
    this.http.delete(`${API}/users/${id}`).subscribe(
      () => this._items$.getValue().splice(index, 1)
    );
  }
}
