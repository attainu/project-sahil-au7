import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { userLogout } from "../redux/actions/userAction";

export default function Login() {

  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(userLogout(history));
  });

  return <div></div>;
}
