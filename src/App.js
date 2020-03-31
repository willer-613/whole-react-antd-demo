/*
 * @Author: your name
 * @Date: 2020-02-27 00:15:56
 * @LastEditTime: 2020-03-30 22:25:47
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \my-app-first\src\App.js
 */
import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.scss";
import Test from "./views/check";
import { Button } from "antd-mobile";
import {
  increment,
  incrementAsyncLast,
  incrementAsyncEvery
} from "./store/actions/index";
import { connect } from "react-redux";

const App = function(props) {
  console.log("App-props", props);
  const [visible, setVisible] = useState(true);
  const [tag, setTag] = useState("true");

  useEffect(() => {
    console.log("caonininini");
    // window.document.title = `你点击了${props.number}次`;
    window.document.title = `你点击了${props.logstr}次`;

    // return () => {};
  }, [props.logstr]); //此处的意思是只有number变化才执行useEffect,如果没有第二个参数则useEffect则再render之后会执行一次，如果第二个参数是空数组则useEffect不会执行

  useEffect(() => {
    window.addEventListener("click", showLog);
    //此处必须返回一个函数
    return () => {
      window.removeEventListener("click", showLog);
    };
  }, [visible]); //此处的意思是只有visible变化才执行useEffect,如果没有第二个参数则useEffect则再render之后会执行一次，如果第二个参数是空数组则useEffect不会执行

  const showLog = e => {
    console.log("click被触发", e);
  };

  return (
    // <React.Fragment>
    <>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          {visible || <p>{tag}</p>}
          <a className="App-link" href="#/dt" rel="noopener noreferrer">
            Learn React
          </a>

          <Button
            type="primary"
            size="small"
            inline
            onClick={() => {
              setVisible(!visible);
              // console.log(visible);
              // props.history.push({
              //   pathname: "/test",
              //   state: {
              //     id: 3
              //   }
              // });
            }}
          >
            一个按钮
          </Button>
          {props.number}
          <Button
            type="primary"
            size="small"
            inline
            onClick={() => {
              props.increment("ss");
            }}
          >
            实时增加
          </Button>

          {props.number}
          <Button
            type="primary"
            size="small"
            inline
            onClick={() => {
              props.incrementAsyncLast();
            }}
          >
            最后一次增加
          </Button>
          {props.number}
          <Button
            type="primary"
            size="small"
            inline
            onClick={() => {
              props.incrementAsyncEvery();
            }}
          >
            每次都增加增加
          </Button>

          <Test />
        </header>
      </div>
    </>
    //  </React.Fragment>
  );
};

//需要转成prop的值的state
const mapStateToProps = state => ({
  number: state.number,
  logstr: state.logstr
});

const mapDispatchToProps = dispatch => {
  return {
    increment: pa => dispatch(increment(pa)),
    incrementAsyncLast: () => dispatch(incrementAsyncLast()),
    incrementAsyncEvery: () => dispatch(incrementAsyncEvery())
  };
};
// export default App;
export default connect(mapStateToProps, mapDispatchToProps)(App);
