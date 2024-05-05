import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import GlobalLoader from "./components/GlobalLoader/GlobalLoader";
import ScrollToTopOnRouteChange from "./utilities/ScrollToTop";

import { imageConverterRoutes } from "./utilities/routes";

import "./app.css";

function App() {
  const Home = lazy(() => import("./pages/static/Home"));
  
  const Compress = lazy(() => import("./pages/dynamic/Compress"));
  const Editor = lazy(() => import("./pages/dynamic/Editor"));
  const Converter = lazy(() => import("./pages/dynamic/Converter"));
  const ImageConverter = lazy(() => import("./pages/dynamic/ImageConverter"));

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

        {/* image converter */}

        <Route
          exact
          path="/converter"
          element={
            <Suspense fallback={<GlobalLoader />}>
              <Converter />
            </Suspense>
          }
        />

        {/* image Editor */}

        <Route
          exact
          path="/editor"
          element={
            <Suspense fallback={<GlobalLoader />}>
              <Editor />
            </Suspense>
          }
        />

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
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
