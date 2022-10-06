import { BehaviorSubject } from 'rxjs';

type ValueOrCallback<T> = T | ((prev: T) => T);

export function rxstate<T>(initialValue: T) {

  const state$ = new BehaviorSubject(initialValue);

  return {
    value$: state$.asObservable(),
    get: () => state$.getValue(),
    set: (valueOrCallback: ValueOrCallback<T>) => {
      if (valueOrCallback instanceof Function) {
        state$.next(valueOrCallback(state$.getValue()));
      } else {
        console.log('cqui')
        state$.next(valueOrCallback);
      }
    }
  }
}
