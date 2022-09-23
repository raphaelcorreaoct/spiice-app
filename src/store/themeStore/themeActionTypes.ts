export enum ThemeActionTypes {
  CHANGE_THEME = 'CHANGE_THEME',
}

export interface ThemeState {
  theme: 'light' | 'dark' | 'purple';
}
