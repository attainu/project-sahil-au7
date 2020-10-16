import { combineReducers } from "redux";
import userReducer from "./userReducer";
import errorReducer from "./errorReducer";
import coursesReducer from "./coursesReducer";
import progressReducer from "./progressReducer";

export default combineReducers({
  userRoot: userReducer,
  errorRoot: errorReducer,
  coursesRoot: coursesReducer,
  progressRoot: progressReducer,
});
