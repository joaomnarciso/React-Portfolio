import React from "react";
import CardJob from "./CardJob";

export default ({ data }) => (
  <div className="work">
    <h2>
      <i class="fas fa-laptop-code" />
      Work Experience
    </h2>
    {data.map((item, i) => (
      <CardJob data={item} />
    ))}
  </div>
);
