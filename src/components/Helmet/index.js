import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

const HelmetComponent = ({ pageTitle, pageURL, pageDesc }) => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>{pageTitle}</title>
        <link rel="canonical" href={pageURL} />
        <meta name="description" content={pageDesc} />

        <meta property="og:title" content={pageTitle} tag />
        <meta property="og:url" content={pageURL} />
        <meta property="og:description" content={pageDesc} desc />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/assets/images/logo.svg" />

        <meta name="twitter:card" content="/assets/images/logo.svg" />
        <meta name="twitter:image" content="/assets/images/logo.svg" />
        <meta name="twitter:site" content="@" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDesc} />
      </Helmet>
    </HelmetProvider>
  );
};

export default HelmetComponent;
