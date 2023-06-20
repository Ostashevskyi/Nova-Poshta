import React from "react";

import styles from "src/pages/PricePage/pricePage.module.css";

import { useTranslation } from "react-i18next";

const PrintCost = ({ error, price }) => {
  const { t } = useTranslation(["common"]);
  return price > 0 && !error ? (
    <h2>
      {t("common:estm_price")}: {price} UAH
    </h2>
  ) : (
    <h2 className={styles.error}>{error}</h2>
  );
};

export default PrintCost;
