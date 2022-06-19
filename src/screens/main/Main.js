import React, { useRef, useState } from "react";
import "../../App.css";
import Seperator from "../../components/seperator/Seperator";
import { ThemeContext, ThemesProperties } from "../../contexts/ThemeContext.js";
import { IsString } from "../../utilities/Validator";
import CustomNavbar from "../../components/navbar/CustomNavbar";
import Dashboard from "../dashboard/Dashboard";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProtectedRoute from "../../components/protected-route/AuthenticatedRoute";

function Main(props) {
  return (
    <div style={{ height: "100vh" }}>
      <ThemeContext.Consumer>
        {({ theme }) =>
          ((theme === undefined || !IsString(theme)) && (
            <h1>Loading...</h1>
          )) || (
            <div>
              <CustomNavbar />
              <Seperator />
              {React.cloneElement(props.children, {theme: theme})}
            </div>
          )
        }
      </ThemeContext.Consumer>
    </div>
  );
}

export default Main;
