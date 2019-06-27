import React, { Component } from "react";
import Introduction from "../components/Introduction";
import Carousel from "../components/Carousel";
import Particles from "react-particles-js";

import "../sass/home.css";

export default class Home extends Component {
  state = {
    personal: [],
    testimonials: [],
    social: []
  };

  componentDidMount() {
    fetch("/data/database.json")
      .then(res => res.json())
      .then(data => {
        this.setState({
          personal: data.basics,
          testimonials: data.testimonials,
          social: data.basics.profiles
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
