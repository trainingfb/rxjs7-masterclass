// features/timer.component.ts
import { Component, OnDestroy } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { TimerService } from '../core/services/timer.service';

@Component({
  selector: 'app-timer',
  template: `
    <h1>Timer Example</h1>
    <pre>shareReplay()</pre>

    <h1>{{timerService.timer$ | async}}</h1>

    <button (click)="subscribeTimer()">SUBSCRIBE TIMER {{timer}}</button>
  `,
})
export class TimerComponent implements OnDestroy {
  timer: number | null = null;
  destroy$ = new Subject();

  constructor(public timerService: TimerService) { }

  subscribeTimer() {
    this.timerService.timer$
      .pipe(
        takeUntil(this.destroy$)
      )
      .subscribe((value) => {
        console.log('timer')
        this.timer = value
      });
  }

  ngOnDestroy() {
    this.destroy$.next(null);
    this.destroy$.complete();
  }

}
