import React, { useMemo, useState } from "react";
import i18n from "src/utils/n18";
import flagUA from "/images/icons/ua.svg";
import flagUS from "/images/icons/us.svg";
import { Link, useParams } from "react-router-dom";
import styles from "src/components/Header/HeaderNav/NavigationEl/navigationEl.module.css";

const LanguageButton = ({ country }) => {
  //   const replace = () => {
  //     const url = window.location.pathname;
  //     const splited = url
  //       .split("/")
  //       .filter((el) => el !== "en" && el !== "ua" && el !== "")
  //       .join();
  //     return splited;
  //   };

  const countries = {
    ua: flagUA,
    us: flagUS,
  };

  return (
    <div className={styles.flag} onClick={() => i18n.changeLanguage(country)}>
      <Link to={localStorage.getItem("i18nextLng")}>
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
