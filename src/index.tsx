import React, { ReactElement } from "react";
import ReactDOM from "react-dom";
import Counter1 from "./components/Counter1";
import Counter2 from "./components/Counter2";
import store from "./store";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import { Layout } from "antd";
import "antd/dist/antd.css";
import NavBar from "./components/NavBar";
const { Content } = Layout;
ReactDOM.render(
  <Provider store={store}>
    <Layout>
      <BrowserRouter>
        <NavBar />
        <Content style={{ padding: "10px" }}>
          <Switch>
            <Route exact={true} path='/counter1' component={Counter1} />
            <Route exact={true} path='/counter2' component={Counter2} />
            <Redirect to='/counter1' />
          </Switch>
        </Content>
      </BrowserRouter>
    </Layout>
  </Provider>,
  document.getElementById("root")
);
