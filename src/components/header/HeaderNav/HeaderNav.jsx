import NavigationEl from "./NavigationEl/NavigationEl";
import styles from "./headerNav.module.css";

function HeaderNav() {
  return (
    <ul className={styles.navigationEl}>
      <NavigationEl />
    </ul>
  );
}

export default HeaderNav;
