import { forwardRef } from "react";

import HeaderNav from "src/components/Header/HeaderNav/HeaderNav";
import HeaderTitle from "src/components/Header/HeaderTitle/HeaderTitle";

import styles from "./header.module.css";

const Header = forwardRef(({ getThemeState }, ref) => {
  return (
    <div className={styles.header}>
      <HeaderTitle />
      <HeaderNav getThemeState={getThemeState} ref={ref} />
    </div>
  );
});

export default Header;
