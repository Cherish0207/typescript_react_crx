import React, { ReactElement } from "react";
import ReactDOM from "react-dom";
import Counter1 from "./components/Counter1";
import Counter2 from "./components/Counter2";
import store from "./store";
import { Provider } from "react-redux";
import { BrowserRouter,Route, Link, Redirect, Switch } from "react-router-dom";
import { connectRouter } from "connected-react-router";
import history from "./history";
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter >
      <ul>
        <li>
          <Link to='/counter1'>counter1</Link>
        </li>
        <li>
          <Link to='/counter2'>counter2</Link>
        </li>
      </ul>
      <Switch>
        <Route exact={true} path='/counter1' component={Counter1}></Route>
        <Route exact={true} path='/counter2' component={Counter2}></Route>
        <Redirect to='/counter1'></Redirect>
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
