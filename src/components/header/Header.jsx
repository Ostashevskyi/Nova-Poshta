import HeaderTitle from "./HeaderTitle/HeaderTitle";
import HeaderNav from "./HeaderNav/HeaderNav";
import styles from "./header.module.css";

function Header() {
  return (
    <div className={styles.header}>
      <HeaderTitle />
      <HeaderNav />
    </div>
  );
}

export default Header;
