/*
 * @Author: your name
 * @Date: 2020-02-27 10:45:11
 * @LastEditTime: 2020-02-27 11:35:06
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \my-app-first\src\store\reducers\index.js
 */

const initialState = {
  number: 0
};

const incrementReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT": {
      state.number += 1;
      return { ...state };
      break;
    }
    default:
      return state;
  }
};
export default incrementReducer;
