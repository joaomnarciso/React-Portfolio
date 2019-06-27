import React from "react";
import Social from "./Social";

export default ({ data }) => (
  <div className="container">
    <h2 className=" color-dark">Bio</h2>
    <p className=" color-dark">{data.summary}</p>
  </div>
);
