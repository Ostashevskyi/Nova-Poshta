import React from "react";

import styles from "src/pages/PricePage/pricePage.module.css";

export const PrintCost = (props) => {
  return props.price > 0 && !props.error ? (
    <h2>Estimated Price is: {props.price} UAH</h2>
  ) : (
    <h2 className={styles.error}>{props.error}</h2>
  );
};
