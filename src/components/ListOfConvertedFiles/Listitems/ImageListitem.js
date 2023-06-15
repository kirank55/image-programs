import React, { useContext } from "react";
import { AdjustScrollView, TextAbstract } from "../utils/functions";
import { FileContext } from "../../../utilities/Context";

const ImageListitem = (props) => {
  const { file, toext } = props;
  const { error } = file;
  const { setUploadedFiles, setConvertedFileData } = useContext(FileContext);

  const DeleteFile = (uuid) => {
    setUploadedFiles((currFiles) =>
      currFiles.filter((file) => file.uuid !== uuid)
    );
    setConvertedFileData((currFiles) =>
      currFiles.filter((file) => file.uuid !== uuid)
    );

    AdjustScrollView(uuid);
  };

  return (
    <>
      {error ? (
        <li className="converted-file error" id={file.uuid} key={file.uuid}>
          <div className="converted-file-content">
            <span className="filename" style={{ width: "100%" }}>
              Error: ({file.name}) Unsupported format type
            </span>
            <div className="downloadimg">
              <button
                className="delete"
                style={{ margin: "0 5vw", border: "none" }}
                onClick={() => DeleteFile(file.uuid)}
              >
                <i className="fa-solid fa-trash" style={{ fontSize: "20px" }} />
              </button>
            </div>
          </div>
        </li>
      ) : (
        <li className="converted-file" id={file.uuid} key={file.uuid}>
          <div className="converted-file-content">
            <span className="fileimg">
              <i className="fa-solid fa-file" />
            </span>
            <span className="filename">{TextAbstract(file.name, toext)}</span>

            <div className="downloadimg">
              <a href={file.src} download={file.name} className="med-link">
                <span>Download</span>
              </a>

              <button
                className="delete"
                style={{ margin: "0 5vw", border: "none" }}
                onClick={() => DeleteFile(file.uuid)}
                aria-label="delete"
              >
                <i
                  className="fa-solid fa-trash"
                  style={{ fontSize: "20px" }}
                  title="Delete"
                />
              </button>
            </div>
          </div>
        </li>
      )}
    </>
  );
};

export default ImageListitem;
