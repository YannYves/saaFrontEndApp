import { put, takeLatest, all } from "redux-saga/effects";
import axios from "axios";

const runOurAction = function* () {
  let remoteData;
  yield axios.get("https://httpbin.org/json").then((resp) => {
    remoteData = resp.data;
  });
  yield put({ type: "SET_DATA", payload: remoteData });
};

const runOurAction2 = function* () {
  let remoteData;
  yield axios.get("https://httpbin.org/uuid").then((resp) => {
    remoteData = resp.data;
  });
  yield put({ type: "SET_DATA2", payload: remoteData });
};

function* getAsyncDataWatcher() {
  yield takeLatest("GET_ASYNC_DATA", runOurAction);
}

function* getAsyncDataWatcher2() {
  yield takeLatest("GET_ASYNC_DATA2", runOurAction2);
}

export default function* rootSaga() {
  yield all([getAsyncDataWatcher(), getAsyncDataWatcher2()]);
}
