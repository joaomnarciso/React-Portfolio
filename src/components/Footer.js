import React from "react";
import Social from "./Social";

const currentYear = new Date();

export default ({ data }) => (
  <footer>
    <p> João M. Narciso © {currentYear.getFullYear()} </p>
  </footer>
);
