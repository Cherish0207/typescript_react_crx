import React, { Component, useState } from "react";
import { Form, Input, Button, message } from "antd";
import { withRouter, RouteComponentProps, Route } from "react-router-dom";
import { User, UserAddResponse } from "../typings/api";
import request, { AxiosResponse } from "../api/request";
type Props = RouteComponentProps;
function UserAdd(props: Props) {
  let [user, setUser] = useState<User>({} as User);
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("user,", user);
    request
      .post<UserAddResponse>("/api/users", user)
      .then((response: AxiosResponse<UserAddResponse>) => {
        let { data, code } = response.data;
        if (code === 0) {
          props.history.push("/user/list");
        } else {
          message.error("添加用户失败");
        }
      });
  };
  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUser({
      ...user,
      username: event.target.value,
    });
  };
  return (
    <Form onFinish={handleSubmit}>
      <Form.Item>
        <Input
          placeholder='用户名'
          style={{ width: 120 }}
          value={user.username}
          onChange={handleNameChange}
        />
      </Form.Item>
      <Form.Item>
        <Button type='primary' htmlType='submit'>
          add
        </Button>
      </Form.Item>
    </Form>
  );
}
export default UserAdd;
