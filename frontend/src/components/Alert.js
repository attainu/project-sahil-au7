import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { errorType } from "../redux/actionType";

export default function Alert() {
  const error = useSelector((store) => store.errorRoot);
  const dispatch = useDispatch();

  setTimeout(() => {
    dispatch(errorType(""));
  }, 5000);

  return (
    <div
      style={{
        position: "absolute",
        bottom: "10px",
        padding: "10px",
        backgroundColor: "red",
        borderRadius: "5px",
        minWidth: "80%",
        marginLeft: "10%",
        display: showError(error),
      }}
    >
      <h3 style={{ margin: "0px", textAlign: "center", color: "white" }}>
        {error.message}
      </h3>
    </div>
  );
}

function showError(error) {
  if (error.message === "") {
    return "none";
  } else {
    return "block";
  }
}
