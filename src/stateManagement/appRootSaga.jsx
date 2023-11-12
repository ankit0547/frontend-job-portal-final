import { all } from "redux-saga/effects";
import ApplicationBaseWatcher from "./redux/effects/applicationBaseWatcher";
import AuthWatcher from "../components/Auth/redux/effects/AuthWatcher";

export default function* AppRootSaga() {
  yield all([ApplicationBaseWatcher(), AuthWatcher()]);
}
