import HeaderNav from "src/components/Header/HeaderNav/HeaderNav";
import HeaderTitle from "src/components/Header/HeaderTitle/HeaderTitle";

import styles from "./header.module.css";

const Header = ({ setter }) => {
  return (
    <div className={styles.header}>
      <HeaderTitle />
      <HeaderNav setter={setter} />
    </div>
  );
};

export default Header;
