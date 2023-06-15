import { useState } from "react";
import { useLocation } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

import { preventDefaultAndPropagation } from "../../utilities/functions";
import { FileContext } from "../../utilities/Context";

import HelmetComponent from "../../components/Helmet";
import ConverterDescription from "../../components/ConverterDescription";
import FileInput from "../../components/FileInput";
// import ListOfConvertedFiles from "../../components/ListOfConvertedFiles";
import ImageCompressComponent from "../../components/ImageCompressComponent";
import Disclosure from "../../components/Disclosure";
import ExplainerSection from "../../components/ExplainerSection";
import ConvertFromAndToLinks from "../../components/ConvertFromAndToLinks";

const Compress = (props) => {
  const { pathname } = useLocation();

  // Extract route, 'from' extension and 'to' extension from location pathname
  // eg: if user visits /png-to-jpg. Below code will extract

  // //   png-to-jpg as route
  // const route = pathname.toString().split("/")[1];

  // //   png as  Convert 'from' extension(png)
  // const fromext = route.toString().split("-")[0];
  // //   jpg as  Convert 'to' extension(jpg)
  // const toext = route.toString().split("-")[2];

  // const additionalProps = {
  //   fromext,
  //   toext,
  //   route,
  // };

  // Start State Declaration
  const [UploadedFiles, setUploadedFiles] = useState([]);
  const [CompressionLevel, setCompressionLevel] = useState(50);
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

  // Generate title and description of the page for SEO.
  // const pageURL = `${window.domain}/${route}`;
  // const pageTitle = `${fromext.toUpperCase()} to ${toext.toUpperCase()} Converter`;
  // const pageDesc = `Simply Drag your ${fromext} file and your ${toext} is ready to download`;

  function handleFilesDrop(event) {
    preventDefaultAndPropagation(event);

    const droppedfiles = event.dataTransfer.files;

    let newfilearr = [];

    if (droppedfiles.length) {
      for (const file of droppedfiles) {
        newfilearr = [...newfilearr, { uuid: uuidv4(), filedata: file }];
      }

      setUploadedFiles((currentFiles) => [...currentFiles, ...newfilearr]);
      console.log("file updated to UploadedFiles state");
    }
  }

  return (
    <div
      className="converter-container"
      onDrop={handleFilesDrop}
      onDragOver={preventDefaultAndPropagation}
    >
      {/* <HelmetComponent
        pageTitle={pageTitle}
        pageURL={pageURL}
        pageDesc={pageDesc}
      /> */}

      {/* <ConverterDescription {...additionalProps} /> */}

      <FileInput setUploadedFiles={setUploadedFiles} />

      <FileContext.Provider value={{ ...states }}>

        <ImageCompressComponent  />

        {/* <ListOfConvertedFiles {...props} {...additionalProps} /> */}
      </FileContext.Provider>

      <Disclosure />
      {/* <ExplainerSection {...props} /> */}
      {/* <ConvertFromAndToLinks ext={toext} /> */}
    </div>
  );
};

export default Compress;
