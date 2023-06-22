import React from "react";
import { useRef, useState } from "react";

import { ThemeProvider } from "@emotion/react";
import { Routes, Route } from "react-router-dom";
import Header from "src/components/Header/Header";

import SearchPage from "./pages/Home/SearchPage";
import PricePage from "./pages/PricePage/PricePage";
import TrackingPage from "./pages/TrackingPage/TrackingPage";

import "./App.css";

import { themes } from "./utils/themes";

function App() {
  const themeRef = useRef();

  const [isDark, setIsDark] = useState("");

  const getThemeState = () => {
    const themeState = themeRef.current.getTheme();
    setIsDark(themeState);
  };

  return (
    <React.Fragment>
      <ThemeProvider theme={isDark ? themes.dark : themes.light}>
        <Header ref={themeRef} getThemeState={getThemeState} />
        <Routes>
          <Route path="Nova-Poshta/" element={<SearchPage />} />
          <Route path="/Nova-Poshta/delivery-price" element={<PricePage />} />
          <Route
            path="/Nova-Poshta/tracking-delivery"
            element={<TrackingPage />}
          ></Route>
        </Routes>
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
