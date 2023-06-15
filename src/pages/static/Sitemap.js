import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { imageConverterRoutes } from "../../utilities/routes";

const Sitemap = () => {
  useEffect(() => {
    console.log(imageConverterRoutes);
  });

  return (
    <div className="sitemap container">
      <h1>
        Here you can find all of the converters available on the site in
        alphabetical order.
      </h1>

      <div className="card-grid-four-col">
        {imageConverterRoutes.map((route) => {
          return (
            <h2 key={route} style={{ textTransform: "uppercase" }}>
              <Link className="med-link styled-corner-small" to={"/" + route}>
                {route}
              </Link>
            </h2>
          );
        })}
      </div>
    </div>
  );
};

export default Sitemap;
