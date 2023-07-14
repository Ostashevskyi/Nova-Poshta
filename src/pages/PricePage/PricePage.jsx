import { useCallback, useMemo, useEffect } from "react";

import Loader from "src/components/Loader";
import { REGEX } from "src/utils/constants";
import { useTranslation } from "react-i18next";
import PrintCost from "src/components/PrintCost";
import { fetchPrice } from "src/store/priceSlice";
import { resetPrice } from "src/store/priceSlice";
import useGetLanguage from "src/hooks/useGetLanguage";
import { useDispatch, useSelector } from "react-redux";
import FilledButton from "src/components/FilledButton";
import useInputTextField from "src/hooks/useInputTextField";

import styles from "./pricePage.module.css";

function PricePage() {
  const { t } = useTranslation(["pricePage", "common"]);

  const [citySender, inputCitySender] = useInputTextField({
    type: "text",
    style: { mb: 2, width: "100%" },
    label: t("common:city_sender"),
  });

  const [cityRecipient, inputCityResipient] = useInputTextField({
    type: "text",
    style: { mb: 2, width: "100%" },
    label: t("common:city_recipient"),
  });

  const [mailWeight, setMailWeight] = useInputTextField({
    type: "number",
    style: { mb: 2, width: "100%" },
    label: t("pricePage:weight"),
  });
  const [assessedCost, setAssessedCost] = useInputTextField({
    type: "number",
    style: { mb: 2, width: "100%" },
    label: t("pricePage:cost"),
  });
  const [language] = useGetLanguage();

  const dispatch = useDispatch();

  const { price, status, error } = useSelector((state) => state.prices);

  useEffect(() => {
    return () => {
      dispatch(resetPrice());
    };
  }, [dispatch]);

  const handleClick = useCallback(() => {
    dispatch(
      fetchPrice({ citySender, cityRecipient, mailWeight, assessedCost })
    );
  }, [citySender, cityRecipient, mailWeight, assessedCost]);

  const filledBtn = useMemo(() => {
    return (
      <FilledButton
        onClick={handleClick}
        disabled={
          !citySender.match(REGEX) ||
          !cityRecipient.match(REGEX) ||
          mailWeight <= 0 ||
          assessedCost <= 0
        }
      >
        {t("pricePage:send_info")}
      </FilledButton>
    );
  }, [citySender, cityRecipient, mailWeight, assessedCost, language]);

  return (
    <div className={styles.departments__block}>
      <h2>{t("pricePage:price_title")}</h2>
      <div className={styles.price__inputs}>
        {inputCitySender}
        {inputCityResipient}
        {setMailWeight}
        {setAssessedCost}
        {filledBtn}
        <Loader status={status} cls={styles.circular}>
          <PrintCost price={price} error={error} />
        </Loader>
      </div>
    </div>
  );
}

export default PricePage;
