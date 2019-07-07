import React, { Component } from "react";
import moment from "moment";
import Particles from "react-particles-js";
import "../sass/portfolio.css";

export default class Portfolio extends Component {
  state = {
    projects: []
  };

  componentDidMount() {
    fetch("/data/database.json")
      .then(res => res.json())
      .then(({ projects }) => {
        setTimeout(() => {
          this.setState({ projects, loading: false });
        }, 500);
      })
      .catch(err => console.error("Something went wrong:", err));
  }

  render() {
    const childElements = this.state.projects.reverse().map(function(element) {
      return (
        <div className="card">
          <div className="project">
            <picture className="position-relative">
              <span className="badge badge-primary p-2">
                <time className="position-relative  w-100 d-block">
                  {moment(element.date).fromNow()}
                </time>
              </span>
              <figure className="mb-0">
                <img
                  src={element.image}
                  className="w-100"
                  style={{ objectFit: "cover" }}
                  alt={element.name}
                />
              </figure>
              <figcaption className="position-relative m-0">
                <h2 className="p-3">{element.name}</h2>
                <p className="px-3 pt-3 m-0 text-left">{element.description}</p>
              </figcaption>
            </picture>
          </div>
        </div>
      );
    });

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
          <h1>Portfolio</h1>
        </div>
        <div className="container portfolio">
          <div className="card-columns ">{childElements}</div>
        </div>
      </section>
    );
  }
}
