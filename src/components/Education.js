import React from "react";
import CardEducation from "./CardEducation";

export default ({ data }) => (
  <div className="education">
    <h2>
      <i className="fas fa-graduation-cap" />
      Education
    </h2>
    {data.map((item, i) => (
      <CardEducation data={item} />
    ))}
  </div>
);
