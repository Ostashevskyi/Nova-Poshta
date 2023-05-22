import { TextField, Button, CircularProgress } from "@mui/material";
import React, { useState } from "react";
import styles from "./tracking.module.css";
import { fetchTrackingInfo } from "../../../store/trackingSlice";
import { useDispatch, useSelector } from "react-redux";
import TrackingCard from "./trackingCard/TrackingCard";

export default function Tracking() {
  const [documentNumber, setDocumentNumber] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [isPressed, setIsPressed] = useState(false);

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(fetchTrackingInfo({ documentNumber, mobileNumber }));
    setIsPressed(true);
  };

  const { info, status } = useSelector((state) => state.tracking);

  return (
    <div>
      <div className={styles.trackingInputs}>
        <TextField
          sx={{ mb: 2, mr: 1, width: "300px" }}
          label="Enter a document number"
          value={documentNumber}
          onChange={(e) => setDocumentNumber(Number(e.target.value))}
        />
        <TextField
          sx={{ mb: 2, mr: 1, width: "300px" }}
          label="Enter a mobile number"
          value={mobileNumber}
          onChange={(e) => setMobileNumber(Number(e.target.value))}
        />
        <Button
          variant="contained"
          onClick={handleClick}
          sx={{ height: "56px" }}
        >
          Search
        </Button>
      </div>

      {status === "loading" && <CircularProgress />}
      {info && <TrackingCard info={info} isPressed={isPressed} />}
    </div>
  );
}
