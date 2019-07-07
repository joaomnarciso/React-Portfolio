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
            <div className="col-md-6">
              <div className="content-frame border-default hover">
                <h4>Development skills</h4>
                <p className="text-left">
                  I have 12 years commercial experience providing frontend and
                  backend development, producing high quality responsive
                  websites and applications with exceptional reliablity,
                  performance and user experience.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="content-frame border-default hover">
                <h4>Soft skills</h4>
                <p className="text-left">
                  In my experience as a freelancer and working for agencies I
                  have also obtained an eye for detail and appreciation for
                  design, knowledge of integrating with and developing
                  server-side, as well as knowing how to efficiently project
                  manage and work with clients and colleagues successfully.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
