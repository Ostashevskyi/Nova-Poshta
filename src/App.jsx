import { useState } from "react";
import React, { useMemo } from "react";

import Header from "src/components/Header/Header";
import { ThemeProvider } from "@emotion/react";

import "./App.css";

import { themes } from "./utils/themes";
import { Outlet, Routes, useParams, Route } from "react-router-dom";
import i18n from "./utils/n18";
import { useEffect } from "react";

function App() {
  const [isLight, setIsLight] = useState(
    localStorage.getItem("isLight") || localStorage.getItem("isLight") === null
  );

  const [theme, setTheme] = useState(null);

  useMemo(() => {
    setTheme(isLight === "true" ? themes.light : themes.dark);
  }, [isLight]);

  const { lng } = useParams();

  useEffect(() => {
    i18n.changeLanguage(lng);
  }, [lng, window.location.pathname]);

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
