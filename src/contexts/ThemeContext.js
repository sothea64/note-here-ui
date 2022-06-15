import { createContext } from "react";
import { THEME_KEY } from "./StaticKeys.js";

const DARK_MODE = "bg-dark";
const LIGHT_MODE = "bg-light";

export const themes = {
  dark: DARK_MODE,
  light: LIGHT_MODE,
};

export const ThemesProperties = {
  "bg-dark": {
    variant: "dark",
    backgroundColor: "gray",
    color: "white",
    bgClassName: "bg-dark",
    textClassName: "text-light"
  },
  "bg-light": {
    variant: "light",
    backgroundColor: "white",
    color: "black",
    bgClassName: "bg-light",
    textClassName: "text-dark"
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
