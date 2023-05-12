import { useDispatch, useSelector } from "react-redux";
import styles from "./price.module.css";
import { Button, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { fetchCityRef, fetchPrice } from "../../../store/priceSlice";
import { REGEX } from "../../../constants/const";

function Price() {
  const [citySender, setCitySender] = useState("");
  const [cityRecipient, setCityRecipient] = useState("");
  const [mailWeight, setMailWeight] = useState(0);
  const [assessedCost, setAssessedCost] = useState(0);

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
    if (
      citySender &&
      cityRecipient &&
      mailWeight &&
      assessedCost &&
      REGEX.test(citySender) &&
      REGEX.test(cityRecipient)
    ) {
      dispatch(fetchCityRef({ citySender }));
      dispatch(fetchCityRef({ cityRecipient }));
    }
  };

  return (
    <div className={styles.departments__block}>
      <h2>Price Calculator</h2>
      <div className={styles.price__inputs}>
        <TextField
          fullWidth
          sx={{ mb: 2 }}
          label="City Sender"
          value={citySender}
          onChange={(e) => {
            setCitySender(e.target.value);
          }}
          error={!REGEX.test(citySender) && citySender.length !== 0}
          helperText={"Require only Ukrainian language"}
          required
        />
        <TextField
          fullWidth
          sx={{ mb: 2 }}
          label="City Recipient"
          value={cityRecipient}
          onChange={(e) => setCityRecipient(e.target.value)}
          error={!REGEX.test(cityRecipient) && cityRecipient.length !== 0}
          helperText={"Require only Ukrainian language"}
          required
        />
        <TextField
          fullWidth
          sx={{ mb: 2 }}
          type="number"
          label="Mail Weight (kg)"
          value={mailWeight}
          onChange={(e) => setMailWeight(e.target.value)}
          required
        />
        <TextField
          fullWidth
          sx={{ mb: 2 }}
          type="number"
          label="Assessed Cost (UAH)"
          value={assessedCost}
          onChange={(e) => setAssessedCost(e.target.value)}
          required
        />
        <Button onClick={handleClick} variant="contained">
          Send Info
        </Button>

        {status === "loading" && (
          <div className={styles.circular}>
            <CircularProgress sx={{}} />
          </div>
        )}
        {!!price && <h2>Estimated Price is: {price} UAH</h2>}
      </div>
    </div>
  );
}

export default Price;
