/* eslint-disable no-unused-vars */
import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Root from "./root";
import ErrorPage from "./error-page";
import SignUp from "../components/Auth/SignUp";
import SignIn from "../components/Auth/SignIn";
import ForgotPassword from "../components/Auth/forgotPassword";

export const Routing = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/sign-up",
    element: <SignUp />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/sign-in",
    element: <SignIn />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/forgot-password",
    element: <ForgotPassword />,
    errorElement: <ErrorPage />,
  },
]);
