import React, { Component } from "react";
import Social from "../components/Social";
import Carousel from "../components/Carousel";
import Particles from "react-particles-js";

import "../sass/home.css";

export default class Home extends Component {
  state = {
    testimonials: [],
    loading: true,
    social: []
  };

  componentDidMount() {
    fetch("/data/database.json")
      .then(res => res.json())
      .then(data => {
        this.setState({
          testimonials: data.testimonials,
          loading: false,
          social: data.social
        });
      })
      .catch(err => console.log("Something went wrong:", err));
  }

  render() {
    return (
      <section>
        <Particles
          className="particles"
          params={{
            particles: {
              number: { value: 150 },
              line_linked: {
                shadow: {
                  enable: true,
                  color: "#33c69f",
                  blur: 5
                }
              }
            }
          }}
        />
        <div className="container my-4">
          <div className="row py-4">
            <div className="col-md">
              <h1 className="text-left">João M. Narciso</h1>
              <h3 className="text-left">Full Stack Developer</h3>
              <ul className="list-group text-left my-4 reset">
                <li className="list-group-item phone px-0">
                  <i className="fas fa-phone" />
                  +49 174 7783152
                </li>
                <li className="list-group-item email px-0">
                  <i className="fas fa-at" />
                  joaomnarciso@gmail.com
                </li>
                <li className="list-group-item location px-0">
                  <i className="fas fa-map-marker-alt" />
                  Düsseldorf - Germany
                </li>
              </ul>

              <button type="button" className="btn btn-outline-info btn-custom">
                Download my resume
              </button>
            </div>
            <div className="col-sm text-right">
              <img
                src="/images/me.jpg"
                alt="profile"
                className="rounded-circle text-center"
                height="300"
                style={{ objectFit: "cover" }}
              />
              <Social data={this.state.social} />
            </div>
          </div>
        </div>
        <div className="container">
          <Carousel data={this.state.testimonials} />
        </div>
        <div className="container my-4">
          <div className="row">
            <div className="col-md">
              <div className="content-frame border-default hover">
                <i className="fas fa-code" />
                <h4>Nam in ante ipsum</h4>
                <h2>Nullam scelerisque diam vitae lacinia ullamcorper. </h2>
              </div>
            </div>
            <div className="col-md">
              <div className="content-frame border-default hover">
                <h4>Nam in ante ipsum</h4>
                <h2>Nullam scelerisque diam vitae lacinia ullamcorper. </h2>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
