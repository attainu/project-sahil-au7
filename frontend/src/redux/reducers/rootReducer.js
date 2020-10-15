import { combineReducers } from "redux";
import userReducer from "./userReducer";
import errorReducer from "./errorReducer";
import coursesReducer from "./coursesReducer";

export default combineReducers({
  userRoot: userReducer,
  errorRoot: errorReducer,
  coursesRoot: coursesReducer,
});
