import React, { useState, useEffect } from "react";
import { Table, message } from "antd";
import { Link, RouteComponentProps } from "react-router-dom";
import { User, UserListResponse } from "../typings/api";
import request, { AxiosResponse } from "../api/request";
import * as types from "../store/action-types";
import { CombinedState } from "../store/reducers";
import { UserState } from "../store/reducers/user";
import { Dispatch } from "redux";
import { connect } from "react-redux";

let mapStateToProps = (state: CombinedState): UserState => state.user;
let mapDispatchToProps = (dispatch: Dispatch) => ({
  storeUsers(list: Array<User>) {
    dispatch({ type: types.SET_USER_LIST, payload: list });
  },
});
type Props = RouteComponentProps &
  ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>;
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
function UserList(props: Props) {
  let [users, setUsers] = useState<Array<User>>(props.list);
  useEffect(() => {
    if (users.length === 0) {
      (async () => {
        let response: AxiosResponse<UserListResponse> = await request.get<
          UserListResponse,
          AxiosResponse<UserListResponse>
        >("/api/users");
        let { data, code } = response.data;
        if (code === 0) {
          props.storeUsers(data);
        } else {
          message.error("获取用户列表失败");
        }
        // setUsers([
        //   {
        //     _id: 0,
        //     username: "cherish",
        //   },
        //   {
        //     _id: 1,
        //     username: "silence",
        //   },
        // ]);
      })();
    }
  }, []);
  return (
    <Table
      columns={columns}
      dataSource={users}
      rowKey={(row: User) => row._id}
    ></Table>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
