import { useState } from "react";
import { useEffect } from "react";
import React, { useMemo } from "react";

import { useParams } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";
import Header from "src/components/Header/Header";
import { useNavigate } from "react-router-dom";

import "./App.css";

import i18n from "./utils/n18";
import { themes } from "./utils/themes";

function App() {
  const [isLight, setIsLight] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.getItem("isLight") === null
      ? setIsLight("true")
      : setIsLight(localStorage.getItem("isLight"));
  }, []);

  const [theme, setTheme] = useState(null);

  useMemo(() => {
    setTheme(isLight === "true" ? themes.light : themes.dark);
  }, [isLight]);

  const { lng } = useParams();

  useEffect(() => {
    i18n.changeLanguage(lng);
  }, [lng]);

  useEffect(() => {
    navigate("/en", { replace: true });
  }, []);

  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <Header setterTheme={setIsLight} />
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
