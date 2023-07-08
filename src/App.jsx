import { useState } from "react";
import React, { useMemo } from "react";

import Header from "src/components/Header/Header";
import { ThemeProvider } from "@emotion/react";

import "./App.css";

import { themes } from "./utils/themes";
import { Outlet, useParams } from "react-router-dom";
import i18n from "./utils/n18";

function App() {
  const [isLight, setIsLight] = useState(
    localStorage.getItem("isLight") || localStorage.getItem("isLight") === null
  );

  const [theme, setTheme] = useState(null);

  useMemo(() => {
    setTheme(isLight === "true" ? themes.light : themes.dark);
  }, [isLight]);

  const { lng } = useParams();

  useMemo(() => {
    i18n.changeLanguage(lng);
  }, [i18n.language, window.location.href]);

  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <Header setterTheme={setIsLight} />
        <Outlet />
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;

{
  /* <Routes>
          <Route path={`/Nova-Poshta/:lng`} element={<SearchPage />} />
          <Route
            path={`/Nova-Poshta/:lng/delivery-price`}
            element={<PricePage />}
          />
          <Route
            path={`Nova-Poshta/:lng/tracking-delivery`}
            element={<TrackingPage />}
          ></Route>
        </Routes> */
}
