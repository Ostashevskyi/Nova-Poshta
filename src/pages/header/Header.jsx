import HeaderNav from "./HeaderNav/HeaderNav";

import HeaderTitle from "./HeaderTitle/HeaderTitle";

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
