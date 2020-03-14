/*
 * @Author: your name
 * @Date: 2020-03-15 00:51:28
 * @LastEditTime: 2020-03-15 01:06:04
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \my-app-first\src\untils\loadable.js
 */
// import React from "react";
import Loadable from "react-loadable";
import Loading from "@/components/Loading";

//过场组件默认采用通用的，若传入了loading，则采用传入的过场组件
export default (loader, loading = Loading) => {
  return Loadable({
    loader, //路由组件
    loading //过场动画
  });
};
