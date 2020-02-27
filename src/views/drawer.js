/*
 * @Author: your name
 * @Date: 2020-02-27 01:39:54
 * @LastEditTime: 2020-02-27 10:30:04
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \my-app-first\src\views\drawer.js
 */
import { Popover, Drawer, List, NavBar, Icon } from "antd-mobile";
import React, { useState, Component } from "react";

const myImg = src => (
  <img
    src={`https://gw.alipayobjects.com/zos/rmsportal/${src}.svg`}
    className="am-icon am-icon-xs"
    alt=""
  />
);
const Item = Popover.Item;
export default class DrawerTest extends Component {
  state = {
    open: true,
    visible: true,
    selected: ""
  };
  onSelect = opt => {
    // console.log(opt.props.value);
    this.setState({
      visible: false,
      selected: opt.props.value
    });
  };
  handleVisibleChange = visible => {
    this.setState({
      visible
    });
  };
  onOpenChange = (...args) => {
    console.log(args);
    this.setState({ open: !this.state.open });
  };
  render() {
    // fix in codepen
    const sidebar = (
      <List>
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map(
          (i, index) => {
            if (index === 0) {
              return (
                <List.Item
                  key={index}
                  thumb="https://zos.alipayobjects.com/rmsportal/eOZidTabPoEbPeU.png"
                  multipleLine
                >
                  Category
                </List.Item>
              );
            }
            return (
              <List.Item
                key={index}
                thumb="https://zos.alipayobjects.com/rmsportal/eOZidTabPoEbPeU.png"
              >
                Category{index}
              </List.Item>
            );
          }
        )}
      </List>
    );

    return (
      <div>
        <NavBar
          mode="light"
          icon={<Icon type="left" />}
          onLeftClick={() =>
            this.props.history.push({
              pathname: "/",
              state: {
                id: 3
              }
            })
          }
          rightContent={
            <Popover
              mask
              overlayClassName="fortest"
              overlayStyle={{ color: "currentColor" }}
              visible={this.state.visible}
              overlay={[
                <Item
                  key="4"
                  value="scan"
                  icon={myImg("tOtXhkIWzwotgGSeptou")}
                  data-seed="logId"
                >
                  Scan
                </Item>,
                <Item
                  key="5"
                  value="special"
                  icon={myImg("PKAgAqZWJVNwKsAJSmXd")}
                  style={{ whiteSpace: "nowrap" }}
                >
                  My Qrcode
                </Item>,
                <Item
                  key="6"
                  value="button ct"
                  icon={myImg("uQIYTFeRrjPELImDRrPt")}
                >
                  <span style={{ marginRight: 5 }}>Help</span>
                </Item>
              ]}
              align={{
                overflow: { adjustY: 0, adjustX: 0 },
                offset: [-10, 0]
              }}
              onVisibleChange={this.handleVisibleChange}
              onSelect={this.onSelect}
            >
              <div
                style={{
                  height: "100%",
                  padding: "0 15px",
                  marginRight: "-15px",
                  display: "flex",
                  alignItems: "center"
                }}
              >
                <Icon type="ellipsis" />
              </div>
            </Popover>
          }
        >
          NavBar
        </NavBar>
        {/* <NavBar
          icon={<Icon type="ellipsis" />}
          rightContent={[
            <Icon key="0" type="search" style={{ marginRight: "16px" }} />,
            <Icon
              key="1"
              type="ellipsis"
              // onClick={() =>
              //   this.props.history.push({
              //     pathname: "/menu",
              //     state: {
              //       id: 3
              //     }
              //   })
              // }
              onClick={()=>console.log(1111)}
            />
          ]}
          onLeftClick={this.onOpenChange}
        >
          Basic
        </NavBar> */}
        {/* <Drawer
          className="my-drawer"
          style={{
            minHeight: document.documentElement.clientHeight
          }}
          enableDragHandle
          contentStyle={{
            color: "#A6A6A6",
            textAlign: "center",
            paddingTop: 42
          }}
          sidebar={sidebar}
          open={this.state.open}
          onOpenChange={this.onOpenChange}
        >
          Click upper-left corner
        </Drawer> */}
      </div>
    );
  }
}

