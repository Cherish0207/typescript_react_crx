function createStore(reducer: any) {
  return {
    getState: "getState",
    dispatch: "dispatch",
  };
}
// store的增强器
function storeEnhancer(createStore: any) {
  return (...args: any[]) => {
    let store = createStore(...args);
    store.name = "cherish";
    return store;
  };
}
let newCreateStore = storeEnhancer(createStore);
let newStore = newCreateStore({});
