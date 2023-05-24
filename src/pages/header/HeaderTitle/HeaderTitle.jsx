import { Link } from "react-router-dom";
import styles from "./headerTitle.module.css";

function HeaderTitle() {
  return (
    <div className={styles.header__title}>
      <div className={styles.logo}>
        <img src="images/logo.png" alt="logo"></img>
      </div>
      <div>
        <Link to={"/Nova-Poshta/"}>
          <h1>Nova Poshta Info</h1>
        </Link>
      </div>
    </div>
  );
}

export default HeaderTitle;
