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
    if (localStorage.getItem("access_token")) {
      return true;
    } else {
      return false;
    }
  }
};

export { setAuthToken, isAuthToken , axios };
