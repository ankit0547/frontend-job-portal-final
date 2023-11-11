/* eslint-disable no-unused-vars */
import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { Routing } from "./routes/Routing";
import store from "./stateManagement/appStore";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Suspense fallback='loading...'>
    <Provider store={store}>
      <RouterProvider router={Routing} />
    </Provider>
  </Suspense>
);
