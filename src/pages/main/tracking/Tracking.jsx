import React, { useState } from "react";

import Loader from "src/components/Loader";
import { useInput } from "src/hooks/useInput";
import { useDispatch, useSelector } from "react-redux";
import FilledButton from "src/components/FilledButton";
import InputTextField from "src/components/InputTextField";
import { fetchTrackingInfo } from "src/store/trackingSlice";

import styles from "./tracking.module.css";

import { TrackingCard, TrackingError } from "./trackingCard/TrackingCard";

export default function Tracking() {
  const setDocumentNumber = useInput("");
  const documentNumber = setDocumentNumber.value;

  const setMobileNumber = useInput("");
  const mobileNumber = setMobileNumber.value;

  const [isPressed, setIsPressed] = useState(false);

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(fetchTrackingInfo({ documentNumber, mobileNumber }));
    setIsPressed(true);
  };

  const displayInfo = () => {
    if (status === "rejected") {
      return <TrackingError error={error} />;
    } else {
      return <TrackingCard info={info} isPressed={isPressed} />;
    }
  };

  const { info, status, error } = useSelector((state) => state.tracking);

  const isEmpty = true;

  return (
    <div>
      <div className={styles.trackingInputs}>
        <InputTextField
          label="Enter a document number"
          style={{ mb: 2, mr: 1, width: "300px" }}
          value={setDocumentNumber}
          data={documentNumber}
        />
        <InputTextField
          label="Enter a mobile number"
          style={{ mb: 2, mr: 1, width: "300px" }}
          value={setMobileNumber}
          data={mobileNumber}
        />
        <FilledButton
          onClick={handleClick}
          text={"Search"}
          style={{ height: "56px" }}
          disabled={documentNumber ? !isEmpty : isEmpty}
        />
      </div>
      <Loader
        status={status}
        class={styles.circular}
        activeFunc={displayInfo}
      />
    </div>
  );
}
