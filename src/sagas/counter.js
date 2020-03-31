/*
 * @Author: your name
 * @Date: 2020-02-27 11:30:00
 * @LastEditTime: 2020-03-30 23:12:21
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \my-app-first\src\sagas\index.js
 */
import {
  put,
  takeEvery,
  call,
  delay,
  takeLatest,
  all
} from "redux-saga/effects";

import {
  INCREMENT,
  INCREMENT_ASYNC_LAST,
  INCREMENT_ASYNC_EVERY
} from "../constants";

// console.log(delay) 此处可以异步去处理一些操作
function* incrementAsync() {
  yield delay(2000);
  yield put({ type: INCREMENT, payload: "Async" });
}

function* watchIncrementLastAsync() {
  yield takeLatest(INCREMENT_ASYNC_LAST, incrementAsync);
}

function* watchIncrementEveryAsync() {
  yield takeEvery(INCREMENT_ASYNC_EVERY, incrementAsync);
}

const counter = [watchIncrementLastAsync(), watchIncrementEveryAsync()];

export default counter;
