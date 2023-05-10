import { useDispatch, useSelector } from "react-redux";
import styles from "./price.module.css";
import { Button, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { fetchCityRef, fetchPrice } from "../../../store/priceSlice";

function Price() {
  const [citySender, setCitySender] = useState("");
  const [cityRecipient, setCityRecipient] = useState("");
  const [mailWeight, setMailWeight] = useState(0);
  const [assessedCost, setAssessedCost] = useState(0);

  const { citySenderRef, cityRecipientRef, price } = useSelector(
    (state) => state.prices
  );

  const dispatch = useDispatch();

  const handleClick = () => {
    if (citySender && cityRecipient && mailWeight && assessedCost) {
      dispatch(fetchCityRef({ citySender }));
      dispatch(fetchCityRef({ cityRecipient }));
    } else {
      alert("Please fill the inputs");
    }
  };

  useEffect(() => {
    dispatch(
      fetchPrice({ citySenderRef, cityRecipientRef, mailWeight, assessedCost })
    );
  }, [citySenderRef, cityRecipientRef]);

  return (
    <div className={styles.departments__block}>
      <h2>Price Calculator</h2>
      <div>
        <TextField
          fullWidth
          label="City Sender"
          value={citySender}
          onChange={(e) => setCitySender(e.target.value)}
        />
        <TextField
          fullWidth
          label="City Recipient"
          value={cityRecipient}
          onChange={(e) => setCityRecipient(e.target.value)}
        />
        <TextField
          fullWidth
          type="number"
          label="Mail Weight"
          value={mailWeight}
          onChange={(e) => setMailWeight(e.target.value)}
        />
        <TextField
          fullWidth
          type="number"
          label="Assessed Cost"
          value={assessedCost}
          onChange={(e) => setAssessedCost(e.target.value)}
        />
        <Button onClick={handleClick} variant="contained">
          Send Info
        </Button>

        {}
        {!!price && <h2>Estimated Price is: {price} UAH</h2>}
      </div>
    </div>
  );
}

export default Price;
