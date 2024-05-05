import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import { preventDefaultAndPropagation } from "../../utilities/functions";
import { FileContext } from "../../utilities/Context";

import FileInput from "../../components/FileInput";
import ImageCompressComponent from "../../components/ImageCompressComponent";
import Disclosure from "../../components/Disclosure";

const Compress = () => {
  // Start State Declaration
  const [UploadedFiles, setUploadedFiles] = useState([]);
  const [CompressionLevel, setCompressionLevel] = useState("high");
  const [Compressedimages, setCompressedimages] = useState([]);
  const [zipStatus, setZipStatus] = useState(false);

  const states = {
    UploadedFiles,
    setUploadedFiles,
    CompressionLevel,
    setCompressionLevel,
    Compressedimages,
    setCompressedimages,
    zipStatus,
    setZipStatus,
  };
  // End State Declaration

  function handleFilesDrop(event) {
    preventDefaultAndPropagation(event);

    const droppedfiles = event.dataTransfer.files;

    let newfilearr = [];

    if (droppedfiles.length) {
      for (const file of droppedfiles) {
        newfilearr = [...newfilearr, { uuid: uuidv4(), filedata: file }];
      }

      setUploadedFiles((currentFiles) => {
        console.log([...currentFiles, ...newfilearr]);
        return [...currentFiles, ...newfilearr];
      });
      console.log("file updated to UploadedFiles state");
    }
  }

  return (
    <div
      className="converter-container"
      onDrop={handleFilesDrop}
      onDragOver={preventDefaultAndPropagation}
    >
      <h1 style={{ padding: "1em", textAlign: "center" }}>
        Drag and Drop the image to start Compressing.
      </h1>
      <FileInput setUploadedFiles={setUploadedFiles} />

      <FileContext.Provider value={{ ...states }}>
        <ImageCompressComponent />
      </FileContext.Provider>
      
        <Disclosure />

      <div className="supported-formats-list" style={{ padding: "1em", textAlign: "center" }}>

        <h2 >
          Supported Formats.
        </h2>

        <ol type="1" style={{
          maxWidth: '35px',
          marginInline: 'auto',
          fontSize: '1.5em' 
        }}>
          <li>JPG</li>
          <li>PNG</li>
          <li>BMP</li>
        </ol>
        
      </div>

    </div>
  );
};

export default Compress;
