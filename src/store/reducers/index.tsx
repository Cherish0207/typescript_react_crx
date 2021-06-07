import { combineReducers, ReducersMapObject, Reducer, AnyAction } from "redux";
import counter1, { Counter1State } from "./counter1";
import counter2, { Counter2State } from "./counter2";
import { connectRouter,RouterState } from "connected-react-router";
import history from "../../history";
import { LocationState } from "history";
export interface CombinedState {
  counter1: Counter1State;
  counter2: Counter2State;
  router: RouterState<LocationState>;
}

let reducers: ReducersMapObject<CombinedState, any> = {
  counter1,
  counter2,
  router: connectRouter(history),
};

/* export type CombinedState = {
  [key in keyof typeof reducers]: ReturnType<typeof reducers[key]>;
}; */

let rootReducer: Reducer<CombinedState, AnyAction> = combineReducers<CombinedState, AnyAction>(reducers);

export default rootReducer;
