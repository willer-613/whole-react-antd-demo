/*
 * @Author: your name
 * @Date: 2020-02-27 10:45:27
 * @LastEditTime: 2020-02-27 13:27:44
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \my-app-first\src\store\index.js
 */
import { createStore, applyMiddleware } from "redux";
import incrementReducer from "./reducers/index";
import createSagaMiddleware from "redux-saga";
import rootSaga from "../sagas/index";

const sagaMiddleware = createSagaMiddleware();

const Store = createStore(incrementReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default Store;
