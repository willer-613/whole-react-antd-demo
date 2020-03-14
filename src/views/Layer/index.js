/*
 * @Author: your name
 * @Date: 2020-03-14 23:08:49
 * @LastEditTime: 2020-03-14 23:52:49
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \my-app-first\src\views\layer\index.js
 */
import React, { Component } from "react";
import { Layout, Menu, Breadcrumb, Tabs } from "antd";
import { StickyContainer, Sticky } from "react-sticky";
import "./index.scss";

const { Header, Content, Footer } = Layout;

const { TabPane } = Tabs;

const renderTabBar = (props, DefaultTabBar) => (
  <Sticky bottomOffset={80}>
    {({ style }) => (
      <DefaultTabBar
        {...props}
        className="site-custom-tab-bar"
        style={{ ...style }}
      />
    )}
  </Sticky>
);

export default class Layer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Layout>
        <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={["2"]}
            style={{ lineHeight: "64px" }}
          >
            <Menu.Item key="1">nav 1</Menu.Item>
            <Menu.Item key="2">nav 2</Menu.Item>
            <Menu.Item key="3">nav 3</Menu.Item>
          </Menu>
        </Header>
        <Content
          className="site-layout"
          style={{ padding: "0 50px", marginTop: 64 }}
        >
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 380 }}
          >
            <StickyContainer>
              <Tabs defaultActiveKey="1" renderTabBar={renderTabBar}>
                <TabPane tab="Tab 1" key="1" style={{ height: 200 }}>
                  Content of Tab Pane 1
                </TabPane>
                <TabPane tab="Tab 2" key="2">
                  Content of Tab Pane 2
                </TabPane>
                <TabPane tab="Tab 3" key="3">
                  Content of Tab Pane 3
                </TabPane>
              </Tabs>
            </StickyContainer>
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    );
  }
}
