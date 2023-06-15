import "./loader.css";
const GlobalLoader = () => {
  const loadingContainer = {
    height: "200px",
    textAlign: "center",
    display: "flex",
  };
  const loadWrapStyles = {
    width: "100%",
    margin: "0 10px 10px 0",
    padding: "20px 20px 20px",
    borderRadius: "5px",
    textAlign: "center",
    backgroundColor: "#eee",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const lineStyles = {
    display: "inline-block",
    width: "15px",
    height: "15px",
    borderRadius: "15px",
    backgroundColor: "#000",
  };

  return (
    <>
      <div style={loadingContainer}>
        <div className="load-2" style={loadWrapStyles}>
          <div style={lineStyles} className="line"></div>
          <div style={lineStyles} className="line"></div>
          <div style={lineStyles} className="line"></div>
        </div>
      </div>
    </>
  );
};
export default GlobalLoader;
