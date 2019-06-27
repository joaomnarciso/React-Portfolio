import React, { Component } from "react";
import Particles from "react-particles-js";

import Introduction from "../components/Introduction";
import Carousel from "../components/Carousel";

import "../sass/home.css";

export default class Home extends Component {
  state = {
    personal: { location: {}, profiles: [] },
    testimonials: []
  };

  componentDidMount() {
    fetch("/data/database.json")
      .then(res => res.json())
      .then(data => {
        this.setState({
          personal: data.basics,
          testimonials: data.testimonials
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
        <Introduction data={this.state.personal} />

        <Carousel data={this.state.testimonials} />
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
