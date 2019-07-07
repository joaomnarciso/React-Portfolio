import React from "react";

export default ({ data }) => (
  <div className="card-business container mb-4">
    <div className="row">
      <div className="col-lg-12 mx-auto">
        <h2 className="px-3 py-2">Contact Information</h2>
        <ul className="list-group reset text-left">
          <li className="list-group-item">
            <i className="fas fa-address-card" />
            {data.name}
          </li>

          <li className="list-group-item">
            <i className="fas fa-phone" />
            {data.phone}
          </li>
          <li className="list-group-item">
            <i className="fas fa-at" />
            {data.email}
          </li>
          <li className="list-group-item">
            <i className="fas fa-map-marker-alt" />
            {data.location.city} - {data.location.countryCode}
          </li>
        </ul>
      </div>
    </div>
  </div>
);
