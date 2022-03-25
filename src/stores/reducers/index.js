import authReducer from "./auth";
import { combineReducers } from "redux";

const rootReducers = combineReducers({
  auth: authReducer,
});

export default rootReducers;
