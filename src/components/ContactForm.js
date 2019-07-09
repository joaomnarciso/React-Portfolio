import React, { Component } from "react";

export default class ContactForm extends Component {
  state = {
    name: "",
    email: "",
    subject: "",
    message: "",
    errors: {}
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onSubmit = event => {
    event.preventDefault();

    const errors = this.validate(this.state);

    if (Object.keys(errors).length > 0) {
      this.setState({ errors });
    } else {
      console.log("data", this.state);
    }
  };

  validate = data => {
    const errors = {};

    if (!data.name) errors.name = "You must enter your name";
    if (!data.email) errors.email = "You must enter your email";
    if (!data.subject) errors.subject = "You must enter a subject";
    if (!data.message) errors.message = "You must enter a message";

    return errors;
  };

  render() {
    const { name, email, subject, message, errors } = this.state;

    return (
      <div className="container contact">
        <div className="row">
          <div className="col-lg-12 mx-auto px-0">
            <form
              onSubmit={this.onSubmit}
              className="text-left bg-light pb-5 px-5 shadow-lg"
            >
              <h2 className="py-2">Contact form</h2>
              <div className="form-group">
                <label htmlFor="name">Full name</label>
                <input
                  className="form-control"
                  name="name"
                  id="name"
                  value={name}
                  onChange={this.onChange}
                />
                {errors.name && (
                  <div className="invalid-feedback d-block">{errors.name}</div>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  id="email"
                  value={email}
                  onChange={this.onChange}
                />
                {errors.email && (
                  <div className="invalid-feedback d-block">{errors.email}</div>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  className="form-control"
                  name="subject"
                  id="subject"
                  value={subject}
                  onChange={this.onChange}
                />
                {errors.subject && (
                  <div className="invalid-feedback d-block">
                    {errors.subject}
                  </div>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  className="form-control"
                  name="message"
                  id="message"
                  value={message}
                  onChange={this.onChange}
                />
                {errors.message && (
                  <div className="invalid-feedback d-block">
                    {errors.message}
                  </div>
                )}
              </div>
              <button className="btn btn-outline-info btn-custom">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
