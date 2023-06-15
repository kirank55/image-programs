import React, { useRef } from "react";
import { v4 as uuidv4 } from "uuid";

import "./converter.css";
import "./overlay.css";
import { preventDefaultAndPropagation } from "../../utilities/functions";

const DynamicImgConverter = ({ setUploadedFiles }) => {
  const fileInput = useRef(null);

  function addDraggingFileClass(event) {
    preventDefaultAndPropagation(event);
    document.body.classList.add("dragging-file");
    document.querySelector(".file-drag-overlay").classList.add("dragging-file");
  }

  function removeDraggingFileClass() {
    document.body.classList.remove("dragging-file");
    document
      .querySelector(".file-drag-overlay")
      .classList.remove("dragging-file");
  }

  async function handleFilesDrop(event) {
    preventDefaultAndPropagation(event);

    const droppedfiles = event.target.files
      ? event.target.files
      : event.dataTransfer.files;

      let newfilearr = []
      
      
      if (droppedfiles.length > 0) {
          for (const file of droppedfiles) {
              newfilearr = [...newfilearr, { uuid: uuidv4(), filedata: file }];
            }
        }

      setUploadedFiles([newfilearr[0]]);

      console.log("file updated to UploadedFiles state");

    removeDraggingFileClass();
  }

  return (
    <>
      <div
        className="file-drag-overlay"
        onDrop={handleFilesDrop}
        onDragLeave={removeDraggingFileClass}
        onDragEnter={preventDefaultAndPropagation}
        onDragOver={preventDefaultAndPropagation}
      >
        <div className="drop-files">
          <i className="fa-solid fa-plus add-file-icon" />
          <p>Drop your files </p>
        </div>
      </div>

      <main>
        <div className="container">
          <div className="file-upload styled-corner">
            <div
              className="file-upload-area noselect"
              onDrop={handleFilesDrop}
              onClick={() => fileInput.current.click()}
              onDragEnter={addDraggingFileClass}
              onDragOver={addDraggingFileClass}
            >
              <i className="file-upload-icon fa-solid fa-cloud-arrow-up" />
              <p>Drag &amp; drop your files here</p>
              <button className="file-button">
                <i className="fa-solid fa-upload" />
                Select files
              </button>
            </div>
          </div>

          <form
            className="visually-hidden"
            method="get"
            encType="multipart/form-data"
          >
            <input
              type="file"
              id="file_uploads"
              name="file_uploads"
              multiple
              ref={fileInput}
              onChange={handleFilesDrop}
            />
            <button>Upload files</button>
          </form>
        </div>
      </main>
    </>
  );
};

export default DynamicImgConverter;
