/*
 * @Author: your name
 * @Date: 2020-02-27 10:45:11
 * @LastEditTime: 2020-03-30 22:25:39
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \my-app-first\src\store\reducers\index.js
 */

const initialState = {
  number: 0,
  logstr: "aa",
  otherState: ""
};

const incrementReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "INCREMENT": {
      state.number += 1;
      state.logstr += payload;
      return { ...state };
      break;
    }
    default:
      return state;
  }
};
export default incrementReducer;
