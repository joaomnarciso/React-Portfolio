import React from "react";
import Social from "./Social";

export default ({ data }) => (
  <div className="container my-4">
    <div className="row py-4">
      <div className="col-md">
        <h1 className="text-left">{data.name}</h1>
        <h3 className="text-left">{data.label}</h3>
        <ul className="list-group text-left my-4 reset">
          <li className="list-group-item phone px-0">
            <i className="fas fa-phone" />
            {data.phone}
          </li>
          <li className="list-group-item email px-0">
            <i className="fas fa-at" />
            {data.email}
          </li>
          <li className="list-group-item location px-0">
            <i className="fas fa-map-marker-alt" />
            {data.location.city}- {data.location.countryCode}
          </li>
        </ul>

        <a
          href="data/cv.pdf"
          className="btn btn-outline-info btn-custom"
          target="_blank"
        >
          Download my resume
        </a>
      </div>
      <div className="col-sm text-right">
        <img
          src="/images/me.jpg"
          alt="profile"
          className="rounded-circle text-center"
          height="300"
          style={{ objectFit: "cover" }}
        />
        <Social data={data.profiles} />
      </div>
    </div>
  </div>
);
