import React from "react";
import { Link, useLocation } from "react-router-dom";
import HelmetComponent from "../../components/Helmet";
import Disclaimer from "../../components/Disclaimer";

import "./static.css";

const About = () => {
  const { pathname } = useLocation();
  const route = pathname.toString().split("/")[1];

  const { domain } = window;
  const pageURL = `${domain}/${route}`;
  const pageTitle = `About Us`;
  const pageDesc = `About us page of ${domain}`;

  return (
    <div className="about-us">
      <HelmetComponent
        pageURL={pageURL}
        pageTitle={pageTitle}
        pageDesc={pageDesc}
      />

      <div className="main-inner">
        <div className="container">
          <h1>About Us</h1>

          <p>This website is created to help you with file conversion.</p>

          <p>
            We can be reached at{" "}
            <a href="mailto:miniprogramsonline@gmail.com">
              miniprogramsonline@gmail.com
            </a>
          </p>

          <p>{domain} does not sell or store your personal information.</p>

          <Link to="/privacy-policy">
            click here to read the full privacy policy.
          </Link>

          <p>
            We reserve the right to update this privacy policy with or without
            notice.
          </p>

          <Disclaimer />
        </div>
      </div>
    </div>
  );
};

export default About;
