import React, { Component } from "react";
import Particles from "react-particles-js";

import "../sass/about.css";

import Technologies from "../components/Technologies";
import Education from "../components/Education";
import Experience from "../components/Experience";
import Work from "../components/Work";
import Bio from "../components/Bio";

export default class About extends Component {
  state = {
    personal: {},
    technologies: [],
    education: [],
    experience: [],
    work: []
  };

  componentDidMount() {
    fetch("/data/database.json")
      .then(res => res.json())
      /*.then(({ personal, education, technologies, experience, work }) => {
        this.setState({ personal, education, technologies, experience, work });
      })*/
      .then(data => {
        this.setState({
          personal: data.basics,
          technologies: data.technologies,
          education: data.education,
          experience: data.experience,
          work: data.work
        });
      })
      .catch(err => console.error("Something went wrong:", err));
  }

  render() {
    return (
      <section>
        <Particles
          className="particles"
          params={{
            particles: {
              number: {
                value: 160,
                density: {
                  enable: false
                }
              },
              size: {
                value: 3,
                random: true,
                anim: {
                  speed: 4,
                  size_min: 0.3
                }
              },
              line_linked: {
                enable: false
              },
              move: {
                random: true,
                speed: 1,
                direction: "top",
                out_mode: "out"
              }
            },
            interactivity: {
              events: {
                onhover: {
                  enable: true,
                  mode: "bubble"
                },
                onclick: {
                  enable: true,
                  mode: "repulse"
                }
              },
              modes: {
                bubble: {
                  distance: 250,
                  duration: 2,
                  size: 0,
                  opacity: 0
                },
                repulse: {
                  distance: 400,
                  duration: 4
                }
              }
            }
          }}
        />
        <div className="container py-4 my-4">
          <h1>About</h1>
        </div>
        <section className="py-4 my-4 bg-contrast text-left color-dark">
          <Bio data={this.state.personal} />
        </section>

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
      </section>
    );
  }
}
