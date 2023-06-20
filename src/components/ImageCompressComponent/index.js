import React, { useContext } from "react";
import { FileContext } from "../../utilities/Context";
import { v4 as uuidv4 } from "uuid";

import ListofCompressedimages from "./List";

import "../ListOfConvertedFiles/list.css";

const ImageCompressComponent = () => {
  const {
    UploadedFiles,
    setUploadedFiles,
    CompressionLevel,
    setCompressionLevel,
    setCompressedimages,
    setZipStatus
  } = useContext(FileContext);

  const handleClearAllClick = () => {
    setUploadedFiles([]);
  };

  const handleDownloadClick = () => {
    setZipStatus(true);
    //! This return statement is necessary to prevent rerender of this component.
    return;
  };

  const handleCompressionlevel = level => {

    setCompressionLevel(level);

    if (!UploadedFiles.length) return;

    let tempfilearr = [];
    for (const file of UploadedFiles) {
      tempfilearr = [...tempfilearr, { uuid: uuidv4(), filedata: file.filedata }];
    }

    setCompressedimages([]);
    setUploadedFiles(tempfilearr);

  };

  return (
    <div className="converted-files">
      
      <h3 style={{ textAlign: "center" }}>
        100kb of Minimum Image size required.
      </h3>
      
      <div className="convfileheading">
        <h2>Compression Level</h2>
      
        <div style={{ display: "flex", justifyContent: "center" }}>

          <button
            className={`med-link styled-corner-small ${
              CompressionLevel === "medium" && "active"
            }`}
            onClick={() => handleCompressionlevel("medium")}
          >
            Medium
          </button>
          <button
            className={`med-link styled-corner-small ${
              CompressionLevel === "high" && "active"
            }`}
            onClick={() => handleCompressionlevel("high")}
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
