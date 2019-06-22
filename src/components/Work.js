import React from "react";

export default ({ data }) => (
  <div className="work">
    <h2>Work Experience</h2>
    {data.map((item, i) => (
      <div key={i} className="mb-2">
        <h4>{item.date}</h4>
        <h2>{item.company}</h2>
        <h3>{item.location}</h3>
        <p>{item.description}</p>
      </div>
    ))}
  </div>
);
