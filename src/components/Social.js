import React from "react";

export default ({ data }) => (
  <ul className="list-group list-group-horizontal-sm m-4 flex-row-reverse reset">
    {data.map((item, i) => (
      <li key={i} className="list-group-item">
        <a
          href="{{item.url}}"
          title={item.name}
          target="_blank"
          rel="noreferrer noopener"
        >
          <i className={`fab fa-${item.class}`} />
        </a>
      </li>
    ))}{" "}
  </ul>
);
