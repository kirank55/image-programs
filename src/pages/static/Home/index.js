import React from "react";
import { Link } from "react-router-dom";
import HelmetComponent from "../../../components/Helmet";
import { imageConverterRoutes } from "../../../utilities/routes";
import "./home.css";

const Home = () => {
  // Generate title and description of the page for SEO.
  const pageTitle = `Min Programs`;
  const pageDesc = `Home page of ${window.domain}`;

  //  Loop through map and create a link if the 'to' extension jpg
  const GetAllLinksRelatedTo = (extension, icon) =>
    imageConverterRoutes.map(
      (route) =>
        route.toString().split("-")[2] === extension && (
          <div className="card-content" key={route}>
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
    <div className="home">
      <HelmetComponent
        pageURL={window.domain}
        pageTitle={pageTitle}
        pageDesc={pageDesc}
      />

      {/* <Link className="card-link styled-corner-small" to={"/compress"}>
        <span>Compress Image</span>
      </Link> */}

      {/* <Link className="card-link styled-corner-small" to={"/editor"}>
        <span>edit Image</span>
      </Link> */}

      <div className="md-container">
        <div className="homepage-content">
          <div className="intro-headline">
            <h2>Welcome to MinPrograms</h2>
            <p>
              Click on any tool and Simply Drag your image files and your required file is ready to
              download.
            </p>
          </div>

          <div className="desc-content" style={{ display: "block" }}>
            <div className="card-grid-container">
              <div className="card-grid">

                <div className="card-content">
                  <Link
                    className="card-link styled-corner-small"
                    to={"/converter"}
                  >
                    <span>
                      Image Converter
                    </span>
                  </Link>
                </div>
                <div className="card-content">
                  <Link
                    className="card-link styled-corner-small"
                    to={"/compress"}
                  >
                    <span>
                      Image Compressor
                    </span>
                  </Link>
                </div>
                <div className="card-content">
                  <Link
                    className="card-link styled-corner-small"
                    to={"/editor"}
                  >
                    <span>
                      Image Editor
                    </span>
                  </Link>
                </div>
            

              </div>
            </div>
          </div>

          {/* <div className="desc-content" style={{ display: "block" }}>
            <div className="card-grid-container">
              <h2>jpg converter</h2>

              <div className="card-grid">
                {GetAllLinksRelatedTo(
                  "jpg",
                  "fa-solid fa-light fa-image fa-2x"
                )}
              </div>
            </div>

            <div className="card-grid-container">
              <h2>pdf converter</h2>

              <div className="card-grid">
                {GetAllLinksRelatedTo("pdf", "fa-solid fa-file-pdf fa-2x")}
              </div>
            </div>

            <div className="card-grid-container">
              <h2>png converter</h2>

              <div className="card-grid">
                {GetAllLinksRelatedTo(
                  "png",
                  "fa-solid fa-light fa-image fa-2x"
                )}
              </div>
            </div>

            <div className="card-grid-container">
              <h2>bmp converter</h2>

              <div className="card-grid">
                {GetAllLinksRelatedTo(
                  "bmp",
                  "fa-solid fa-light fa-image fa-2x"
                )}
              </div>
            </div>
            <div className="card-grid-container">
              <h2>Tiff converter </h2>

              <div className="card-grid">
                {GetAllLinksRelatedTo(
                  "tiff",
                  "fa-solid fa-light fa-image fa-2x"
                )}
              </div>
            </div>
          </div> */}

          <p>
            Whether you're a designer, developer, or media manager, our site can
            help you save time.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
