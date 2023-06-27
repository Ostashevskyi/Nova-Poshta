import { useState } from "react";
import React, { useMemo } from "react";

import { Routes, Route } from "react-router-dom";
import Header from "src/components/Header/Header";
import { ThemeProvider, useTheme } from "@emotion/react";

import SearchPage from "./pages/Home/SearchPage";
import PricePage from "./pages/PricePage/PricePage";
import TrackingPage from "./pages/TrackingPage/TrackingPage";

import "./App.css";

import { themes } from "./utils/themes";

function App() {
  const [isLight, setIsLight] = useState(
    localStorage.getItem("isLight") || localStorage.getItem("isLight") === null
  );

  const [theme, setTheme] = useState(null);

  useMemo(() => {
    setTheme(isLight === "true" ? themes.light : themes.dark);
  }, [isLight]);

  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <Header setter={setIsLight} />
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
