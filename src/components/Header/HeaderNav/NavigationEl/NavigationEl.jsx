import { useState, useMemo } from "react";

import { Link, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import BurgerMenu from "src/components/BurgerMenu";
import SwitchModeButton from "src/components/SwitchModeButton";

import styles from "./navigationEl.module.css";
import LanguageButton from "src/components/LanguageButton";

const NavigationEl = ({ setterTheme }) => {
  const [isClicked, setIsCliked] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const { t, i18n } = useTranslation(["header"]);

  const updateMenu = () => {
    if (!isClicked || isClicked) {
      setIsVisible(!isVisible);
      setIsCliked(!isClicked);
      document.body.classList.toggle(styles.disabled);
    }
  };

  const getLanguage = () => {
    return i18n.language;
  };

  document.querySelectorAll(`.${styles.link_block}`).forEach(function (elem) {
    elem.addEventListener("click", updateMenu);
  });

  return (
    <>
      <div
        className={`${styles.navbar} ${
          isVisible ? styles.navbarVisible : styles.navbarHidden
        }`}
      >
        <div className={styles.link_block}>
          <Link to={`/${getLanguage()}`}>{t("find_department")}</Link>
        </div>
        <div className={styles.link_block}>
          <Link to={`/${getLanguage()}/delivery-price`}>
            {t("delivery_price")}
          </Link>
        </div>
        <div className={styles.link_block}>
          <Link to={`/${getLanguage()}/delivery-tracking`}>
            {t("delivery_tracking")}
          </Link>
        </div>
        <div className={styles.change_language_btns}>
          <LanguageButton country="en" />
          <LanguageButton country="ua" />
        </div>

        <SwitchModeButton setterTheme={setterTheme} />
      </div>
      <BurgerMenu
        cls={styles.burgerMenu}
        onClick={updateMenu}
        isClicked={isClicked}
        clsActive={styles.active}
        clsDisable={styles.disable}
      />
    </>
  );
};

export default NavigationEl;
