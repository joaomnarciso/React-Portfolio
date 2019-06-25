import React, { Component } from "react";
import "../sass/about.css";
import Technologies from "../components/Technologies";
import Education from "../components/Education";
import Experience from "../components/Experience";

import Work from "../components/Work";

export default class About extends Component {
  state = {
    technologies: [],
    education: [],
    experience: [],
    work: []
  };

  componentDidMount() {
    fetch("/data/database.json")
      .then(res => res.json())
      .then(({ education, technologies, experience, work }) => {
        this.setState({ education, technologies, experience, work });
      })
      .catch(err => console.error("Something went wrong:", err));
  }

  render() {
    return (
      <div>
        <h1>About</h1>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <Technologies data={this.state.technologies} />
            </div>
            <div className="col-md-6">
              <Experience data={this.state.experience} />
            </div>
            <div className="col-md-6">
              <Work data={this.state.work} />
            </div>
            <div className="col-md-6">
              <Education data={this.state.education} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
