import { useCallback, useMemo, useState } from "react";

import Loader from "src/components/Loader";
import { REGEX } from "src/utils/constants";
import { useTranslation } from "react-i18next";
import { fetchPrice } from "src/store/priceSlice";
import { PrintCost } from "src/components/PrintCost";
import { useDispatch, useSelector } from "react-redux";
import FilledButton from "src/components/FilledButton";
import InputTextField from "src/components/InputTextField";

import styles from "./pricePage.module.css";

function PricePage() {
  const [citySender, setCitySender] = useState("");
  const [cityRecipient, setCityRecipient] = useState("");
  const [mailWeight, setMailWeight] = useState(0);
  const [assessedCost, setAssessedCost] = useState(0);

  const { t } = useTranslation(["pricePage", "common"]);

  const dispatch = useDispatch();

  const { price, status, error } = useSelector((state) => state.prices);

  const handleClick = useCallback(() => {
    dispatch(
      fetchPrice({ citySender, cityRecipient, mailWeight, assessedCost })
    );
  }, [citySender, cityRecipient, mailWeight, assessedCost]);

  const filledBtn = useMemo(() => {
    return (
      <FilledButton
        onClick={handleClick}
        text={t("pricePage:send_info")}
        disabled={
          !citySender.match(REGEX) ||
          !cityRecipient.match(REGEX) ||
          mailWeight <= 0 ||
          assessedCost <= 0
        }
      />
    );
  }, [citySender, cityRecipient, mailWeight, assessedCost]);

  return (
    <div className={styles.departments__block}>
      <h2>{t("pricePage:price_title")}</h2>
      <div className={styles.price__inputs}>
        <InputTextField
          style={{ mb: 2, width: "100%" }}
          value={citySender}
          onChange={(e) => setCitySender(e.target.value)}
          label={t("common:city_sender")}
        />
        <InputTextField
          style={{ mb: 2, width: "100%" }}
          value={cityRecipient}
          onChange={(e) => setCityRecipient(e.target.value)}
          label={t("common:city_recipient")}
        />
        <InputTextField
          style={{ mb: 2, width: "100%" }}
          type="number"
          label={t("pricePage:weight")}
          value={mailWeight}
          onChange={(e) => setMailWeight(e.target.value)}
        />
        <InputTextField
          style={{ mb: 2, width: "100%" }}
          type="number"
          label={t("pricePage:cost")}
          value={assessedCost}
          onChange={(e) => setAssessedCost(e.target.value)}
        />
        {filledBtn}
        <Loader
          status={status}
          activeFunc={<PrintCost price={price} error={error} />}
          cls={styles.circular}
        />
      </div>
    </div>
  );
}

export default PricePage;
