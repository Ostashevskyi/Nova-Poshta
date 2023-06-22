import { forwardRef, useState } from "react";

import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import BurgerMenu from "src/components/BurgerMenu";
import SwitchModeButton from "src/components/SwitchModeButton";

import styles from "./navigationEl.module.css";

const NavigationEl = forwardRef(({ getThemeState }, ref) => {
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
          <img
            src="/images/gb_flag.png"
            alt="gb_flag"
            className={styles.flag}
            onClick={() => changeLanguage("en")}
          />
          <img
            src="/images/ua_flag.png"
            alt="ua_flag"
            className={styles.flag}
            onClick={() => changeLanguage("ua")}
          />
        </div>

        <SwitchModeButton ref={ref} getThemeState={getThemeState} />
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
});

export default NavigationEl;
