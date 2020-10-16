import axios from "axios";

const setAuthToken = (token) => {
  if (token) {
    axios.defaults.headers.common = { Authorization: `Bearer ${token}` };
    axios.defaults.headers.post["Content-Type"] =
      "application/x-www-form-urlencoded";
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

export { setAuthToken, isAuthToken, axios };

