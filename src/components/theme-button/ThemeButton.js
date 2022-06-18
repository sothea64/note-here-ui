import React, { useState, useEffect } from "react";
import {
  ThemeContext,
  themes,
  getRememberTheme,
  ThemesProperties,
} from "../../contexts/ThemeContext";
import "./ThemeButton.css";
import {
  BsFillBrightnessHighFill,
  BsMoonFill,
} from "react-icons/bs";
import "../../App.css"

function ThemeButton(props) {
  const [darkMode, setDarkMode] = useState();

  useEffect(() => {
    if (getRememberTheme() === themes.dark) {
      setDarkMode(true);
    } else {
      setDarkMode(false);
    }
  }, [ThemeContext.theme]);

  return (
    <>
      <div className={"" + " " + props.className}>
        <ThemeContext.Consumer>
          {({ changeTheme }) => (
            <button
              className={
                "noborder-button btn-" +
                (darkMode === true
                  ? ThemesProperties[themes.dark].variant
                  : ThemesProperties[themes.light].variant)
              }
              style={{
                border:"none",
                boxShadow:"none"
              }}
              onClick={() => {
                setDarkMode(!darkMode);
                changeTheme(darkMode ? themes.light : themes.dark);
              }}
            >
              {(darkMode === true && (
                <>
                  {/* Change back to Light */}
                  <BsFillBrightnessHighFill className="m-0 p-0" size="1em" />
                </>
              )) || (
                <>
                  {/* Change back to Dark */}
                  <BsMoonFill className="m-0 p-0" size="1em" />
                </>
              )}
            </button>
          )}
        </ThemeContext.Consumer>
      </div>
    </>
  );
}

export default ThemeButton;
