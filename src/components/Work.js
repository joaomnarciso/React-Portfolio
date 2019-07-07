import React from "react";
import CardJob from "./CardJob";

export default ({ data }) => (
  <div className="work">
    <h2 className="px-4 py-2">Work Experience</h2>
    {data.map((item, i) => (
      <CardJob data={item} />
    ))}
  </div>
);
