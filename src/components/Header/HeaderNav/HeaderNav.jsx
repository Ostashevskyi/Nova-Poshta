import NavigationEl from "src/components/Header/HeaderNav/NavigationEl/NavigationEl";

import styles from "./headerNav.module.css";

function HeaderNav() {
  return (
    <>
      <div className={styles.navigationEl}>
        <NavigationEl />
      </div>
    </>
  );
}

export default HeaderNav;
