import React, { useState, useEffect } from "react";
import {
  themes,
  ThemeContext,
  rememberTheme,
  getRememberTheme,
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
      document.body.classList.remove(themes.dark);
      document.body.classList.add(themes.light);
      rememberTheme(themes.light);
    } else {
      document.body.classList.remove(themes.light);
      document.body.classList.add(themes.dark);
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
