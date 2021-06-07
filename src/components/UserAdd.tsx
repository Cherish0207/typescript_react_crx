import React, { Component } from "react";
import { Layout, Menu } from "antd";
import { Link, withRouter, RouteComponentProps, Route } from "react-router-dom";
type Props = RouteComponentProps;
let { Sider, Content } = Layout;
class UserAdd extends Component<Props> {
  render() {
    return <div>user add</div>;
  }
}
export default withRouter(UserAdd);
