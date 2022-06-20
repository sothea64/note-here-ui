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
import "./App.css";
import Dashboard from "./screens/dashboard/Dashboard";
import Note from "./screens/note/Note.js";
import ToDo from "./screens/todo/ToDo.js";
import CustomNavbar from "./components/navbar/CustomNavbar";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeContextWrapper>
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
                <Main>
                  <Dashboard />
                </Main>
              </ProtectedRoute>
            }
          />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Main>
                  <Dashboard />
                </Main>
              </ProtectedRoute>
            }
          />
          <Route
            path="/note"
            element={
              <ProtectedRoute>
                <Main>
                  <Note />
                </Main>
              </ProtectedRoute>
            }
          />
          <Route
            path="/todo"
            element={
              <ProtectedRoute>
                <Main>
                  <ToDo />
                </Main>
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </ThemeContextWrapper>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
