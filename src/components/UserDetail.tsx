import React, { Component, useState } from "react";
import { Form, Input, Button, message } from "antd";
import { withRouter, RouteComponentProps, Route } from "react-router-dom";
import { User, UserAddResponse } from "../typings/api";
import request, { AxiosResponse } from "../api/request";

interface Params {
  id: string;
}
type Props = RouteComponentProps<Params>;
function UserDetail(props: Props) {
  console.log(props.match.params);
  
  return <div>ID: {props.match.params.id}</div>;
}
export default UserDetail;
