import { createStore, combineReducers } from "redux";
import redGlobal from "./reducers/redGlobal";



const reducer = combineReducers({
  redGlobal,
});

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
