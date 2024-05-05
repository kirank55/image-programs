import React, { useEffect } from "react";
import { Link } from "react-router-dom";
 
import { imageConverterRoutes } from "../../utilities/routes";
import "../static/Home/home.css"
const Converter = () => {
  useEffect(() => {
    console.log(imageConverterRoutes);
  });
  //  Loop through map and create a link if the 'to' extension jpg
  const GetAllLinksRelatedTo = (extension, icon) =>
    imageConverterRoutes.map(
      (route) =>
        route.toString().split("-")[2] === extension && (
          <div className={`card-content ${extension}`} key={route} >
            
            <Link className="card-link styled-corner-small" to={"/" + route}>
              <div>
                <i className={icon} />
              </div>

              <span>Convert {route.toUpperCase().replace(/-/g, " ")}</span>
            </Link>
          </div>
        )
    );

  return (
    <div className="sitemap container">
      <h1>
        Here you can find all of the image converters available on the site.      </h1>

          <div className="desc-content" style={{ display: "block" }}>
            <div className="card-grid-container">
              <h2>Convert To JPG </h2>

              <div className="card-grid jpg-grid">
                {GetAllLinksRelatedTo(
                  "jpg",
                  "fa-solid fa-light fa-image fa-2x"
                )}
              </div>
            </div>

            <div className="card-grid-container">
              <h2>Convert To PDF</h2>

              <div className="card-grid pdf-grid">
                {GetAllLinksRelatedTo("pdf", "fa-solid fa-file-pdf fa-2x")}
              </div>
            </div>

            <div className="card-grid-container">
              <h2>Convert To PNG</h2>

              <div className="card-grid png-grid">
                {GetAllLinksRelatedTo(
                  "png",
                  "fa-solid fa-light fa-image fa-2x"
                )}
              </div>
            </div>

            <div className="card-grid-container">
              <h2>Convert To BMP</h2>

              <div className="card-grid bmp-grid">
                {GetAllLinksRelatedTo(
                  "bmp",
                  "fa-solid fa-light fa-image fa-2x"
                )}
              </div>
            </div>

          </div>

    </div>
  );
};

export default Converter;
