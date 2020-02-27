/*
 * @Author: your name
 * @Date: 2020-02-27 11:30:00
 * @LastEditTime: 2020-02-27 12:05:47
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

// console.log(delay)
function* incrementAsync() {
  yield delay(2000);
  yield put({ type: "INCREMENT" });
}

function* watchIncrementLastAsync() {
  yield takeLatest("INCREMENT_ASYNC_LAST", incrementAsync);
}

function* watchIncrementEveryAsync() {
  yield takeEvery("INCREMENT_ASYNC_EVERY", incrementAsync);
}

//一次性导入多个异步请求
export default function* rootSaga() {
  yield all([
    // 同时并发多个
    watchIncrementLastAsync(),
    watchIncrementEveryAsync()
  ]);
}
