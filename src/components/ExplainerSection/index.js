import "./exp.css";

const ExplainerSection = () => {
  return (
    <div className="explainer container">
      <h1 style={{ textAlign: "center" }}>A Quick explanation</h1>

      <div className="card-grid-three-col">
        <div className="exp-card styled-corner">
          <h1>Step One</h1>

          <p>
            Click the Select Files button or, Simply Drag and Drop your files.
          </p>
        </div>

        <div className="exp-card styled-corner">
          <h1>Step Two</h1>

          <p>
            Wait for the process to complete and click on the "Download" button
            to download the file directly.
          </p>
        </div>

        <div className="exp-card styled-corner">
          <h1>Step Three (Optional) </h1>
          <p>
            If you want to download all files inside a Zip, Click on the
            "Download All as Zip" button.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ExplainerSection;
