/*
 * @Author: your name
 * @Date: 2020-02-27 00:59:29
 * @LastEditTime: 2020-02-27 10:16:12
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \my-app-first\src\router\index.js
 */
import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import App from "../App";
import Test from "../views/check";
import DrawerTest from "../views/drawer";
import MenuTest from "../views/menu";



const BasicRoute = () => (
  <HashRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/test" component={Test} />
      <Route exact path="/dt" component={DrawerTest} />
      <Route exact path="/menu" component={MenuTest} />
    </Switch>
  </HashRouter>
);

export default BasicRoute;