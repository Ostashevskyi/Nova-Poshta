import { useState } from "react";

import { Link } from "react-router-dom";
import BurgerMenu from "src/components/BurgerMenu";

import styles from "./navigationEl.module.css";

function NavigationEl() {
  const [isClicked, setIsCliked] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const updateMenu = () => {
    if (!isClicked || isClicked) {
      setIsVisible(!isVisible);
      setIsCliked(!isClicked);
      document.body.classList.toggle(styles.disabled);
    }
  };

  document.querySelectorAll(`.${styles.link_block}`).forEach(function (elem) {
    elem.addEventListener("click", updateMenu);
  });

  return (
    <>
      <div
        className={`${styles.navbar} ${
          isVisible ? styles.navbarVisible : styles.navbarHidden
        }`}
      >
        <div className={styles.link_block}>
          <Link to="/Nova-Poshta/">Find department</Link>
        </div>
        <div className={styles.link_block}>
          <Link to="/Nova-Poshta/delivery-price">Delivery Price</Link>
        </div>
        <div className={styles.link_block}>
          <Link to="/Nova-Poshta/tracking-delivery">Delivery Tracking</Link>
        </div>
      </div>
      <BurgerMenu
        cls={styles.burgerMenu}
        onClick={updateMenu}
        isClicked={isClicked}
        clsActive={styles.active}
        clsDisable={styles.disable}
      />
    </>
  );
}

export default NavigationEl;
