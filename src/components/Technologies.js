import React from "react";

export default ({ data }) => (
  <div className="technologies">
    <h2>Technologies</h2>
    <div className="d-flex justify-content-start flex-wrap">
      {data.map((item, i) => (
        <span key={i} className="badge badge-primary p-2">
          {item}
        </span>
      ))}
    </div>
  </div>
);
