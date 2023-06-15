import React, { Suspense, lazy, useContext } from "react";

import { FileContext } from "../../utilities/Context";
import LoadingNormal from "./utils/LoadingNormal";

import "./list.css";

const ListOfConvertedFiles = (props) => {
  const toext = props;
  const {
    UploadedFiles,
    setUploadedFiles,
    setZipStatus,
    setConvertedFileData,
  } = useContext(FileContext);

  const LazyimportandShowList = (props) => {
    const extension = props.toext;

    if (extension === "jpg") {
      const ShowConvertedJPGList = lazy(() => import("./formats/JPG"));
      return <ShowConvertedJPGList {...props} />;
    }

    if (extension === "png") {
      const ShowConvertedList = lazy(() => import("./formats/PNG"));
      return <ShowConvertedList {...props} />;
    }

    if (extension === "bmp") {
      const ShowConvertedList = lazy(() => import("./formats/BMP"));
      return <ShowConvertedList {...props} />;
    }

    if (extension === "tiff") {
      const ShowConvertedList = lazy(() => import("./formats/TIFF"));
      return <ShowConvertedList {...props} />;
    }

    if (extension === "pdf") {
      const ShowConvertedList = lazy(() => import("./formats/PDF"));
      return <ShowConvertedList {...props} />;
    }

    return "No Converter Component found";
  };

  const handleClearAllClick = () => {
    setUploadedFiles([]);
    setConvertedFileData([]);
  };

  const handleDownloadClick = () => {
    setZipStatus(true);
    //! This return statement is necessary to prevent rerender of this component.
    return;
  };

  return (
    <>
      {UploadedFiles.length != 0 && (
        <div className="converted-files">
          <div className="convfileheading">
            <h2>Here's your {props.toext} files</h2>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <button
                className="med-link styled-corner-small"
                onClick={handleClearAllClick}
              >
                Clear All
              </button>
              <button
                className="med-link styled-corner-small"
                onClick={handleDownloadClick}
              >
                Download All as Zip
              </button>
            </div>
          </div>

          <ol className="converted-files-list">
            <Suspense fallback={<LoadingNormal {...props} />}>
              {LazyimportandShowList(toext)}
            </Suspense>
          </ol>
        </div>
      )}
    </>
  );
};

export default ListOfConvertedFiles;
