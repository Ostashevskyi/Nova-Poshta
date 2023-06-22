import { forwardRef } from "react";

import NavigationEl from "src/components/Header/HeaderNav/NavigationEl/NavigationEl";

import styles from "./headerNav.module.css";

const HeaderNav = forwardRef(({ getThemeState }, ref) => {
  return (
    <>
      <div className={styles.navigationEl}>
        <NavigationEl getThemeState={getThemeState} ref={ref} />
      </div>
    </>
  );
});

export default HeaderNav;
