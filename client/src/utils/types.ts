export interface ToggleThemeState {
  darkMode: boolean;
}
export interface RandomState {
  array: number[];
}
export interface CounterState {
  count: number;
}
export interface ToggleViewState {
  isListView: "row" | "column";
}
export interface MenuState {
  isCollapsed: boolean;
}
export interface LanguageState {
  currentLanguage: "en" | "vi";
}
export interface User {
  id: number;
  userName: string;
}
export interface FavoriteState {
  users: User[];
  favorites: { [userId: number]: boolean };
}
export interface User2 {
  id: number;
  userName: string;
  email: string;
  password: string;
}

export interface AuthState {
  user: User2 | null;
  isLoggedIn: boolean;
}
