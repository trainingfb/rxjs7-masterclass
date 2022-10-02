// shared/config/config.ts
export type Theme = 'dark' | 'light';
export type Language = 'it' | 'en';

export interface AppConfig {
  theme: Theme;
  language: Language;
}
