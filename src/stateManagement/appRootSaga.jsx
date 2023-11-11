import { all } from "redux-saga/effects";
import ApplicationBaseWatcher from "./redux/applicationBaseWatcher";

export default function* AppRootSaga() {
  yield all([ApplicationBaseWatcher()]);
}
