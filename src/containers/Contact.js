import React from "react";
import Particles from "react-particles-js";

import ContactForm from "../components/ContactForm";

export default function Contact() {
  return (
    <section>
      <Particles
        className="particles"
        params={{
          particles: {
            number: {
              value: 35,
              density: {
                enable: true,
                value_area: 800
              }
            },
            line_linked: {
              enable: false
            },
            move: {
              speed: 4,
              out_mode: "out",
              radius: 10
            },
            shape: {
              type: ["images"],
              images: [
                {
                  src: "/svg/code-solid.svg",
                  height: 23,
                  width: 23
                },
                {
                  src: "/svg/laptop-code-solid.svg",
                  height: 20,
                  width: 20
                },
                {
                  src: "/svg/project-diagram-solid.svg",
                  height: 20,
                  width: 20
                }
              ]
            },
            color: {
              value: "#CCC"
            },
            size: {
              value: 30,
              random: false,
              anim: {
                enable: true,
                speed: 4,
                size_min: 10,
                sync: false
              }
            }
          },
          retina_detect: false
        }}
      />
      <h1>This is the contact</h1>

      <ContactForm />

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d159868.20788303763!2d6.674265563661933!3d51.23858610852389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b8c97bf1465907%3A0x42760fc4a2a73b0!2sD%C3%BCsseldorf!5e0!3m2!1sen!2sde!4v1561585349224!5m2!1sen!2sde"
        width="600"
        height="450"
        frameborder="0"
        style={{ border: 0 }}
        allowfullscreen
      />
    </section>
  );
}
