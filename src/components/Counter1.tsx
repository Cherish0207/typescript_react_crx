import React, { Component } from "react";
import { Dispatch } from "redux";
import * as types from "../store/action-types";
import { connect } from "react-redux";
import { CombinedState } from "../store/reducers";
import { Counter1State } from "../store/reducers/counter1";
let mapStateToProps = (state: CombinedState): Counter1State => state.counter1;
let mapDispatchToProps = (dispatch: Dispatch) => ({
  add1(num: number) {
    dispatch({ type: types.ADD1, payload: num });
  },
});
type Props = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>;
class Counter1 extends Component<Props> {
  render() {
    return (
      <div>
        <p>{this.props.number}</p>
        <button onClick={() => this.props.add1(5)}>+</button>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter1);
