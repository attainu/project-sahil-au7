import { combineReducers } from "redux";
import coursesReducer from "./coursesReducer";
import errorReducer from "./errorReducer";
import progressReducer from "./progressReducer";
import userReducer from "./userReducer";

export default combineReducers({
  userRoot: userReducer,
  errorRoot: errorReducer,
  coursesRoot: coursesReducer,
  progressRoot: progressReducer,
});
