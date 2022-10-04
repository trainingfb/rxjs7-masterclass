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

  constructor(private http: HttpClient) {}
}
