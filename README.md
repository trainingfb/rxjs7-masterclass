# RxJS7 MasterClass

## Examples in Repo

* `/crud`: simple crud service to handle side effects and state with `Subject`s
* `/todos` / `todos/[ID]`: reactive forms and multiple XHR ( `combineLatest` / `forkJoin` example )
* `/page1`: state management with BehaviorSubject and derived states (theme and language)
* `/page2`: cache HTTP requests (`shareReplay`)
* `timer`: example with `shareReplay`
* `todos`: sequence of observables (angular router + flattening operators)

## Angular / RxJS Examples:

* [Angular, RxJS7 and `async` pipe](https://stackblitz.com/edit/angular-ivy-myp7yy?file=src%2Fapp%2Fapp.component.ts)
* [Async pipe: avoid multiple HTTP requests](https://stackblitz.com/edit/angular-ivy-q5kzhl?file=src%2Fapp%2Fapp.component.ts)
* [Custom Async pipe](https://stackblitz.com/edit/angular-ivy-bvwbfr?file=src%2Fapp%2Fuser.pipe.ts)
* [Multiple HTTP requests with `forkjoin`](https://stackblitz.com/edit/rxjs-snippet-communication-forkjoin?file=src%2Fapp%2Fapp.component.ts)
* [Nested HTTP requests](https://stackblitz.com/edit/rxjs-snippet-multiple-subscribe-bad-practice?embed=1&file=src/app/app)
* [Nested HTTP requests (get outer and inner data)](https://stackblitz.com/edit/angular-snippet-rxjs-save-partial-data-1?file=src%2Fapp%2Fapp.component.ts)
* [Nested HTTP requests request with flattening operators and `scan`](https://stackblitz.com/edit/angular-ivy-nfzloh?file=src%2Fapp%2Fapp.component.ts,src%2Fapp%2Fmodel%2Fuser.ts)
* [`switchMap` -> Array](https://stackblitz.com/edit/angular-ivy-b72rko?file=src%2Fapp%2Fapp.component.ts)
* [Nested & Multiple HTTP requests (`switchMap` -> Array)](https://stackblitz.com/edit/rxjs-snippet-communication-convert-array-1tpzn3?file=src%2Fapp%2Fapp.component.ts)
* [Reactive Forms (meteo example)](https://stackblitz.com/edit/angular-ivy-b72rko?file=src%2Fapp%2Fapp.component.ts)
* [Reactive Forms with async pipe(meteo example)](https://stackblitz.com/edit/angular-ivy-t8mkxu?file=src%2Fapp%2Fapp.component.ts)
* [Multicast: timer example with `BehaviorSubject` or `share`](https://stackblitz.com/edit/angular-ivy-ptefzq?file=src%2Fapp%2Fapp.component.ts)

## Slides

• [RxJS Slides: flatterning operators, multicast, subjects, `share` vs `shareReplay`](https://www.slideshare.net/secret/zmanMoPW25umOL)
