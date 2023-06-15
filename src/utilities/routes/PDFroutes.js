import { lazy, Suspense } from "react";
import { Route } from "react-router-dom";

import GlobalLoader from "./components/GlobalLoader/GlobalLoader";

const PDFroutes = () => {
  const ImageConverter = lazy(() => import("./pages/dynamic/ImageConverter"));

  return (
    <>
      
      <Route
        exact
        path="/image-to-pdf"
        element={
          <Suspense fallback={<GlobalLoader />}>
            <ImageConverter />
          </Suspense>
        }
      />


    </>
  );
};

export default PDFroutes;
