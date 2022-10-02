import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, share, shareReplay } from 'rxjs';
import { User } from '../../model/user';
import { UsersCacheService } from './users-cache.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  readonly endpoint =  'https://jsonplaceholder.typicode.com/users';

  constructor(
    private http: HttpClient,
    // NEW 1
    private usersCacheService: UsersCacheService
  ) {

  }

  // NEW 2
  getUsers(): Observable<User[]> {
    // get data from cache service (first time is null)
    let users$ = this.usersCacheService.getValue();

    // there is no data in cache? load users
    if (!users$) {
      users$ = this.http.get<User[]>(this.endpoint).pipe(
        shareReplay(1) // ✅
        // share({ resetOnComplete: false, resetOnRefCountZero: false}) // ❌
      );
      // save it on cache (it also set the new expiration date)
      this.usersCacheService.setValue(users$);
    }
    return users$;
  }

  // NEW
  clear() {
    this.usersCacheService.clearCache()
  }
}
