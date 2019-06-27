import React from "react";

export default function CardJob({ data }) {
  return (
    <div className="card card-job mb-4">
      <div className="card-body">
        <h4>
          {data.startDate} ~ {data.endDate}
        </h4>
        <h3 className="card-instituition">{data.name}</h3>
        <h4 className="card-area">{data.position}</h4>

        <h5 className="card-study-tzpe">{data.location}</h5>
        <p className="card-courses">{data.description}</p>
      </div>
    </div>
  );
}
