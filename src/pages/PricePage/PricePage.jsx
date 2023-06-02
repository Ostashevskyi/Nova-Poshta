import { useCallback, useEffect, useMemo, useState } from "react";

import { REGEX } from "src/utils/constants";
import Loader from "src/components/Loader";
import { PrintCost } from "src/components/PrintCost";
import { useDispatch, useSelector } from "react-redux";
import FilledButton from "src/components/FilledButton";
import InputTextField from "src/components/InputTextField";

import styles from "./pricePage.module.css";

import { fetchPrice } from "src/store/priceSlice";

function PricePage() {
  const [citySender, setCitySender] = useState("");
  const [cityRecipient, setCityRecipient] = useState("");
  const [mailWeight, setMailWeight] = useState(0);
  const [assessedCost, setAssessedCost] = useState(0);

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
        text={"Send Info"}
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
      <h2>Price Calculator</h2>
      <div className={styles.price__inputs}>
        <InputTextField
          style={{ mb: 2, width: "100%" }}
          value={citySender}
          onChange={(e) => setCitySender(e.target.value)}
          label="City Sender"
        />
        <InputTextField
          style={{ mb: 2, width: "100%" }}
          value={cityRecipient}
          onChange={(e) => setCityRecipient(e.target.value)}
          label="City Recipient"
        />
        <InputTextField
          style={{ mb: 2, width: "100%" }}
          type="number"
          label="Mail Weight (kg)"
          value={mailWeight}
          onChange={(e) => setMailWeight(e.target.value)}
        />
        <InputTextField
          style={{ mb: 2, width: "100%" }}
          type="number"
          label="Assessed Cost (UAH)"
          value={assessedCost}
          onChange={(e) => setAssessedCost(e.target.value)}
        />
        {filledBtn}
        <Loader
          status={status}
          activeFunc={<PrintCost price={price} error={error} />}
          class={styles.circular}
        />
      </div>
    </div>
  );
}

export default PricePage;
