import React, { useContext, useEffect, useState } from "react";
import Loading from "../../components/ListOfConvertedFiles/utils/Loading";
import {
  SyncLoadingState,
  newfilename,
} from "../../components/ListOfConvertedFiles/utils/functions";
import { FileContext } from "../../utilities/Context";
import { returnFileSize } from "../../utilities/functions";
import Compressor from "compressorjs";

// import("/src/assets/js/jimp.js")

const CompressedImageListitem = (props) => {
  const { file } = props;
  const { error } = file;
  const { setUploadedFiles, setCompressedimages } = useContext(FileContext);

  // const newsize = new Buffer(file.src, 'base64').length

  // console.log(returnFileSize(file.originalSize))
  // console.log(returnFileSize(newsize))

  // var base64str = file.src.substr(22);
  // var decoded = atob(base64str);

  // console.log(returnFileSize(decoded.length));

  file.originalSize
  file.compressedSize
  const DeleteFile = (uuid) => {
    setUploadedFiles((currFiles) =>
      currFiles.filter((file) => file.uuid !== uuid)
    );
    setCompressedimages((currFiles) =>
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
            <span className="filename">
              compressed {file.name} from {file.originalSize} to {file.compressedSize}
            </span>

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

async function reduce_image_file_size(
  base64Str,
  imageType, 
  compressionLevel,
  MAX_WIDTH = 450,
  MAX_HEIGHT = 450
) {
  let resized_base64 = await new Promise((resolve) => {
    let img = new Image();
    img.src = base64Str;
    img.onload = () => {
      let canvas = document.createElement("canvas");

      let width = img.width;
      let height = img.height;

      if (width > height) {
        if (width > MAX_WIDTH) {
          height *= MAX_WIDTH / width;
          width = MAX_WIDTH;
        }
      } else {
        if (height > MAX_HEIGHT) {
          width *= MAX_HEIGHT / height;
          height = MAX_HEIGHT;
        }
      }

      canvas.width = width;
      canvas.height = height;
      let ctx = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0, width, height);
      console.log(imageType,compressionLevel)
      resolve(canvas.toDataURL(imageType, compressionLevel)); // this will return base64 image results after resize
    };
  });
  return resized_base64;
}
function calc_image_size(image) {
  let y = 1;
  if (image.endsWith("==")) {
    y = 2;
  }
  const x_size = image.length * (3 / 4) - y;
  return Math.round(x_size / 1024);
}
async function image_to_base64(file) {
  let result_base64 = await new Promise((resolve) => {
    let fileReader = new FileReader();
    fileReader.onload = (e) => resolve(fileReader.result);
    fileReader.onerror = (error) => {
      console.log(error);
      alert("An Error occurred please try again, File might be corrupt");
    };
    fileReader.readAsDataURL(file);
  });
  return result_base64;
}
const ListofCompressedimages = () => {
  const {
    UploadedFiles,
    CompressionLevel,
    Compressedimages,
    setCompressedimages,
    // zipStatus,
    // setZipStatus,
  } = useContext(FileContext);

  const [loading, setLoading] = useState(false);

  //* Try to convert the file to .bmp using .getBase64(Jimp.MIME_JPEG
  //? if the conversion is suuccessfull update the converted data to ConvertedFileData state
  //! else if the conversion fails then update the error to ConvertedFileData state
  async function convertAndUpdate(file) {
    // const Jimp = window.Jimp;
    // const reader = new FileReader();
    // reader.readAsDataURL(file.filedata);

    // reader.addEventListener("load", async () => {
    try {
      // const jimpImage = await Jimp.read(reader.result);

      // jimpImage.quality(CompressionLevel)
      // const name = file.filedata.name

      // console.log(file.filedata);
      // console.log("old_size=> ", returnFileSize(file.filedata.size));

      const res = await image_to_base64(file.filedata);
      const resized = await reduce_image_file_size(res,file.filedata.type,CompressionLevel/100);
      
      const new_size = calc_image_size(resized) + "KB"
      // console.log("new_size=> ", new_size, "KB");

      const newfile = {
        uuid: file.uuid,
        src: resized,
        name: file.filedata.name,
        originalSize: returnFileSize(file.filedata.size),
        compressedSize: new_size 
      };
        setCompressedimages((prevFiles) => [...prevFiles, newfile]);

      // jimpImage.quality(CompressionLevel)
      //   jimpImage.quality(10)
      // .getBase64(file.filedata.type, (err, src) => {
      //   if (err) {
      //     console.error(err);
      //     return;
      //   } else {
      //     const newfile = {
      //       uuid: file.uuid,
      //       src,
      //       name: file.filedata.name,
      //       originalSize: file.filedata.size
      //     };

      //     console.log("compressed " + file.filedata.name );

      //   }
      // });
    } catch (e) {
      const newfile = {
        uuid: file.uuid,
        error: true,
        name: file.filedata.name,
      };

      setCompressedimages((prevFiles) => [...prevFiles, newfile]);
      console.log("error compressing " + file.filedata.name);

      // setError(true);
      console.log(e);
    }
    // });
  }

  //* loop Through The Array And Check if the file has been converterd already
  //? If the file is new then convert And Update New File
  //! If the file has already been converted avoid converting the files again (incase of a rerender).
  useEffect(() => {
    function ConvertAndUpdateNewFiles() {
      for (const file of UploadedFiles) {
        const checkForID = (obj) => obj.uuid === file.uuid;

        console.log(file);
        // if (ConvertedFileData.some(checkForID)) {
        //   console.log("data exists for" + file.filedata.name);
        // } else {
        convertAndUpdate(file);
        // }
      }
    }

    ConvertAndUpdateNewFiles();
  }, [UploadedFiles]);

  //? Set Loading to true if the UploadedFiles and ConvertedFileData is not equal
  //   useEffect(() => {
  //     SyncLoadingState({
  //       arg1: UploadedFiles.length,
  //       arg2: ConvertedFileData.length,
  //       setLoading,
  //     });
  //   }, [UploadedFiles, ConvertedFileData]);

  //* Triggers Download of Zip on 'Download All as zip' button click
  //   useEffect(() => {
  //     if (zipStatus) {
  //       downloadZipofimages(ConvertedFileData);

  //       setTimeout(() => {
  //         setZipStatus(false);
  //       }, 500);
  //     }
  //   }, [zipStatus]);
  return (
    <>
      {Compressedimages.map((file) => (
        <CompressedImageListitem key={file.uuid} file={file} />
      ))}

      {/* // {loading ? (
    //   <Loading num={UploadedFiles.length} />
    // ) : (
    //     Compressedimages.map((file) => (
    //     <CompressedImageListitem key={file.uuid} file={file} />
    //   ))
    // )} */}
    </>
  );
};

export default ListofCompressedimages;
