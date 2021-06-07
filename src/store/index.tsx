import {
  createStore,
  Store,
  AnyAction,
  applyMiddleware,
  StoreEnhancer,
  StoreEnhancerStoreCreator,
} from "redux";
import thunk from "redux-thunk";
import reducer from "./reducers";
import { CombinedState } from "./reducers";
import { routerMiddleware } from "connected-react-router";
import history from "../history";
const storeEnhancer: StoreEnhancer = applyMiddleware(
  thunk,
  routerMiddleware(history)
);
const storeEnhancerStoreCreator: StoreEnhancerStoreCreator =
  storeEnhancer(createStore);
const store: Store<CombinedState, AnyAction> =
  storeEnhancerStoreCreator(reducer);
export default store;
