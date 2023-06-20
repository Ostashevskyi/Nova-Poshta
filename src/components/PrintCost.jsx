import React from "react";

import styles from "src/pages/PricePage/pricePage.module.css";

export const PrintCost = ({ error, price }) => {
  return price > 0 && !error ? (
    <h2>Estimated Price is: {price} UAH</h2>
  ) : (
    <h2 className={styles.error}>{error}</h2>
  );
};
