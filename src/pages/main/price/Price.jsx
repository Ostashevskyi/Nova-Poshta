import { useMemo } from "react";

import { REGEX } from "src/constants";
import Loader from "src/components/Loader";
import { useInput } from "src/hooks/useInput";
import { useDispatch, useSelector } from "react-redux";
import FilledButton from "src/components/FilledButton";
import InputTextField from "src/components/InputTextField";

import styles from "./price.module.css";

import { fetchCityRef, fetchPrice } from "../../../store/priceSlice";

function Price() {
  const setCitySender = useInput("");
  const citySender = setCitySender.value;

  const setCityRecipient = useInput("");
  const cityRecipient = setCityRecipient.value;

  const setMailWeight = useInput(0);
  const mailWeight = setMailWeight.value;

  const setAssessedCost = useInput(0);
  const assessedCost = setAssessedCost.value;

  const dispatch = useDispatch();

  const { citySenderRef, cityRecipientRef, price, priceStatus } = useSelector(
    (state) => state.prices
  );

  useMemo(() => {
    dispatch(
      fetchPrice({ citySenderRef, cityRecipientRef, mailWeight, assessedCost })
    );
  }, [citySenderRef, cityRecipientRef]);

  const handleClick = () => {
    dispatch(fetchCityRef({ citySender }));
    dispatch(fetchCityRef({ cityRecipient }));
  };

  const printCost = () => {
    return price > 0 && <h2>Estimated Price is: {price} UAH</h2>;
  };

  return (
    <div className={styles.departments__block}>
      <h2>Price Calculator</h2>
      <div className={styles.price__inputs}>
        <InputTextField
          style={{ mb: 2, width: "100%" }}
          data={citySender}
          value={setCitySender}
          label="City Sender"
        />
        <InputTextField
          style={{ mb: 2, width: "100%" }}
          data={cityRecipient}
          value={setCityRecipient}
          label="City Recipient"
        />
        <InputTextField
          style={{ mb: 2, width: "100%" }}
          type="number"
          label="Mail Weight (kg)"
          data={mailWeight}
          value={setMailWeight}
        />
        <InputTextField
          style={{ mb: 2, width: "100%" }}
          type="number"
          label="Mail Weight (kg)"
          data={assessedCost}
          value={setAssessedCost}
        />
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
        <Loader
          status={priceStatus}
          activeFunc={printCost}
          class={styles.circular}
        />
      </div>
    </div>
  );
}

export default Price;
