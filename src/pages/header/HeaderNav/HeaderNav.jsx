import NavigationEl from "./NavigationEl/NavigationEl";

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
