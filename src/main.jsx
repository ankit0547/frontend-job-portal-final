/* eslint-disable no-unused-vars */
import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Routing from "./routes/Routing";
import store from "./stateManagement/appStore";
import Loader from "./components/common/Loader";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Suspense fallback='loading...'>
    <Provider store={store}>
      <Loader />
      <Routing />
    </Provider>
  </Suspense>
);
