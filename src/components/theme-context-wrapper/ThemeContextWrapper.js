import React, { useState, useEffect } from "react";
import { themes, ThemeContext } from "../../contexts/ThemeContext.js";

export default function ThemeContextWrapper(props) {
  const [theme, setTheme] = useState(themes.dark);

  function changeTheme(theme) {
    setTheme(theme);
  }

  useEffect(() => {
    if (theme === themes.light) {
      document.body.classList.remove(themes.dark);
      document.body.classList.add(themes.light);
    } else {
      document.body.classList.remove(themes.light);
      document.body.classList.add(themes.dark);
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme: theme, changeTheme: changeTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
}
