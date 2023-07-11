import { Link } from "react-router-dom";

import styles from "./headerTitle.module.css";
import i18n from "src/utils/n18";

function HeaderTitle() {

  const getLanguage = () => {
    return i18n.language;
  };

  return (
    <div className={styles.header__title}>
      <div className={styles.logo}>
        <img src="/images/logo.png" alt="logo"></img>
      </div>
      <div>
        <Link to={`/${getLanguage()}`}>
          <h1>Nova Poshta Info</h1>
        </Link>
      </div>
    </div>
  );
}

export default HeaderTitle;
