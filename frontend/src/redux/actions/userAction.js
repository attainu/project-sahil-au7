import axios from "axios";
import jwt_decode from "jwt-decode";
import {
  isAuthenticated,
  loginUser,
  progressVisibleType,
  errorType,
} from "../actionType";
import { setAuthToken } from "../helper/setAuthToken";

/**
 * User register
 *
 * @param {User credentials} userRegisterCredentials
 * @param {history} history
 */
export const userRegister = (userRegisterCredentials, history) => {
  return async (dispatch) => {
    try {
      dispatch(progressVisibleType(true));

      const { data } = await axios.post(
        "https://educate-india.herokuapp.com/user/signup",
        {
          ...userRegisterCredentials,
        }
      );

      const { token, user } = data;

      //Store access token in local storage
      localStorage.setItem("access_token", token);
      localStorage.setItem("uid", user._id);

      setAuthToken(token);
      const decoded = jwt_decode(token);
      dispatch(loginUser(decoded.user));
      dispatch(progressVisibleType(false));
      dispatch(isAuthenticated(true));
      history.push("/all-courses");
    } catch (err) {
      console.log(err);
      dispatch(errorType(err.message));
    } finally {
      dispatch(progressVisibleType(false));
    }
  };
};

export const userLogin = (userLoginCredentials, history) => {
  return async (dispatch) => {
    try {
      dispatch(progressVisibleType(true));

      const { data } = await axios({
        method: "Post",
        url: "https://educate-india.herokuapp.com/user/login",
        data: userLoginCredentials,
      });

      const { token, user } = data;
      localStorage.setItem("access_token", token);
      localStorage.setItem("uid", user._id);

      setAuthToken(token);
      const decoded = jwt_decode(token);
      dispatch(loginUser(decoded.user));
      dispatch(isAuthenticated(true));
      history.push("/all-courses");
    } catch (err) {
      console.log("Error in userLogin Action", err.message);
    } finally {
      dispatch(progressVisibleType(false));
    }
  };
};

/**
 * Logout
 */
export const userLogout = (history) => {
  return (dispatch) => {
    dispatch(progressVisibleType(true));
    localStorage.removeItem("access_token");
    localStorage.removeItem("uid");
    setAuthToken(null);
    dispatch(isAuthenticated(false));
    history.push("/login");
    dispatch(progressVisibleType(false));
  };
};
