import { createContext } from "react";
import { THEME_KEY } from "./StaticKeys.js";

export function rememberTheme(theme) {
  localStorage.setItem(THEME_KEY, theme);
}

export function getRememberTheme() {
  let theme = localStorage.getItem(THEME_KEY);
  if (theme === undefined || theme === null) {
    theme = themes.light;
    rememberTheme(theme);
  }
  return theme;
}

export const themes = {
  dark: "dark-mode",
  light: "light-mode",
};

export const ThemeContext = createContext({
  theme: getRememberTheme(),
  changeTheme: () => {},
});
