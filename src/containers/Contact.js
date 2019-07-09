import React, { Component } from "react";
import Particles from "react-particles-js";

import ContactForm from "../components/ContactForm";
import CardBusiness from "../components/CardBusiness";
import Map from "../components/Map";

import "../sass/contact.css";

export default class Contact extends Component {
  state = {
    personal: { location: {} }
  };

  componentDidMount = async () => {
    try {
      let res = await fetch("/data/database.json");
      const { basics } = await res.json();

      this.setState({ personal: basics });
    } catch (err) {
      console.error("Something went wrong:", err);
    }
  };

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
        <Map />

        <div className="container py-4 my-4">
          <h1>Contact</h1>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <CardBusiness data={this.state.personal} />
            </div>
            <div className="col-md-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    );
  }
}
