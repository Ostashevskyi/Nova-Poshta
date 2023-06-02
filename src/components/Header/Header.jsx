import HeaderNav from "src/components/Header/HeaderNav/HeaderNav";

import HeaderTitle from "src/components/Header/HeaderTitle/HeaderTitle";

import styles from "./header.module.css";

export default Header;
function Header() {
  return (
    <div className={styles.header}>
      <HeaderTitle />
      <HeaderNav />
    </div>
  );
}
