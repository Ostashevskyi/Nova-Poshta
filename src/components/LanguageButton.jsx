import React from "react";

import i18n from "src/utils/n18";
import { Link, useLocation } from "react-router-dom";
import styles from "src/components/Header/HeaderNav/NavigationEl/navigationEl.module.css";

import flagUA from "/images/icons/ua.svg";
import flagUS from "/images/icons/us.svg";

const LanguageButton = ({ country }) => {
  const location = useLocation();

  const countries = {
    ua: flagUA,
    us: flagUS,
  };

  return (
    <div className={styles.flag} onClick={() => i18n.changeLanguage(country)}>
      <Link to={location.pathname.replace(i18n.language, country)}>
        <img
          src={country === "ua" ? countries.ua : countries.us}
          alt="us_flag"
          className={styles.flag}
        />
      </Link>
    </div>
  );
};

export default LanguageButton;
