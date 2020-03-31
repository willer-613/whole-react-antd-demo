/*
 * @Author: your name
 * @Date: 2020-02-27 10:49:17
 * @LastEditTime: 2020-03-30 22:19:43
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \my-app-first\src\store\actions\index.js
 */
export const increment = payload => {
  return {
    type: "INCREMENT",
    payload
  };
};

export const incrementAsyncLast = payload => {
  return {
    type: "INCREMENT_ASYNC_LAST",
    payload
  };
};

export const incrementAsyncEvery = payload => {
  return {
    type: "INCREMENT_ASYNC_EVERY",
    payload
  };
};
