import React, { useContext } from "react";
import { FileContext } from "../../utilities/Context";

import ListofCompressedimages from "./ListofCompressedimages";
import "../ListOfConvertedFiles/list.css";

const ImageCompressComponent = () => {
  const {
    UploadedFiles,
    setUploadedFiles,
    CompressionLevel,
    setCompressionLevel,
    // setZipStatus,
    // setConvertedFileData,
  } = useContext(FileContext);

  const handleClearAllClick = () => {
    setUploadedFiles([]);
    // setConvertedFileData([]);
  };

  const handleDownloadClick = () => {
    setZipStatus(true);
    //! This return statement is necessary to prevent rerender of this component.
    return;
  };

  const handleCompressionlevel = level => {

        setCompressionLevel(level)
  }

  return (
    <div className="converted-files">
      <div className="convfileheading">
        <h2>Compression Level</h2>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <button
            className={`med-link styled-corner-small ${CompressionLevel === 75 ? 'active' : ''}`  }
            onClick={() => handleCompressionlevel(75)}
          >
            Low
          </button>
          <button
            className={`med-link styled-corner-small ${CompressionLevel === 50 ? 'active' : ''}`  }
            onClick={() => handleCompressionlevel(50)}
          >
            Medium
          </button>
          <button
            className={`med-link styled-corner-small ${CompressionLevel === 25 ? 'active' : ''}`  }
            onClick={() => handleCompressionlevel(25)}
          >
            High
          </button>
        </div>
      </div>
      {UploadedFiles.length != 0 && (
        <div className="converted-files">
          <div className="convfileheading">
            <h2>Here's your compressed files</h2>
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

          <ListofCompressedimages />
          </ol>
        </div>
      )}
    </div>
  );
};

export default ImageCompressComponent;
