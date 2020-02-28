/*
 * @Author: your name
 * @Date: 2020-02-28 14:40:05
 * @LastEditTime: 2020-02-28 14:41:18
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \my-app-first\src\router\RouteConfig.js
 */
import App from "../App";
import Test from "../views/check";
import DrawerTest from "../views/drawer";
import MenuTest from "../views/menu";

export const RouterConfig = [
  {
    path: "/",
    component: App
  },
  {
    path: "/test",
    component: Test,
    sceneConfig: {
      enter: "from-bottom",
      exit: "to-bottom"
    }
  },
  {
    path: "/dt",
    component: DrawerTest,
    sceneConfig: {
      enter: "from-right",
      exit: "to-right"
    }
  },
  {
    path: "/menu",
    component: MenuTest,
    sceneConfig: {
      enter: "from-right",
      exit: "to-right"
    }
  }
];
