/*
 * @Author: your name
 * @Date: 2020-02-27 00:15:56
 * @LastEditTime: 2020-02-27 10:47:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \my-app-first\src\index.js
 */
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "antd-mobile/dist/antd-mobile.css";
import Store from "./store/index";
import { Provider } from "react-redux";

import Router from "./router";

// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// ReactDOM.render(<App />, document.getElementById("root"));
ReactDOM.render(
  <Provider store={Store}>
    <Router />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
