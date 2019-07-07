import React from "react";

export default function CardEducation({ data }) {
  return (
    <div className="card card-education mb-4">
      <div className="card-body">
        <h4>
          <i className="fas fa-graduation-cap" />
          {data.startDate} ~ {data.endDate}
        </h4>
        <h3 className="card-instituition">{data.instituition}</h3>
        <h4 className="card-area">{data.area}</h4>

        <h5 className="card-study-tzpe">{data.studyType}</h5>
        <p className="card-courses">{data.courses}</p>
      </div>
    </div>
  );
}
