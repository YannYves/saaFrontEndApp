import { counter } from "./counter";
import { customAsyncData, customAsyncData2 } from "./async";
import { combineReducers } from "redux";
const rootReducer = combineReducers({
  counter,
  customAsyncData,
  customAsyncData2,
});
export default rootReducer;
