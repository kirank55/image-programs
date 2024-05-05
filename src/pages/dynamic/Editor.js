import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

import FileInput from "../../components/FileInput";
import EditImage from "./Edit/EditImage";
import Disclosure from "../../components/Disclosure";

import { preventDefaultAndPropagation } from "../../utilities/functions";
import "../static/Home/home.css"

import "./Edit/editor.css";

import Sampleimg from '../../samples/jpgimage.jpg'
import { Link } from "react-router-dom";

const Editor = () => {
  const [UploadedFiles, setUploadedFiles] = useState([]);


  useEffect(() => {
    console.log(UploadedFiles)
  }, [UploadedFiles])

  function InputSampleImage(event) {

    fetch(Sampleimg)
      .then(res => res.blob())
      .then(blob => {
        const file = new File([blob], 'sample.png', blob)

        let newfilearr = [];
        newfilearr = [...newfilearr, { uuid: uuidv4(), filedata: file }];
        setUploadedFiles([newfilearr[0]]);

        console.log("sample file updated to UploadedFiles state");

      })
  }

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
          {/* <div className="desc-content" style={{ display: "block" }}>

            <div className="card-grid-container">
              <div className="card-grid">

                <div className="card-content" >
                  <Link className="card-link styled-corner-small" >
                    <div>
                      <i className={"fa-solid fa-light fa-image fa-2x"} />
                    </div>
                    <span>Try Sample image</span>
                  </Link>
                </div>
              </div>

            </div>

          </div> */}

          <div className="card-grid" onClick={InputSampleImage}>
            <div className="card-content" >
              <Link className="card-link styled-corner-small" >
                <div>
                  <i className={"fa-solid fa-light fa-image fa-2x"} />
                </div>
                <span>Try Sample image</span>
              </Link>
            </div>
          </div>

        </>
      ) : (
        <EditImage UploadedFiles={UploadedFiles} />
      )}

      <Disclosure />
    </div>
  );
};

export default Editor;
