/* eslint-disable no-unused-vars */
import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Routing from "./routes/Routing";
import store from "./stateManagement/appStore";
import Loader from "./components/common/Loader";
import { ToastContainer } from "react-toastify";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Suspense fallback='loading...'>
    <Provider store={store}>
      <Loader />
      <ToastContainer />
      <Routing />
    </Provider>
  </Suspense>
);
