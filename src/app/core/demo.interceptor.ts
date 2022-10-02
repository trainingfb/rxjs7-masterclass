import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpErrorResponse
} from '@angular/common/http';
import { delay, interval, Observable, of, retry, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable()
export class DemoInterceptor implements HttpInterceptor {

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request)
      .pipe(
        // retry(1),
        retry({ count: 1, delay: this.shouldRetry }),
        // delay(environment.production ? 0 : 700),
      )
  }
  shouldRetry(error: HttpErrorResponse) {
    if (error) {
      return interval(500);
    }
    throw error;
  }
}
