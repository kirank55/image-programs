import { Link } from "react-router-dom";
import { imageConverterRoutes } from "../../utilities/routes";

const DynamicLink = ({ route }) => (
  <h3>
    <Link className="med-link styled-corner-small" to={"/" + route}>
      {route.toUpperCase().replace(/-/g, " ")}
    </Link>
  </h3>
);

const ConvertToLinks = ({ ext }) => {
  return (
    <div className="desc-one">
      <h2 style={{ textAlign: "center" }}>Convert To {ext.toUpperCase()} </h2>

      <div className="card-grid-two-col">
        {imageConverterRoutes.map(
          (route) =>
            route.toString().split("-")[2] === ext && (
              <DynamicLink key={route} route={route} />
            )
        )}
      </div>
    </div>
  );
};

const ConvertFromLinks = ({ ext }) => {
  return (
    <div className="desc-two">
      <h2 style={{ textAlign: "center" }}>Convert From {ext.toUpperCase()}</h2>
      <div className="card-grid-two-col">
        {imageConverterRoutes.map(
          (route) =>
            route.toString().split("-")[0] === ext && (
              <DynamicLink key={route} route={route} />
            )
        )}
      </div>
    </div>
  );
};

const ConvertFromAndToLinks = ({ ext }) => {
  const Find_Routes_That_Convert_To_Ext = imageConverterRoutes.find(
    (route) => route.split("-")[2] === ext
  );

  const Find_Routes_That_Convert_From_Ext = imageConverterRoutes.find(
    (route) => route.split("-")[0] === ext
  );

  return (
    <div
      className="desc-content container"
      style={{ maxWidth: "900px", marginTop: "5em" }}
    >
      {Find_Routes_That_Convert_To_Ext && <ConvertToLinks ext={ext} />}

      {Find_Routes_That_Convert_From_Ext && <ConvertFromLinks ext={ext} />}
    </div>
  );
};

export default ConvertFromAndToLinks;
