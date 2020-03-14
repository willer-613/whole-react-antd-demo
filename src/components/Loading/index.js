/*
 * @Author: your name
 * @Date: 2020-03-15 00:48:11
 * @LastEditTime: 2020-03-15 00:48:12
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \my-app-first\src\components\Loading\index.js
 */
import React from "react";
import { Spin, Alert } from "antd";

class Loading extends React.Component {
  render() {
    return (
      <div className="example">
        <Spin tip="Loading..." size="large">
          <Alert
            message="Alert message title"
            description="Further details about the context of this alert."
            type="info"
          />
        </Spin>
      </div>
    );
  }
}

export default Loading;
