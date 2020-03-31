/*
 * @Author: your name
 * @Date: 2020-02-27 10:45:27
 * @LastEditTime: 2020-03-30 23:27:37
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \my-app-first\src\store\index.js
 */
import { createStore, applyMiddleware } from "redux";
import incrementReducer from "./reducers/index";
import createSagaMiddleware from "redux-saga";
import rootSaga from "../sagas";

// import { composeWithDevTools } from "redux-devtool-extension"; //调试

const sagaMiddleware = createSagaMiddleware();

// const Store = null;
// if (process.env.NODE_ENV === "development") {
//   Store = createStore(incrementReducer, applyMiddleware(thunk, logger));
// } else {
//    Store = createStore(incrementReducer, applyMiddleware(sagaMiddleware));
// }

// const Store = createStore(
//   incrementReducer,
//   process.env.REACT_APP_ENV !== "production"
//     ? composeWithDevTools(applyMiddleware(sagaMiddleware))
//     : applyMiddleware(sagaMiddleware)
// );
console.log("process.env.REACT_APP_ENV", process.env.REACT_APP_ENV);
const Store = createStore(incrementReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default Store;
