import React from "react";

export default ({ data }) => (
  <div className="education">
    <h2>Education</h2>
    {data.map((item, i) => (
      <div key={i} className="mb-2">
        <h4>{item.date}</h4>
        <h3>{item.instituition}</h3>
        <p>{item.subject}</p>
      </div>
    ))}
  </div>
);
