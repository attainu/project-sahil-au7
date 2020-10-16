import axios from "axios";
import { setAuthToken } from "../helper/setAuthToken";
import jwt_decode from "jwt-decode";
import {
  progressVisibleType,
  loginUser,
  userLogoutHelper,
} from "../actionType";

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

      const { token } = data;

      //Store access token in local storage
      localStorage.setItem("access_token", token);

      setAuthToken(token);
      const decoded = jwt_decode(token);
      dispatch(loginUser(decoded.user));
      dispatch(progressVisibleType(false));
      history.push("/courses");
    } catch (err) {
      console.log(err);
     
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
