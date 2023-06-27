import NavigationEl from "src/components/Header/HeaderNav/NavigationEl/NavigationEl";

import styles from "./headerNav.module.css";

const HeaderNav = ({ setter }) => {
  return (
    <>
      <div className={styles.navigationEl}>
        <NavigationEl setter={setter} />
      </div>
    </>
  );
};

export default HeaderNav;
