import { Injectable } from '@angular/core';
import * as dayjs from 'dayjs';
import { Observable } from 'rxjs';
import { User } from '../../model/user';

@Injectable({
  providedIn: 'root'
})
export class UsersCacheService {

  readonly CACHE_DURATION_IN_MINUTES = 1;

  /**
   * Create a cache object to contains:
   * expires: date to indicate when cache should expire
   * value: data to hold (in this case User[])
   * @private
   */
  private cache: {
    expires: Date,
    value: Observable<User[]>;
  } | null = null;

  /**
   * Used to get data in cache
   */
  getValue(): Observable<User[]>  | null {
    // first time or when cache is empty ==> return no data
    if (!this.cache) {
      return null;
    }

    // if cache is still not expired ==> return nothing
    if (dayjs(new Date()).isAfter(this.cache.expires)) {
      return null;
    }

    // otherwise return cached value
    return this.cache.value;
  }

  /**
   * Populate cache object with data
   * It also set a new expiration date (today + N minutes)
   * @param value
   */
  setValue(value: Observable<User[]>) {
    this.cache = {
      value,
      expires: dayjs(new Date()).add(this.CACHE_DURATION_IN_MINUTES, 'minutes').toDate()
    };
    console.log('set value', this.cache)
  }

  /**
   * Clean cache object
   */
  clearCache() {
    this.cache = null;
  }
}
