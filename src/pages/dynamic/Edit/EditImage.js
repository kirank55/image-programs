import React, { useState, useEffect, useRef } from "react";
import { DEFAULT_OPTIONS } from "./options";


const EditImage = ({ UploadedFiles }) => {
    const [selectedOptionIndex, setSelectedOptionIndex] = useState(0);
    const [options, setOptions] = useState(DEFAULT_OPTIONS);
    const selectedOption = options[selectedOptionIndex];

    const imagediv = useRef(null);

    useEffect(() => {
        const url = URL.createObjectURL(UploadedFiles[0].filedata);

        if (imagediv && imagediv.current) {
            imagediv.current.style.backgroundImage = `url(${url})`;
        }
    }, [imagediv]);

    
    function getImageStyle() {
        const filters = options.map((option) => {
            return `${option.property}(${option.value}${option.unit})`;
        });

        return { filter: filters.join(" ") };
    }

    async function DownloadImage() {

        if (imagediv && imagediv.current) {

            const htmlnode = imagediv.current
            const htmlToImage = window.htmlToImage

            const dataUrl = await htmlToImage.toPng(htmlnode);
            console.log(dataUrl)

            const link = document.createElement('a');
            link.download = 'edited-image.png';
            link.href = dataUrl;

            link.click();

        };

    }

    function handleSliderChange({ target }) {
        setOptions((prevOptions) => {
            return prevOptions.map((option, index) => {
                if (index !== selectedOptionIndex) return option;
                return { ...option, value: target.value };
            });
        });
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

            </div>
        </div>
    );
};

export default EditImage