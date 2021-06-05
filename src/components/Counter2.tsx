import React, { Component } from "react";
import { Dispatch } from "redux";
import * as types from "../store/action-types";
import { connect } from "react-redux";
import { CombinedState } from "../store/reducers";
import { Counter2State } from "../store/reducers/counter2";
let mapStateToProps = (state: CombinedState): Counter2State => state.counter2;
let mapDispatchToProps = (dispatch: Dispatch) => ({
  add1(num: number) {
    dispatch({ type: types.ADD2, payload: num });
  },
});
type Props = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>;
class Counter2 extends Component<Props> {
  render() {
    return (
      <div>
        <p>{this.props.number}</p>
        <button onClick={() => this.props.add1(5)}>+</button>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter2);
