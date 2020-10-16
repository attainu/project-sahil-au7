import React from "react";
import { Route, Redirect } from "react-router-dom";
// import { isAuth } from "../utils/helper";

import { isAuthToken } from "../redux/helper/setAuthToken";

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthToken() ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
