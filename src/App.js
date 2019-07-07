import React from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Home, About, Contact, Portfolio } from "./containers";

export default () => (
  <Router>
    <div className="App">
      <Header logo="João M. Narciso" />
      <Route exact path="/" render={() => <Home title="Hello" />} />
      <Route path="/contact" component={Contact} />
      <Route path="/about" component={About} />
      <Route path="/portfolio" component={Portfolio} />
      <Footer />
    </div>
  </Router>
);
