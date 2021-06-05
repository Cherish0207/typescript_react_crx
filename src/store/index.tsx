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
const storeEnhancer: StoreEnhancer = applyMiddleware(thunk);
const storeEnhancerStoreCreator: StoreEnhancerStoreCreator =
  storeEnhancer(createStore);
const store: Store<CombinedState, AnyAction> =
  storeEnhancerStoreCreator(reducer);
export default store;
