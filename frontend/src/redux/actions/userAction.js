import axios from "axios";
import { setAuthToken } from "../helper/setAuthToken";
import jwt_decode from "jwt-decode";
import { progressVisibleType } from "./progressActions";

export const loginUser = (data) => {
  return {
    type: "SET_USERS_DATA",
    payload: data,
  };
};

const userLogoutHelper = (data) => {
  return {
    type: "DELETE_USERS_DATA",
    payload: data,
  };
};

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
      // dispatch(registerLoaderFlagHelper(true))

      const { token } = data;
      localStorage.setItem("access_token", token);

      setAuthToken(token);
      const decoded = jwt_decode(token);
      dispatch(loginUser(decoded.user));
      dispatch(progressVisibleType(false));
      history.push("/courses");
    } catch (err) {
      console.log(err);
      dispatch({
        type: "SET_REGISTER_ERRORS",
        payload: err.response.data,
      });
      console.log("Error in userRegister Action", err.message);
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

      const { token } = data;
      localStorage.setItem("access_token", token);

      setAuthToken(token);
      const decoded = jwt_decode(token);
      dispatch(loginUser(decoded.user));
      history.push("/all-courses");
    } catch (err) {
      dispatch({
        type: "SET_LOGIN_ERRORS",
        payload: err.response.data,
      });
      console.log("Error in userLogin Action", err.message);
    } finally {
      dispatch(progressVisibleType(false));
    }
  };
};

export const userLogout = () => {
  return (dispatch) => {
    localStorage.removeItem("userJwtToken");
    setAuthToken(false);
    dispatch(userLogoutHelper({}));
  };
};
