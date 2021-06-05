import * as types from "../action-types";
import { AnyAction } from "redux";

export interface Counter2State {
  number: number;
}
let initialState: Counter2State = {
  number: 0,
};
export default function (
  state: Counter2State = initialState,
  action: AnyAction
) {
  switch (action.type) {
    case "ADD2":
      console.log(2);
      
      return { number: state.number + (action.payload || 1) };

    default:
      return state;
  }
}
