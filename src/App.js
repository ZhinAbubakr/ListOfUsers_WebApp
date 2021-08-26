import React, { Component } from "react";
import Todos from "./components/Todos/Todos";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import { Layout, Menu, Breadcrumb, Typography } from "antd";
import { DesktopOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";
import "./style.css";

const { Header, Content, Footer, Sider } = Layout;

export default class App extends Component {
  state = {
    collapsed: false,
  };

  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    const { collapsed } = this.state;
    return (
      <Router>
        <Layout style={{ minHeight: "100vh" }}>
          <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
            <div className="logo" />
            <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
              <Link to="/">
                <Menu.Item
                  key="2"
                  icon={<DesktopOutlined style={{ paddingLeft: 15 }} />}
                >
                  <Typography style={{ color: "#ffffff", padding: 0 }}>
                    Todo List
                  </Typography>
                </Menu.Item>
              </Link>
            </Menu>
          </Sider>

          <Layout className="site-layout">
            <Header className="site-layout-background">
              <Typography>
                <b>TODO APP</b>
              </Typography>
            </Header>

            <Content style={{ margin: "0 16px" }}>
              <Breadcrumb style={{ margin: "16px 0" }}>
                <Breadcrumb.Item>User</Breadcrumb.Item>
                <Breadcrumb.Item>Bill</Breadcrumb.Item>
              </Breadcrumb>
              <div
                className="site-layout-background"
                style={{ padding: 24, minHeight: 360 }}
              >
                <Route path="/" exact component={Todos} />
              </div>
            </Content>
            <Footer style={{ textAlign: "center" }}>
              ZHIN ©2018 Created by Zhin
            </Footer>
          </Layout>
        </Layout>
      </Router>
    );
  }
}
