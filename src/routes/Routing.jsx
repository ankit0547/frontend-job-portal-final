/* eslint-disable no-unused-vars */
import React from "react";
import {
  createBrowserRouter,
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useNavigate,
} from "react-router-dom";
import ErrorPage from "./error-page";
import SignUp from "../components/Auth/SignUp";
import SignIn from "../components/Auth/SignIn";
import ForgotPassword from "../components/Auth/forgotPassword";
import Home from "./Home";
import ProtedtedRoute from "./ProtedtedRoute";
import { clearAuthToken } from "../utils/utility";
import Dashboard from "../components/app/dashboard";
// import PublicRoutes from "./PublicRoutes";

// export const Routing = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home />,
//     errorElement: <ErrorPage />,
//   },
//   {
//     path: "/sign-up",
//     element: <SignUp />,
//     errorElement: <ErrorPage />,
//   },
//   {
//     path: "/sign-in",
//     element: <SignIn />,
//     errorElement: <ErrorPage />,
//   },
//   {
//     path: "/forgot-password",
//     element: <ForgotPassword />,
//     errorElement: <ErrorPage />,
//   },
//   {
//     path: "/forgot-password",
//     element: <ForgotPassword />,
//     errorElement: <ErrorPage />,
//   },
//   {
//     path: "/dashboard",
//     element: (
//       <ProtedtedRoute
//         path={"/dashboard"}
//         component={<div>Protected route</div>}
//       />
//     ),
//     errorElement: <ErrorPage />,
//   },
// ]);

// const routeModule = [
//   {
//     path: "/login",
//     component: <SignIn />,
//     public: true,
//   },
// ];

const Routing = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/register' element={<SignUp />} />
        <Route path='/sign-up' element={<ForgotPassword />} />
        <Route path='/forgot-password' element={<SignUp />} />
        <Route path='/dashboard' element={<Dashboard />} />
        {/* <Route
          path='/dashboard'
          element={<ProtedtedRoute component={<Dashboard />} />}
        /> */}
        <Route path='*' element={<ErrorPage replace />} />
      </Routes>
    </Router>
  );
};

export default Routing;
