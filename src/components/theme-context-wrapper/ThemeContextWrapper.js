import React, { useState, useEffect } from "react";
import {
  themes,
  ThemeContext,
  rememberTheme,
  getRememberTheme,
  ThemesProperties,DARK_MODE
} from "../../contexts/ThemeContext.js";

export default function ThemeContextWrapper(props) {
  const [theme, setTheme] = useState();

  function changeTheme(theme) {
    setTheme(theme);
    rememberTheme(theme);
  }

  useEffect(() => {
    if (theme === undefined) {
      let rememberTheme = getRememberTheme();
      setTheme(rememberTheme);
      return;
    }
    if (theme === themes.light) {
      // remove dark
      document.body.classList.remove(ThemesProperties[themes.dark].bgClassName);
      document.body.classList.remove(ThemesProperties[themes.dark].textClassName);
      // add light
      document.body.classList.add(ThemesProperties[themes.light].bgClassName);
      document.body.classList.add(ThemesProperties[themes.light].textClassName);
      rememberTheme(themes.light);
    } else {
      // remove light
      document.body.classList.remove(ThemesProperties[themes.light].bgClassName);
      document.body.classList.remove(ThemesProperties[themes.light].textClassName);
      // add dark
      document.body.classList.add(ThemesProperties[themes.dark].bgClassName);
      document.body.classList.add(ThemesProperties[themes.dark].textClassName);
      rememberTheme(themes.dark);
    }
    ThemeContext.theme = theme;
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme: theme, changeTheme: changeTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
}
