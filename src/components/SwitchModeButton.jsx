import React, { useMemo } from "react";

import Switch from "@mui/material/Switch";
import { useTranslation } from "react-i18next";
import styles from "src/components/Header/HeaderNav/NavigationEl/navigationEl.module.css";

const SwitchModeButton = ({ setterTheme }) => {
  const { t } = useTranslation(["header"]);
  const isLight = localStorage.getItem("isLight");

  const changeThemeClick = () => {
    if (isLight === "true" || isLight === null) {
      localStorage.setItem("isLight", false);
      document.body.classList.add(styles.dark_content);
      setterTheme(localStorage.getItem("isLight"));
    } else {
      localStorage.setItem("isLight", true);
      document.body.classList.remove(styles.dark_content);
      setterTheme(localStorage.getItem("isLight"));
    }
  };

  useMemo(() => {
    if (isLight === "true" || isLight === null) {
      document.body.classList.remove(styles.dark_content);
      setterTheme(localStorage.getItem("isLight"));
    } else {
      document.body.classList.add(styles.dark_content);
      setterTheme(localStorage.getItem("isLight"));
    }
  }, []);

  return (
    <div className={styles.mode_button}>
      <h5>{t("header:light")}</h5>
      <Switch
        sx={{ display: "flex" }}
        color="default"
        checked={localStorage.getItem("isLight") === "false"}
        onClick={() => {
          changeThemeClick();
        }}
      />
      <h5>{t("header:dark")}</h5>
    </div>
  );
};

export default SwitchModeButton;
