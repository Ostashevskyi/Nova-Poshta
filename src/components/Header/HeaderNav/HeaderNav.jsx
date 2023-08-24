import NavigationEl from "src/components/Header/HeaderNav/NavigationEl/NavigationEl";

import styles from "./headerNav.module.css";

const HeaderNav = ({ setterTheme }) => {
  return (
    <>
      <div className={styles.navigationEl}>
        <NavigationEl setterTheme={setterTheme} />
      </div>
    </>
  );
};

export default HeaderNav;
