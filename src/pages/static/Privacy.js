import { useLocation } from "react-router-dom";

import HelmetComponent from "../../components/Helmet";
import Disclaimer from "../../components/Disclaimer";
import "./static.css";

const Privacy = () => {
  const { pathname } = useLocation();

  const route = pathname.toString().split("/")[1];

  const { domain } = window;
  const pageTitle = `Privacy Policy`;
  const pageURL = `${domain}/${route}`;
  const pageDesc = `Privacy policy page of ${domain}`;

  return (
    <div className="privacy">
      <HelmetComponent
        pageURL={pageURL}
        pageTitle={pageTitle}
        pageDesc={pageDesc}
      />

      <div className="main-inner">
        <div className="container">
          <div className="main-content">
            <h1>Privacy Policy</h1>

            {/* <br /> */}

            <p>Latest Modification date: March 31, 2023</p>

            {/* <br /> */}

            <p>
              Here are our policies informing you regarding the collection, use
              and disclosure of personal data when you use our website and the
              choices you have associated with that data.
            </p>

            {/* <br /> */}
            <p>Who we are</p>
            {/* <br /> */}
            <p>we are the owners of the {domain} website.</p>
            {/* <br /> */}

            <p>
              What personal data do we collect and why do we collect the data?
            </p>
            {/* <br /> */}

            <p>Google Analytics</p>
            {/* <br /> */}
            <p>
              {domain} uses Google Analytics to monitor site usage to improve
              the pages' quality. Google Analytics provides statistical data
              only for website management. Google Analytics uses cookies. Read
              Google's privacy policy here:{" "}
              <a href="https://policies.google.com/privacy">
                https://policies.google.com/privacy
              </a>
            </p>
            {/* <br /> */}

            <p>Google AdSense</p>

            {/* <br /> */}

            <p>{domain} uses Google AdSense to display ads. </p>
            {/* <br /> */}

            <p>
              Third-party vendors, including Google, use cookies to serve ads
              based on a user's prior visits to your website Google's use of the
              advertising cookie enables it and its partners to serve ads to
              your users based on their visit to your sites and/or other sites
              on the internet Users may opt-out of the use of the advertising
              cookie for interest-based advertising by visiting Ad Settings.{" "}
            </p>
            {/* <br /> */}

            <a href="https://adssettings.google.com/authenticated">
              https://adssettings.google.com/authenticated{" "}
            </a>
            {/* <br /> */}

            {/* <br /> */}
            <p>
              By using {domain} website, you accept that you have read and
              understand our privacy policy. Your use of our website is subject
              to our policies.
              {/* <br /> */}
            </p>
          </div>

          <Disclaimer />
        </div>
      </div>
    </div>
  );
};

export default Privacy;
