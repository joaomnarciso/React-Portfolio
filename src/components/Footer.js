import React from "react";
import "../sass/footer.css";

const currentYear = new Date();

export default ({ data }) => (
  <footer className="pb-4 mt-4">
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <p className=" align-middle">
            João M. Narciso © {currentYear.getFullYear()}{" "}
          </p>
        </div>
        <div className="col-md-6">
          <ul className="list-group list-group-horizontal-sm flex-row reset">
            <li className="list-group-item">
              <a
                href="https://www.twitter.com/joaomnarciso"
                title="Twitter"
                target="_blank"
                rel="noreferrer noopener"
              >
                <i className="fab fa-twitter" aria-hidden="true" />
              </a>
            </li>
            <li className="list-group-item">
              <a
                href="https://www.linkedin.com/in/jo%C3%A3o-narciso-656740178/"
                title="LinkedIn"
                target="_blank"
                rel="noreferrer noopener"
              >
                <i className="fab fa-linkedin" aria-hidden="true" />
              </a>
            </li>
            <li className="list-group-item">
              <a
                href="https://github.com/joaomnarciso"
                title="GitHub"
                target="_blank"
                rel="noreferrer noopener"
              >
                <i className="fab fa-github" aria-hidden="true" />
              </a>
            </li>
            <li className="list-group-item">
              <a
                href="https://www.youtube.com/user/Ethion/"
                title="Youtube"
                target="_blank"
                rel="noreferrer noopener"
              >
                <i className="fab fa-youtube" aria-hidden="true" />
              </a>
            </li>
            <li className="list-group-item">
              <a
                href="https://www.xing.com/profile/Joao_Narciso3"
                title="Xing"
                target="_blank"
                rel="noreferrer noopener"
              >
                <i className="fab fa-xing" aria-hidden="true" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
);
