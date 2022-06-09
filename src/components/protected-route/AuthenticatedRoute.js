import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../logic/Auth.js";

const ProtectedRoute = ({ children, authorizeKey }) => {
  const location = useLocation();
  let isAuthorize = false;
  authorizeKey = authorizeKey === undefined || 0;
  // let authorizeKey = 0;
  if (authorizeKey !== 0) {
    isAuthorize = useAuth.IsAuthenticate() && useAuth.IsAuthorize(authorizeKey);
  } else if (authorizeKey === 0) {
    isAuthorize = useAuth.IsAuthenticate();
  }
  return isAuthorize ? (
    children
  ) : (
    <Navigate to="/login" replace={true} state={{ path: location.pathname }} />
  );
};

export default ProtectedRoute;
