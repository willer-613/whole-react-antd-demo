/*
 * @Author: your name
 * @Date: 2020-02-27 10:49:17
 * @LastEditTime: 2020-02-27 11:57:09
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \my-app-first\src\store\actions\index.js
 */
export const increment = () => {
  return {
    type: "INCREMENT"
  };
};

export const incrementAsyncLast = () => {
  return {
    type: "INCREMENT_ASYNC_LAST"
  };
};

export const incrementAsyncEvery = () => {
  return {
    type: "INCREMENT_ASYNC_EVERY"
  };
};
