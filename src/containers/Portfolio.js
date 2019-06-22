import React, { Component } from "react";
import "../sass/portfolio.css";

export default class Portfolio extends Component {
  state = {
    projects: []
  };

  componentDidMount() {
    fetch("/data/database.json")
      .then(res => res.json())
      .then(({ projects }) => {
        //console.log("projects", projects);
        setTimeout(() => {
          this.setState({ projects, loading: false });
        }, 500);
      })
      .catch(err => console.error("Something went wrong:", err));
  }

  render() {
    return (
      <div>
        <h1>Portfolio</h1>
        <div className="container">
          <div className="row">
            {this.state.loading ? (
              <div className="d-flex justify-content-center w-100">
                <div className="spinner-border" role="status">
                  <span className="sr-only">Loading...</span>
                </div>
              </div>
            ) : (
              this.state.projects.map((p, key) => (
                <div key={key} className="col-md-4 mb-4">
                  <figure className="figure portfolio-item">
                    <img
                      src={p.image}
                      className="figure-img img-fluid rounded"
                      alt="..."
                      height="300"
                      style={{ objectFit: "cover" }}
                    />
                    <figcaption className="figure-caption">
                      <div>
                        <span className="badge badge-secondary position-absolute">
                          {p.date}
                        </span>
                        <div className="card-body text-left card-body-custom">
                          <h5 className="card-title">{p.name}</h5>

                          <p className="card-text">{p.description}</p>
                          {p.technologies.map((t, key) => (
                            <span
                              key={key}
                              className="badge badge-primary mr-2"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    </figcaption>
                  </figure>
                  <div className="card card-custom d-none">
                    <img
                      src={p.image}
                      className="card-img-top"
                      alt="..."
                      height="200"
                      style={{ objectFit: "cover" }}
                    />
                    <span className="badge badge-secondary position-absolute">
                      {p.date}
                    </span>
                    <div className="card-body text-left card-body-custom">
                      <h5 className="card-title">{p.name}</h5>

                      <p className="card-text">{p.description}</p>
                      {p.technologies.map((t, key) => (
                        <span key={key} className="badge badge-primary mr-2">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    );
  }
}
