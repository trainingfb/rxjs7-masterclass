import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, pairwise, startWith } from 'rxjs/operators';
import { AppConfig, Language, Theme } from '../../model/app-config';

const initialState: AppConfig = { theme: 'dark', language: 'it' };

@Injectable({ providedIn: 'root' })
export class AppConfigService {
  private _config = new BehaviorSubject<AppConfig>(initialState);

  set theme(value: Theme) {
    this._config.next({
      ...this._config.getValue(),
      theme: value,
    });
  }

  set language(value: Language) {
    this._config.next({
      ...this._config.getValue(),
      language: value,
    });
  }

  // get current theme
  get theme$(): Observable<Theme> {
    return this._config.pipe(map((data) => data.theme));
  }

  // get previous and current themes
  get themes$(): Observable<[Theme, Theme]> {
    return this._config.pipe(
      map((data) => data.theme),
      // needed since pairwise emit previous and current values
      startWith('dark' as Theme),
      // emit previous and current value
      pairwise()
    );
  }
  get language$(): Observable<Language> {
    return this._config.pipe(map((data) => data.language));
  }
}
