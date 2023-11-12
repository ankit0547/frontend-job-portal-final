/* eslint-disable no-debugger */
import { takeEvery, put, all, call } from "redux-saga/effects";
import { authActionTypes } from "../actions/AuthActionTypes";
import {
  processingCompleted,
  processingStarted,
} from "../../../../stateManagement/redux/actions/commonActions";
import { invokeApi } from "../../../../apiManagement/invokeApi";
import apiModule from "../../../../apiManagement/apiModule";
import { getAction } from "../../../../stateManagement/reduxUtils";

export function* getUserLogin(action) {
  debugger;
  yield all([put(processingStarted())]);
  try {
    const responseData = yield call(
      invokeApi,
      apiModule.GET_USER_SIGN_IN,
      action.data
    );
    debugger;
    console.log("#RES>", responseData);
    if (responseData) {
      yield all([
        put(getAction(authActionTypes.SET_AUTH_TOKEN, responseData.data)),
        put(processingCompleted()),
      ]);
    }
  } catch (err) {
    console.err("#ERR>", err);
  }
}

function* authWatcher() {
  yield takeEvery(authActionTypes.GET_SIGN_IN, getUserLogin);
}

export default authWatcher;
