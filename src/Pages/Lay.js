import { Layout, Menu } from "antd";
import icon from "../images/spring-fit.png";
import {} from "@ant-design/icons";
import { Outlet } from "react-router";
import { Link } from "react-router-dom";

const { Content, Footer, Sider, Header } = Layout;
function Lay() {
  return (
    <Layout>
      <Header
        className="site-layout-background"
        style={{
          padding: 0,
          height: 90,
          zIndex: 9,

          position: "fixed",
          width: "100%",
        }}
      >
        <div>
          <img
            src={icon}
            alt="spring-fit icon"
            style={{ width: 80, height: 80, alignItems: "center" }}
          />
        </div>
      </Header>
      <Layout hasSider>
        <Sider
          style={{
            overflow: "auto",
            height: "100vh",
            position: "fixed",
            left: 0,
            top: 90,
            bottom: 0,
          }}
        >
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={["4"]}>
            <Menu.Item key="1">
              <Link to="courts">COURTS</Link>
            </Menu.Item>

            <Menu.Item key="2">
              <Link to="category">CATEGORY</Link>
            </Menu.Item>

            <Menu.Item key="3">
              <Link to="products">PRODUCTS</Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout" style={{ marginLeft: 200 }}>
          <Content
            style={{
              margin: "24px 16px 0",
              overflow: "initial",
              marginTop: 120,
            }}
          >
            <Outlet />
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Ant Design ©2018 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    </Layout>
  );
}

export default Lay;