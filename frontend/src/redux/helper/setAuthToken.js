import axios from "axios";

const setAuthToken = (token) => {
  console.log(token);
  if (token) {
    axios.defaults.headers.common["Authorization"] = token;
  } else {
    delete axios.defaults.headers.common["Authorization"];
  }
};

const isAuthToken = () => {
  if (window !== "undefined") {
    console.log(localStorage.getItem("access_token"));
    if (localStorage.getItem("access_token")) {
      //   return JSON.parse(localStorage.getItem("user_info"));
      return true;
    } else {
      return false;
    }
  }
};

export { setAuthToken, isAuthToken };
