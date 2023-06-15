import "./converterdescription.css";

const ConverterDescription = ({ fromext, toext }) => {
  return (
    <div className="converter-description">
      <div className="container">
        <h1>
          Convert {fromext.toUpperCase()} to {toext.toUpperCase()}
        </h1>
        <p>
          Simply Drag and Drop your {fromext.toUpperCase()} file and your
          {toext.toUpperCase()} file is ready to download.
        </p>
      </div>
    </div>
  );
};

export default ConverterDescription;
