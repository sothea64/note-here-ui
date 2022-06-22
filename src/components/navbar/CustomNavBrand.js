import React from "react";
import { ThemeContext, ThemesProperties } from "../../contexts/ThemeContext.js";

export function CustomNavBrand(props) {
  return (
    <div
      className={
        "navbar-brand m-0 p-1 btn bt- " +
        ThemesProperties[props.theme].textClassName
      }
      style={{
        textDecoration: "none",
        border: "none",
        boxShadow: "none",
      }}
      onClick={() => props.onClick("/dashboard")}
    >
      Note Here
    </div>
  );
}

export default CustomNavBrand;
