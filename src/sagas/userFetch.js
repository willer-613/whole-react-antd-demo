/*
 * @Author: your name
 * @Date: 2020-03-30 22:51:13
 * @LastEditTime: 2020-03-30 22:57:47
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \may-whole-app-frm\src\sagas\userFetch.js
 */
import { call, takeEvery, put, fork, delay } from "redux-saga/effects";
import axios from "axios";

function* fetch_user() {
  try {
    const users = yield call(
      axios.get,
      "http://jsonplaceholder.typicode.com/users"
    );
    yield put({ type: "FETCH_SUCESS", uu: users });
  } catch (e) {
    yield put({ type: "FETCH_FAIL", errors: e });
  }
}
function* fetch_todo() {
  const todos = yield call(axios.get, "");
  console.log("todos", todos);
}

function* user() {
  yield takeEvery("FETCH_REQUEST", fetch_user);
}

function* todo() {
  yield takeEvery("FETCH_TODO", fetch_todo);
}

const rootUser = [user(), todo()];

export default rootUser;
