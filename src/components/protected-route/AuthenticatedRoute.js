import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../logic/Auth.js";

const ProtectedRoute = ({ children }) => {
  const location = useLocation();
  return useAuth.IsAuthenticate() ? children : <Navigate to="/login" replace={true} state={{ path: location.pathname }}/>;
};

export default ProtectedRoute;
