import { combineReducers, ReducersMapObject, Reducer, AnyAction } from "redux";
import counter1, { Counter1State } from "./counter1";
import counter2, { Counter2State } from "./counter2";
export interface CombinedState {
  counter1: Counter1State;
  counter2: Counter2State;
}

let reducers: ReducersMapObject<CombinedState, AnyAction> = {
  counter1,
  counter2,
};

/* export type CombinedState = {
  [key in keyof typeof reducers]: ReturnType<typeof reducers[key]>;
}; */

let rootReducer: Reducer<CombinedState, AnyAction> = combineReducers<CombinedState, AnyAction>(reducers);

export default rootReducer;
