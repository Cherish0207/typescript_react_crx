import React, { Component, useState } from "react";
import { Layout, Menu, Table } from "antd";
import { Link, withRouter, RouteComponentProps, Route } from "react-router-dom";
import { User } from "../typings/api";
type Props = RouteComponentProps;
let columns = [
  {
    title: "用户名",
    dataIndex: "username",
    key: "username",
  },
];
function UserList() {
  let [users, setUsers] = useState<Array<User>>([]);
  return (
    <Table
      columns={columns}
      dataSource={users}
      rowKey={(row: User) => row._id}
    ></Table>
  );
}
export default UserList;
