/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import ErrorPage from "./error-page";
import { Route, Routes, Navigate } from "react-router-dom";
import { getAuthToken } from "../utils/utility";

const ProtedtedRoute = ({ component, path, ...rest }) => {
  // eslint-disable-next-line no-debugger
  debugger;
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const token = getAuthToken();
  useEffect(() => {
    if (token) {
      setIsAuthenticated(true);
    }
  }, [token]);

  return isAuthenticated ? (
    component
  ) : (
    <Navigate to='/sign-in' replace={true} />
  );
};

export default ProtedtedRoute;
