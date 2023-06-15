import React, { useContext, useEffect, useState } from "react";
import { FileContext } from "../../../../utilities/Context";
import Loading from "../../utils/Loading";
import { SyncLoadingState, newfilename } from "../../utils/functions";
import { downloadZipofimages } from "../../utils/Download";
import ImageListitem from "../../Listitems/ImageListitem";

const ShowConvertedList = ({ toext }) => {
  const {
    UploadedFiles,
    ConvertedFileData,
    setConvertedFileData,
    zipStatus,
    setZipStatus,
  } = useContext(FileContext);

  const [loading, setLoading] = useState(false);

  //* Try to convert the file to .bmp using .getBase64(Jimp.MIME_JPEG
  //? if the conversion is suuccessfull update the converted data to ConvertedFileData state
  //! else if the conversion fails then update the error to ConvertedFileData state
  function convertAndUpdate(file) {
    const Jimp = window.Jimp;
    const reader = new FileReader();
    reader.readAsDataURL(file.filedata);

    reader.addEventListener("load", async () => {
      try {
        const jimpImage = await Jimp.read(reader.result);

        jimpImage.quality(100).getBase64(Jimp.MIME_JPEG, (err, src) => {
          if (err) {
            console.error(err);
            return;
          } else {
            const newfile = {
              uuid: file.uuid,
              src,
              name: newfilename(file.filedata.name, toext),
            };

            setConvertedFileData((prevFiles) => [...prevFiles, newfile]);
            console.log("converted " + file.filedata.name + " to " + toext);
          }
        });
      } catch (e) {
        const newfile = {
          uuid: file.uuid,
          error: true,
          name: file.filedata.name,
        };

        setConvertedFileData((prevFiles) => [...prevFiles, newfile]);
        console.log("error converting " + file.filedata.name);

        // setError(true);
        console.log(e);
      }
    });
  }

  //* loop Through The Array And Check if the file has been converterd already
  //? If the file is new then convert And Update New File
  //! If the file has already been converted avoid converting the files again (incase of a rerender).
  useEffect(() => {
    function ConvertAndUpdateNewFiles() {
      for (const file of UploadedFiles) {
        const checkForID = (obj) => obj.uuid === file.uuid;

        if (ConvertedFileData.some(checkForID)) {
          console.log("data exists for" + file.filedata.name);
        } else {
          convertAndUpdate(file);
        }
      }
    }

    if (window.Jimp == undefined) {
      import("/src/assets/js/jimp.js").then(() => {
        console.log("jimp loaded");
        ConvertAndUpdateNewFiles();
      });
    } else {
      console.log("jimp already  loaded");
      ConvertAndUpdateNewFiles();
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
      downloadZipofimages(ConvertedFileData);

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
          <ImageListitem key={file.uuid} file={file} />
        ))
      )}
    </>
  );
};

export default ShowConvertedList;
