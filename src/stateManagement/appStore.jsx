import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import createSagaMiddleware from "redux-saga";
import "regenerator-runtime/runtime";

import AppRootReducer from "./appRootReducer.jsx";
import AppRootSaga from "./appRootSaga.jsx";
// import { getEnvironment } from "../utils/utility.jsx";

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

// const Env = getEnvironment();

export const appStore = createStore(
  AppRootReducer,
  composeWithDevTools(
    applyMiddleware(...middleware)
    // other store enhancers if any
  )
);

sagaMiddleware.run(AppRootSaga);

export default appStore;
