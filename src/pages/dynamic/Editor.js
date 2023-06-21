import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import FileInput from "../../components/FileInput";
import EditImage from "./Edit/EditImage";
import Disclosure from "../../components/Disclosure";

import { preventDefaultAndPropagation } from "../../utilities/functions";
import "./Edit/editor.css";


const Editor = () => {
  const [UploadedFiles, setUploadedFiles] = useState([]);

  function handleFilesDrop(event) {
    preventDefaultAndPropagation(event);

    const droppedfiles = event.dataTransfer.files;

    let newfilearr = [];

    if (droppedfiles.length > 0) {
      for (const file of droppedfiles) {
        newfilearr = [...newfilearr, { uuid: uuidv4(), filedata: file }];
      }

      setUploadedFiles([newfilearr[0]]);
    }

    console.log("file updated to UploadedFiles state");
  }

  return (
    <div
      className="converter-container"
      onDrop={handleFilesDrop}
      onDragOver={preventDefaultAndPropagation}
    >
      {UploadedFiles.length === 0 ? (
        <>
          <h1 style={{ padding: "1em", textAlign: "center" }}>
            Drag and Drop the image to start editing.
          </h1>
          <FileInput setUploadedFiles={setUploadedFiles} />
        </>
      ) : (
        <EditImage UploadedFiles={UploadedFiles} />
      )}

      <Disclosure />
    </div>
  );
};

export default Editor;
