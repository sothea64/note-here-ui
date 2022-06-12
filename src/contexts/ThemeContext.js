import { createContext } from "react";
import { THEME_KEY } from "./StaticKeys.js";

const DARK_MODE = "dark-mode";
const LIGHT_MODE = "light-mode";

export const themes = {
  dark: DARK_MODE,
  light: LIGHT_MODE,
};

export const themesJSX = {
  "dark-mode": {
    backgroundColor: "black",
    color: "white",
  },
  "light-mode": {
    backgroundColor: "lightblue",
    color: "black",
  },
};

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

export const ThemeContext = createContext({
  theme: themes.light,
  changeTheme: () => {},
});
