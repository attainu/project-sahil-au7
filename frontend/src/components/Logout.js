import React from "react";
import { userLogout } from "../redux/actions/userAction";
import { useHistory, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

export default function Login() {

  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(userLogout(history));
  });

  return <div></div>;
}
