import React, { Component } from "react";
import TextareaAutosize from "react-textarea-autosize";

import Player from "./Player";

export default class Course extends Component {
  render() {
    return (
      <div
        style={{
          display: "inline-flex",
          position: "absolute",
          justifyContent: "space-evenly",
        }}
      >
        <Player colSpan="3" />
        <TextareaAutosize
          colSpan="2"
          aria-label="500px"
          placeholder="Maximum 4 rows"
          defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
      ut labore et dolore magna aliqua."
        />
      </div>
    );
  }
}
