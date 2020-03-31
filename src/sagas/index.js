/*
 * @Author: your name
 * @Date: 2020-02-27 14:37:25
 * @LastEditTime: 2020-03-30 23:11:59
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \may-whole-app-frm\src\sagas\index.js
 */
import { all, fork } from "redux-saga/effects";
import rootUser from "./userFetch";
import counter from "./counter";

//一次性导入多个异步请求
export default function* rootSaga() {
  yield all([
    // 同时并发多个
    ...rootUser,
    ...counter
  ]);
}
