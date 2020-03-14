/*
 * @Author: your name
 * @Date: 2020-02-27 00:15:56
 * @LastEditTime: 2020-03-14 21:23:57
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \my-app-first\src\App.js
 */
import React, { useState } from "react";
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




function App(props) {
  const [visible, setVisible] = useState(true);
  const [tag, setTag] = useState("true");

  return (
    <React.Fragment>
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
              console.log(visible);
              props.history.push({
                pathname: "/test",
                state: {
                  id: 3
                }
              });
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
              props.increment();
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
    </React.Fragment>
  );
}

const mapStateToProps = state => ({
  number: state.number
});

const mapDispatchToProps = dispatch => {
  return {
    increment: params => dispatch(increment(params)),
    incrementAsyncLast: params => dispatch(incrementAsyncLast(params)),
    incrementAsyncEvery: params => dispatch(incrementAsyncEvery(params))
  };
};
// export default App;
export default connect(mapStateToProps, mapDispatchToProps)(App);
