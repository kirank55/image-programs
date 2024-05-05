import React from "react";
import { Link } from "react-router-dom";
import HelmetComponent from "../../../components/Helmet";
// import { imageConverterRoutes } from "../../../utilities/routes";

import "./home.css";

const Home = () => {
  // Generate title and description of the page for SEO.
  const pageTitle = `IMAGE PROGRAMS`;
  const pageDesc = `Home page of ${window.domain}`;



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
            <h2>Welcome to IMAGE PROGRAMS</h2>
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
                    to={"/compress"}
                  >
                    <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11.35 6.867C11.35 6.45279 11.0142 6.117 10.6 6.117C10.1858 6.117 9.85 6.45279 9.85 6.867H11.35ZM9.85 10.6C9.85 11.0142 10.1858 11.35 10.6 11.35C11.0142 11.35 11.35 11.0142 11.35 10.6H9.85ZM10.6 11.35C11.0142 11.35 11.35 11.0142 11.35 10.6C11.35 10.1858 11.0142 9.85 10.6 9.85V11.35ZM6.867 9.85C6.45279 9.85 6.117 10.1858 6.117 10.6C6.117 11.0142 6.45279 11.35 6.867 11.35V9.85ZM10.0697 11.1303C10.3626 11.4232 10.8374 11.4232 11.1303 11.1303C11.4232 10.8374 11.4232 10.3626 11.1303 10.0697L10.0697 11.1303ZM5.53033 4.46967C5.23744 4.17678 4.76256 4.17678 4.46967 4.46967C4.17678 4.76256 4.17678 5.23744 4.46967 5.53033L5.53033 4.46967ZM14.15 6.867C14.15 6.45279 13.8142 6.117 13.4 6.117C12.9858 6.117 12.65 6.45279 12.65 6.867H14.15ZM12.65 10.6C12.65 11.0142 12.9858 11.35 13.4 11.35C13.8142 11.35 14.15 11.0142 14.15 10.6H12.65ZM13.4 9.85C12.9858 9.85 12.65 10.1858 12.65 10.6C12.65 11.0142 12.9858 11.35 13.4 11.35V9.85ZM17.133 11.35C17.5472 11.35 17.883 11.0142 17.883 10.6C17.883 10.1858 17.5472 9.85 17.133 9.85V11.35ZM12.8697 10.0697C12.5768 10.3626 12.5768 10.8374 12.8697 11.1303C13.1626 11.4232 13.6374 11.4232 13.9303 11.1303L12.8697 10.0697ZM19.5303 5.53033C19.8232 5.23744 19.8232 4.76256 19.5303 4.46967C19.2374 4.17678 18.7626 4.17678 18.4697 4.46967L19.5303 5.53033ZM12.65 17.133C12.65 17.5472 12.9858 17.883 13.4 17.883C13.8142 17.883 14.15 17.5472 14.15 17.133H12.65ZM14.15 13.4C14.15 12.9858 13.8142 12.65 13.4 12.65C12.9858 12.65 12.65 12.9858 12.65 13.4H14.15ZM13.4 12.65C12.9858 12.65 12.65 12.9858 12.65 13.4C12.65 13.8142 12.9858 14.15 13.4 14.15V12.65ZM17.133 14.15C17.5472 14.15 17.883 13.8142 17.883 13.4C17.883 12.9858 17.5472 12.65 17.133 12.65V14.15ZM13.9303 12.8697C13.6374 12.5768 13.1626 12.5768 12.8697 12.8697C12.5768 13.1626 12.5768 13.6374 12.8697 13.9303L13.9303 12.8697ZM18.4697 19.5303C18.7626 19.8232 19.2374 19.8232 19.5303 19.5303C19.8232 19.2374 19.8232 18.7626 19.5303 18.4697L18.4697 19.5303ZM9.85 17.133C9.85 17.5472 10.1858 17.883 10.6 17.883C11.0142 17.883 11.35 17.5472 11.35 17.133H9.85ZM11.35 13.4C11.35 12.9858 11.0142 12.65 10.6 12.65C10.1858 12.65 9.85 12.9858 9.85 13.4H11.35ZM10.6 14.15C11.0142 14.15 11.35 13.8142 11.35 13.4C11.35 12.9858 11.0142 12.65 10.6 12.65V14.15ZM6.867 12.65C6.45279 12.65 6.117 12.9858 6.117 13.4C6.117 13.8142 6.45279 14.15 6.867 14.15V12.65ZM11.1303 13.9303C11.4232 13.6374 11.4232 13.1626 11.1303 12.8697C10.8374 12.5768 10.3626 12.5768 10.0697 12.8697L11.1303 13.9303ZM4.46967 18.4697C4.17678 18.7626 4.17678 19.2374 4.46967 19.5303C4.76256 19.8232 5.23744 19.8232 5.53033 19.5303L4.46967 18.4697ZM9.85 6.867V10.6H11.35V6.867H9.85ZM10.6 9.85H6.867V11.35H10.6V9.85ZM11.1303 10.0697L5.53033 4.46967L4.46967 5.53033L10.0697 11.1303L11.1303 10.0697ZM12.65 6.867V10.6H14.15V6.867H12.65ZM13.4 11.35H17.133V9.85H13.4V11.35ZM13.9303 11.1303L19.5303 5.53033L18.4697 4.46967L12.8697 10.0697L13.9303 11.1303ZM14.15 17.133V13.4H12.65V17.133H14.15ZM13.4 14.15H17.133V12.65H13.4V14.15ZM12.8697 13.9303L18.4697 19.5303L19.5303 18.4697L13.9303 12.8697L12.8697 13.9303ZM11.35 17.133V13.4H9.85V17.133H11.35ZM10.6 12.65H6.867V14.15H10.6V12.65ZM10.0697 12.8697L4.46967 18.4697L5.53033 19.5303L11.1303 13.9303L10.0697 12.8697Z" fill="#000000" />
                    </svg>

                    {/* <img src="/assets/svg/compress-2-svgrepo-com.svg"
                      height="30"
                      width="30"
                    /> */}


                    <span>
                      Image Compressor
                    </span>
                  </Link>
                </div>

                <div className="card-content">
                  <Link
                    className="card-link styled-corner-small"
                    to={"/converter"}
                  >

                    <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 5.56006H22" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M14.22 2H19.78C21.56 2 22 2.44 22 4.2V8.31C22 10.07 21.56 10.51 19.78 10.51H14.22C12.44 10.51 12 10.07 12 8.31V4.2C12 2.44 12.44 2 14.22 2Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M2 17.0601H12" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M4.22 13.5H9.78C11.56 13.5 12 13.94 12 15.7V19.81C12 21.57 11.56 22.01 9.78 22.01H4.22C2.44 22.01 2 21.57 2 19.81V15.7C2 13.94 2.44 13.5 4.22 13.5Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      <path opacity="0.4" d="M22 15C22 18.87 18.87 22 15 22L16.05 20.25" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      <path opacity="0.4" d="M2 9C2 5.13 5.13 2 9 2L7.95001 3.75" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    {/* <img src="/assets/svg/convert-card-svgrepo-com.svg"
                      height="30"
                      width="30"
                    /> */}
                    <span>
                      Image Converter
                    </span>
                  </Link>
                </div>

                <div className="card-content">
                  <Link
                    className="card-link styled-corner-small"
                    to={"/editor"}
                  >
                    <svg width="30px" height="30px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">

                      <path d="M20,16v4a2,2,0,0,1-2,2H4a2,2,0,0,1-2-2V6A2,2,0,0,1,4,4H8" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />

                      <polygon fill="none" points="12.5 15.8 22 6.2 17.8 2 8.3 11.5 8 16 12.5 15.8" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />

                    </svg>

                    {/* <img src="/assets/svg/edit-svgrepo-com.svg"
                      height="30"
                      width="30"
                    /> */}
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
