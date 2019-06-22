import React from "react";
import "./App.css";
import Header from "./components/Header";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./containers/Home";
import Contact from "./containers/Contact";
import About from "./containers/About";
import Portfolio from "./containers/Portfolio";
import Footer from "./components/Footer";

export default () => (
  <BrowserRouter>
    <div className="App">
      <Header logo="Joao N." />
      <Route exact path="/" component={Home} />
      <Route path="/contact" component={Contact} />
      <Route path="/about" component={About} />
      <Route path="/portfolio" component={Portfolio} />
      <Footer />
    </div>
  </BrowserRouter>
);
