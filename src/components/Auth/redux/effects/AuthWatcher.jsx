/* eslint-disable no-debugger */
import { takeEvery, put, all, call } from "redux-saga/effects";
import { authActionTypes, clearTokenAction } from "../actions/AuthActionTypes";
import {
  processingCompleted,
  processingStarted,
} from "../../../../stateManagement/redux/actions/commonActions";
import { invokeApi } from "../../../../apiManagement/invokeApi";
import apiModule from "../../../../apiManagement/apiModule";
import { getAction } from "../../../../stateManagement/reduxUtils";

export function* getUserLogin(action) {
  yield all([put(processingStarted())]);
  try {
    const responseData = yield call(
      invokeApi,
      apiModule.GET_USER_SIGN_IN,
      action.data
    );
    localStorage.setItem("auth-token", responseData.data.token);
    console.log("#RES>", responseData);
    if (responseData) {
      yield all([
        put(getAction(authActionTypes.SET_AUTH_TOKEN, responseData.data.token)),
        put(processingCompleted()),
      ]);
    }
  } catch (err) {
    debugger;
    // yield all([put(getAction(authActionTypes.SET_SERVER_ERRORS, err))]);
    console.log("#ERR>", JSON.stringify(err));
  }
}

function* getClearToken() {
  yield all([put(clearTokenAction())]);
}

function* authWatcher() {
  yield takeEvery(authActionTypes.GET_SIGN_IN, getUserLogin);
  yield takeEvery(authActionTypes.CLEAR_TOKEN, getClearToken);
}

export default authWatcher;
