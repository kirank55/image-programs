import React from "react";
import "./static.css";

import { useLocation } from "react-router-dom";
import HelmetComponent from "../../components/Helmet";

const Contact = () => {
  const { pathname } = useLocation();
  const route = pathname.toString().split("/")[1];

  const { domain } = window;

  const pageURL = `${domain}/${route}`;
  const pageTitle = `Contact Us`;
  const pageDesc = `Contact us page of ${domain}`;

  return (
    <div className="contact-us">
      <HelmetComponent
        pageURL={pageURL}
        pageTitle={pageTitle}
        pageDesc={pageDesc}
      />

      <div className="main-inner">
        <div className="container">
          <h1>Contact Us</h1>

          <p>
            We can be reached at
            <a href="mailto:miniprogramsonline@gmail.com">
              miniprogramsonline@gmail.com
            </a>
          </p>
          <p>
            Feel free to reach out to us if you have any questions or
            suggestions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
