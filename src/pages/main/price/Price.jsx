import { useDispatch, useSelector } from "react-redux";
import styles from "./price.module.css";
import { Button, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { fetchCityRef, fetchPrice } from "../../../store/priceSlice";
import { useInput } from "src/hooks/useInput";
import InputTextField from "src/components/InputTextField";
import FilledButton from "src/components/FilledButton";
import { REGEX } from "src/constants";

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

  const { citySenderRef, cityRecipientRef, price } = useSelector(
    (state) => state.prices
  );

  useEffect(() => {
    dispatch(
      fetchPrice({ citySenderRef, cityRecipientRef, mailWeight, assessedCost })
    );
  }, [citySenderRef, cityRecipientRef]);

  const handleClick = () => {
    dispatch(fetchCityRef({ citySender }));
    dispatch(fetchCityRef({ cityRecipient }));
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

        {status === "loading" && (
          <div className={styles.circular}>
            <CircularProgress />
          </div>
        )}
        {!!price && <h2>Estimated Price is: {price} UAH</h2>}
      </div>
    </div>
  );
}

export default Price;
