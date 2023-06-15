import React, { useContext, useEffect, useState } from "react";
import { FileContext } from "../../../../utilities/Context";
import Loading from "../../utils/Loading";
import { SyncLoadingState, newfilename } from "../../utils/functions";
import { downloadZipofPDFs } from "../../utils/Download";
import jsPDF from "jspdf";
import PDFListitem from "../../Listitems/PDFListitem";

const ShowConvertedList = ({ toext }) => {
  const {
    UploadedFiles,
    ConvertedFileData,
    setConvertedFileData,
    zipStatus,
    setZipStatus,
  } = useContext(FileContext);

  const [loading, setLoading] = useState(false);

  //* Try to convert the file to .pdf using jsPDF (doc.addImage)
  //? if the conversion is suuccessfull update the converted data to ConvertedFileData state
  //! else if the conversion fails then update the error to ConvertedFileData state
  async function convertAndUpdate(file) {
    //! SVG is unsupported format type. Throw error if the file is SVG.
    if (file.filedata.type === "image/svg+xml") {
      const newfile = {
        uuid: file.uuid,
        error: true,
        name: file.filedata.name,
      };

      setConvertedFileData((prevFiles) => [...prevFiles, newfile]);
      console.log("error converting " + file.filedata.name);

      return;
    }

    const inpUrl = file.filedata;
    const imgBlob = new Blob([inpUrl]);
    const imageBitmap = await createImageBitmap(imgBlob);
    const doc = new jsPDF("l", "px", [imageBitmap.height, imageBitmap.width]);

    var reader = new FileReader();
    reader.readAsDataURL(inpUrl);

    reader.onload = function () {
      try {
        doc.addImage(
          reader.result,
          "PNG",
          0,
          0,
          imageBitmap.width,
          imageBitmap.height
        );
      } catch (error) {
        const newfile = {
          uuid: file.uuid,
          error: true,
          name: file.filedata.name,
        };

        setConvertedFileData((prevFiles) => [...prevFiles, newfile]);
        console.log("error converting " + file.filedata.name);

        console.log(error);
        return;
      }

      const newfile = {
        uuid: file.uuid,
        doc: doc,
        name: newfilename(file.filedata.name, toext),
      };

      setConvertedFileData((prevFiles) => [...prevFiles, newfile]);
      console.log("converted " + file.filedata.name + " to " + toext);
    };
  }

  //* loop Through The Array And Check if the file has been converterd already
  //? If the file is new then convert And Update New File
  //! If the file has already been converted avoid converting the files again (incase of a rerender).
  useEffect(() => {
    for (const file of UploadedFiles) {
      const checkForID = (obj) => obj.uuid === file.uuid;

      if (ConvertedFileData.some(checkForID)) {
        console.log("data exists for" + file.filedata.name);
      } else {
        convertAndUpdate(file);
      }
    }
  }, [UploadedFiles]);

  //? Set Loading to true if the UploadedFiles and ConvertedFileData is not equal
  useEffect(() => {
    SyncLoadingState({
      arg1: UploadedFiles.length,
      arg2: ConvertedFileData.length,
      setLoading,
    });
  }, [UploadedFiles, ConvertedFileData]);

  //* Triggers Download of Zip on 'Download All as zip' button click
  useEffect(() => {
    if (zipStatus) {
      downloadZipofPDFs(ConvertedFileData);

      setTimeout(() => {
        setZipStatus(false);
      }, 500);
    }
  }, [zipStatus]);

  return (
    <>
      {loading ? (
        <Loading num={UploadedFiles.length} />
      ) : (
        ConvertedFileData.map((file) => (
          <PDFListitem key={file.uuid} file={file} />
        ))
      )}
    </>
  );
};

export default ShowConvertedList;
