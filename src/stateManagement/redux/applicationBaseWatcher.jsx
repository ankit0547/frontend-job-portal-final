/* eslint-disable no-debugger */
import { takeEvery, put, all, call } from "redux-saga/effects";
import {
  applicationLoadedSucessfully,
  commonTypes,
  processingCompleted,
  processingStarted,
} from "../commonActions";
import { invokeApi } from "../../apiManagement/invokeApi";
import apiModule from "../../apiManagement/apiModule";
import { getAction } from "../reduxUtils";

export function* test() {
  yield put(applicationLoadedSucessfully());
}
export function* getTest() {
  debugger;
  yield all([put(processingStarted())]);
  try {
    const responseData = yield call(invokeApi, apiModule.GET_TEST_API);
    console.log("#RES>", responseData);
    if (responseData) {
      yield all([
        put(getAction(commonTypes.SET_TEST_DATA, responseData.data)),
        put(processingCompleted()),
      ]);
    }
  } catch (err) {
    console.err("#ERR>", err);
  }
}

function* applicationBaseWatcher() {
  yield takeEvery(commonTypes.APPLICATION_LOAD_REQ, test);
  yield takeEvery(commonTypes.GET_TEST, getTest);
}

export default applicationBaseWatcher;
