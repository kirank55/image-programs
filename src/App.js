import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import GlobalLoader from "./components/GlobalLoader/GlobalLoader";
import ScrollToTopOnRouteChange from "./utilities/ScrollToTop";

import { imageConverterRoutes } from "./utilities/routes";

import "./app.css";

// change your domain here to update SEO tags.
window.domain = "https://" + window.location.host;

function App() {
  // Static pages
  const Home = lazy(() => import("./pages/static/Home"));
  
  // Dynamic pages
  const ImageConverter = lazy(() => import("./pages/dynamic/ImageConverter"));
  const Compress = lazy(() => import("./pages/dynamic/Compress"));
  const Editor = lazy(() => import("./pages/dynamic/Editor"));
  // const EditImage = lazy(() => import("./pages/dynamic/Editor"));

  return (
    <div className="App">
      <ScrollToTopOnRouteChange />

      <Header />

      <Routes>

        <Route
          exact
          path="/"
          element={
            <Suspense fallback={<GlobalLoader />}>
              <Home />
            </Suspense>
          }
        />


        {/* Dynamic pages */}
        {/* Array.map generates a List of react routes from the strings inside imageConverterRoutes array  */}
        {/* https://react.dev/learn/rendering-lists */}

        {imageConverterRoutes.map((route) => (
          <Route
            key={route}
            path={route}
            element={
              <Suspense fallback={<GlobalLoader />}>
                <ImageConverter />
              </Suspense>
            }
          />
        ))}


        {/* image compression */}

        <Route
          exact
          path="/compress"
          element={
            <Suspense fallback={<GlobalLoader />}>
              <Compress />
            </Suspense>
          }
        />
        


        <Route
          exact
          path="/editor"
          element={
            <Suspense fallback={<GlobalLoader />}>
              <Editor />
            </Suspense>
          }
        />
        {/* <Route
          exact
          path="/editor/edit-image"
          element={
            <Suspense fallback={<GlobalLoader />}>
              <EditImage />
            </Suspense>
          }
        /> */}
        


      </Routes>

      <Footer />
    </div>
  );
}

export default App;
