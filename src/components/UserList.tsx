import React, { Component, useState, useEffect } from "react";
import { Layout, Menu, Table, message } from "antd";
import { Link, withRouter, RouteComponentProps, Route } from "react-router-dom";
import { User, UserListResponse } from "../typings/api";
import request, { AxiosResponse } from "../api/request";
type Props = RouteComponentProps;
let columns = [
  {
    title: "ID",
    dataIndex: "_id",
    key: "_id",
    render(val: string, record: User) {
      return <Link to={`/user/detail/${record._id}`}>{record.username}</Link>;
    },
  },
  {
    title: "用户名",
    dataIndex: "username",
    key: "username",
  },
];
function UserList() {
  let [users, setUsers] = useState<Array<User>>([]);
  useEffect(() => {
    (async () => {
      // let response: AxiosResponse<UserListResponse> = await request.get<
      //   UserListResponse,
      //   AxiosResponse<UserListResponse>
      // >("/api/users");
      // let { data, code } = response.data;
      // if (code === 0) {
      //   setUsers(data);
      // } else {
      //   message.error("获取用户列表失败");
      // }
      setUsers([
        {
          _id: 0,
          username: "cherish",
        },
        {
          _id: 1,
          username: "silence",
        },
      ]);
    })();
  }, []);
  return (
    <Table
      columns={columns}
      dataSource={users}
      rowKey={(row: User) => row._id}
    ></Table>
  );
}
export default UserList;
