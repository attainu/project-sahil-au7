import React from "react";
import MediaCard1 from "./MediaCard1";


export default function HorizontalList() {
  return (
    <div>
      <h2 style={{ margin: "10px" }}>Recommendations</h2>
      <ul style={{ display: "inline-flex" }}>
        <MediaCard1 />
        <MediaCard1 />
        <MediaCard1 />
      </ul>

      <h2 style={{ margin: "10px" }}>Popular</h2>
      <ul style={{ display: "inline-flex" }}>
        <MediaCard1 />
        <MediaCard1 />
        <MediaCard1 />
      </ul>
    </div>
  );
}
