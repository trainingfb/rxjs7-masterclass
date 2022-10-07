import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { repeat, shareReplay, Subject } from 'rxjs';
import { User } from '../../model/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  readonly endpoint =  'https://jsonplaceholder.typicode.com/users';
  invalidate$ = new Subject<void>();

  users$ =  this.http.get<User[]>(this.endpoint).pipe(
    // when cache must be invalidate
    repeat({ delay: () => this.invalidate$ }),
    // share obs and emit latest value
    shareReplay(1)
  );

  constructor(private http: HttpClient) {}

  clear() {
    this.invalidate$.next()
  }
}
