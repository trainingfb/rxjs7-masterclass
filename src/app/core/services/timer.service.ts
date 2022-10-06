// timer.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject, interval, shareReplay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TimerService {
  timer$ = interval(1000)
    .pipe(
      shareReplay({ bufferSize: 1, refCount: false}),
    )
}
