import React from "react";

export default ({ data }) => (
  <section>
    <div
      id="carouselExampleIndicators"
      className="carousel slide"
      data-ride="carousel"
    >
      <ol className="carousel-indicators" style={{ zIndex: 99999999 }}>
        {data.map((item, i) => (
          <li
            key={i}
            data-target="#carouselExampleIndicators"
            data-slide-to={i}
            className={i === 0 ? "active" : ""}
          />
        ))}
      </ol>
      <div className="carousel-inner">
        {data.map((item, i) => (
          <div key={i} className={`carousel-item ${i === 0 && "active"}`}>
            <svg
              className="bd-placeholder-img figure-img img-fluid rounded position-relative"
              width="100%"
              height="300"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
              role="img"
              aria-label="Placeholder: 400x300"
            >
              <title>Placeholder</title>
              <rect width="100%" height="100%" fill="#ffbd39" />
            </svg>
            <div className="p-5 position-absolute fixed-top w-100 h-100 d-flex justify-content-center align-items-center">
              <p>
                {item.message}
                <span>
                  <b>{item.author}</b>
                </span>
                <span>{item.company}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
