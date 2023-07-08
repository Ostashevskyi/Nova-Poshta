import HeaderNav from "src/components/Header/HeaderNav/HeaderNav";
import HeaderTitle from "src/components/Header/HeaderTitle/HeaderTitle";

import styles from "./header.module.css";

const Header = ({ setterTheme }) => {
  return (
    <div className={styles.header}>
      <HeaderTitle />
      <HeaderNav setterTheme={setterTheme} />
    </div>
  );
};

export default Header;
