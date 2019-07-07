import React from "react";
import CardEducation from "./CardEducation";

export default ({ data }) => (
  <div className="education">
    <h2 className="px-4 py-2">Education</h2>
    {data.map((item, i) => (
      <CardEducation data={item} />
    ))}
  </div>
);
