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
  const [CompressionLevel, setCompressionLevel] = useState('high');
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
        console.log([...currentFiles, ...newfilearr])
        return [...currentFiles, ...newfilearr]
      }
      );
      console.log("file updated to UploadedFiles state");
    }
  }

  return (
    <div
      className="converter-container"
      onDrop={handleFilesDrop}
      onDragOver={preventDefaultAndPropagation}
    >
      <FileInput setUploadedFiles={setUploadedFiles} />

      <FileContext.Provider value={{ ...states }}>

        <ImageCompressComponent />

      </FileContext.Provider>

      <Disclosure />
    </div>
  );
};

export default Compress;
