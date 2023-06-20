import { useState } from "react";

import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import BurgerMenu from "src/components/BurgerMenu";

import styles from "./navigationEl.module.css";

import Flag from "react-world-flags";

function NavigationEl() {
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

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
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
          <Link to="/Nova-Poshta/">{t("find_department")}</Link>
        </div>
        <div className={styles.link_block}>
          <Link to="/Nova-Poshta/delivery-price">{t("delivery_price")}</Link>
        </div>
        <div className={styles.link_block}>
          <Link to="/Nova-Poshta/tracking-delivery">
            {t("delivery_tracking")}
          </Link>
        </div>
        <div className={styles.change_language_btns}>
          <Flag
            code="gb"
            className={styles.flags}
            onClick={() => changeLanguage("en")}
          />
          <Flag
            code="ua"
            className={styles.flags}
            onClick={() => changeLanguage("ua")}
          />
        </div>
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
}

export default NavigationEl;
