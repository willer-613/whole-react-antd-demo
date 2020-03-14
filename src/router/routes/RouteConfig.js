/*
 * @Author: your name
 * @Date: 2020-02-28 14:40:05
 * @LastEditTime: 2020-03-15 01:03:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \my-app-first\src\router\RouteConfig.js
 */
import loadable from "@/utils/loadable"; //使用loadable需要懒加载

export const RouterConfig = [
  {
    path: "/",
    component: loadable(() => import("@/App"))
  },
  {
    path: "/layer",
    component: loadable(() => import("@/views/Layer"))
    // sceneConfig: {
    //   enter: "from-right",
    //   exit: "to-right"
    // }
  },
  {
    path: "/test",
    component: loadable(() => import("@/views/check")),
    sceneConfig: {
      enter: "from-bottom",
      exit: "to-bottom"
    }
  },
  {
    path: "/dt",
    component: loadable(() => import("@/views/drawer")),
    sceneConfig: {
      enter: "from-right",
      exit: "to-right"
    }
  },
  {
    path: "/menu",
    component: loadable(() => import("@/views/menu")),
    sceneConfig: {
      enter: "from-right",
      exit: "to-right"
    }
  },
  {
    path: "/*",
    component: loadable(() => import("@/views/404.js"))
    // sceneConfig: {
    //   enter: "from-right",
    //   exit: "to-right"
    // }
  }
];
