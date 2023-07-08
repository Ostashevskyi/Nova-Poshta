import { Link, useParams } from "react-router-dom";

import styles from "./headerTitle.module.css";
import { useState, useMemo, useEffect } from "react";
import i18n from "src/utils/n18";

function HeaderTitle() {
  return (
    <div className={styles.header__title}>
      <div className={styles.logo}>
        <img src="/images/logo.png" alt="logo"></img>
      </div>
      <div>
        <Link to={`/Nova-Poshta/lng`}>
          <h1>Nova Poshta Info</h1>
        </Link>
      </div>
    </div>
  );
}

export default HeaderTitle;
