import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./screens/login/Login";
import NotFound from "./screens/notfound/NotFound";
import Signup from "./screens/signup/SignUp";
import Main from "./screens/main/Main.js";
import ProtectedRoute from "./components/protected-route/AuthenticatedRoute.js";
import ThemeContextWrapper from "./components/theme-context-wrapper/ThemeContextWrapper";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeContextWrapper>
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          {/* Protected */}
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Main />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  </ThemeContextWrapper>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
