import React, { forwardRef, useState, useImperativeHandle } from "react";

import Switch from "@mui/material/Switch";
import { useTranslation } from "react-i18next";
import styles from "src/components/Header/HeaderNav/NavigationEl/navigationEl.module.css";

const SwitchModeButton = forwardRef(({ getThemeState }, ref) => {
  const [isLight, setIsLight] = useState(true);
  const { t } = useTranslation(["header"]);

  useImperativeHandle(ref, () => ({
    getTheme: () => {
      return isLight;
    },
  }));

  return (
    <div className={styles.mode_button}>
      <h5>{t("header:light")}</h5>
      <Switch
        sx={{ display: "flex" }}
        color="default"
        onClick={() => {
          setIsLight(!isLight);
          getThemeState();
          isLight
            ? document.body.classList.add(styles.dark_content)
            : document.body.classList.remove(styles.dark_content);
        }}
      />
      <h5>{t("header:dark")}</h5>
    </div>
  );
});

export default SwitchModeButton;
