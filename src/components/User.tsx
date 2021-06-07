import React, { Component } from "react";
import { Layout, Menu } from "antd";
import { Link, withRouter, RouteComponentProps, Route } from "react-router-dom";
import UserAdd from "./UserAdd";
import UserList from "./UserList";
type Props = RouteComponentProps;
let { Sider, Content } = Layout;
class User extends Component<Props> {
  render() {
    return (
      <Layout>
        <Sider>
          <Menu
            theme='dark'
            mode='inline'
            selectedKeys={[this.props.location.pathname]}
          >
            <Menu.Item>
              <Link to='/user/add'>添加用户</Link>
            </Menu.Item>
            <Menu.Item>
              <Link to='/user/list'>用户列表</Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Content style={{ padding: "20px" }}>
          <Route path='/user/add' component={UserAdd}></Route>
          <Route path='/user/list' component={UserList}></Route>
        </Content>
      </Layout>
    );
  }
}
export default withRouter(User);
