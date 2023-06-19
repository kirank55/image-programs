import React, { useEffect, useRef } from "react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";
import domtoimage from "dom-to-image";

import { preventDefaultAndPropagation } from "../../utilities/functions";
import { FileContext } from "../../utilities/Context";

import OneFileInput from "../../components/FileInput/OneFileInput";
import ImageCompressComponent from "../../components/ImageCompressComponent";
import Disclosure from "../../components/Disclosure";
import "./Edit/editor.css";

// import Slider from './Slider'
// import SidebarItem from './SidebarItem'

const DEFAULT_OPTIONS = [
  {
    name: "Brightness",
    property: "brightness",
    value: 100,
    range: {
      min: 0,
      max: 200,
    },
    unit: "%",
  },
  {
    name: "Contrast",
    property: "contrast",
    value: 100,
    range: {
      min: 0,
      max: 200,
    },
    unit: "%",
  },
  {
    name: "Saturation",
    property: "saturate",
    value: 100,
    range: {
      min: 0,
      max: 200,
    },
    unit: "%",
  },
  {
    name: "Grayscale",
    property: "grayscale",
    value: 0,
    range: {
      min: 0,
      max: 100,
    },
    unit: "%",
  },
  {
    name: "Sepia",
    property: "sepia",
    value: 0,
    range: {
      min: 0,
      max: 100,
    },
    unit: "%",
  },
  {
    name: "Hue Rotate",
    property: "hue-rotate",
    value: 0,
    range: {
      min: 0,
      max: 360,
    },
    unit: "deg",
  },
  {
    name: "Blur",
    property: "blur",
    value: 0,
    range: {
      min: 0,
      max: 20,
    },
    unit: "px",
  },
];

const EditImage = ({ UploadedFiles }) => {
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(0);
  const [options, setOptions] = useState(DEFAULT_OPTIONS);
  const selectedOption = options[selectedOptionIndex];

  function handleSliderChange({ target }) {
    setOptions((prevOptions) => {
      return prevOptions.map((option, index) => {
        if (index !== selectedOptionIndex) return option;
        return { ...option, value: target.value };
      });
    });
  }

  // console.log(UploadedFiles);
  // console.log(UploadedFiles[0].filedata);
  // console.log(URL.createObjectURL(UploadedFiles[0].filedata));

  function getImageStyle() {
    const filters = options.map((option) => {
      return `${option.property}(${option.value}${option.unit})`;
    });

    return { filter: filters.join(" ") };
  }

  const imagediv = useRef(null);

  useEffect(() => {
    const url = URL.createObjectURL(UploadedFiles[0].filedata);

    if (imagediv && imagediv.current) {
      imagediv.current.style.backgroundImage = `url(${url})`;
    }
  }, [imagediv]);

  async function DownloadImage() {

    if (imagediv && imagediv.current) {
      // console.log(imagediv.current);

      const htmlnode = imagediv.current
      const htmlToImage = window.htmlToImage 

      // const downloadImage = async () => {
        // }
        
        const dataUrl = await htmlToImage.toPng(htmlnode);
        console.log(dataUrl)
        
        const link = document.createElement('a');
        link.download = 'edited-image.png';
        link.href = dataUrl;

        link.click();

      };






  }

  return (
    <div className="editor-container">
      <div ref={imagediv} className="main-image" style={getImageStyle()} />

      <div className="sidebar">
        {options.map((option, index) => {
          return (
            <button
              key={index}
              name={option.name}
              className={`med-link sidebar-item ${index === selectedOptionIndex ? "active" : ""
                }`}
              onClick={() => setSelectedOptionIndex(index)}
            >
              {option.name}
            </button>
          );
        })}
      </div>

      <div className="slider-container">
        <input
          type="range"
          className="slider"
          min={selectedOption.range.min}
          max={selectedOption.range.max}
          value={selectedOption.value}
          onChange={handleSliderChange}
        />

        <button
          name="Download"
          className={`med-link sidebar-item active`}
          onClick={DownloadImage}
          style={{ marginInline: "auto" }}
        >
          Download
        </button>
        {/* <input
        type="range"
        className="slider"
        min={min}
        max={max}
        value={value}
        onChange={handleChange}
      /> */}
      </div>
    </div>
  );
};
const Editor = () => {
  const navigate = useNavigate();

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

  // useEffect(() => {
  //     if (UploadedFiles) {
  //         console.log(UploadedFiles);
  //     }

  //     // if (UploadedFiles.length === 1) {
  //     //     navigate("/login");
  //     // }

  //     //   if (authFails)
  //     // }
  // }, [UploadedFiles]);

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

      {/* <FileInput setUploadedFiles={setUploadedFiles} /> */}

      {UploadedFiles.length === 0 ? (
        <OneFileInput setUploadedFiles={setUploadedFiles} />
      ) : (
        <EditImage UploadedFiles={UploadedFiles} />
      )}

      {/* <FileContext.Provider value={{ ...states }}>
    
            <ImageCompressComponent  />
    
          </FileContext.Provider> */}

      <Disclosure />
      {/* <ExplainerSection {...props} /> */}
      {/* <ConvertFromAndToLinks ext={toext} /> */}
    </div>
  );
};

export default Editor;
