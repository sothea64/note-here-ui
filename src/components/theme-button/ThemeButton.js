import React, { useState, useEffect } from "react";
import {
  ThemeContext,
  themes,
  getRememberTheme,
} from "../../contexts/ThemeContext";
import "./ThemeButton.css";
import {
  BsFillBrightnessHighFill,
  BsFillBrightnessLowFill,
} from "react-icons/bs";

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
              className="ThemeButton"
              style={{
                color: darkMode === true ? "white" : "black",
              }}
              onClick={() => {
                setDarkMode(!darkMode);
                changeTheme(darkMode ? themes.light : themes.dark);
              }}
            >
              {(darkMode === true && (
                <>
                  {/* Change back to Light */}
                  <BsFillBrightnessHighFill />
                </>
              )) || (
                <>
                  {/* Change back to Dark */}
                  <BsFillBrightnessLowFill />
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
