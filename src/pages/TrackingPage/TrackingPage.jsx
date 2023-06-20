import React, { useCallback, useState, useMemo } from "react";

import Loader from "src/components/Loader";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import FilledButton from "src/components/FilledButton";
import InputTextField from "src/components/InputTextField";
import { fetchTrackingInfo } from "src/store/trackingSlice";
import { DisplayTrackInfo } from "src/components/DisplayTrackInfo";

import styles from "./trackingPage.module.css";
import useGetLanguage from "src/hooks/useGetLanguage";

function TrackingPage() {
  const [language] = useGetLanguage();
  const [documentNumber, setDocumentNumber] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [isPressed, setIsPressed] = useState(false);

  const dispatch = useDispatch();

  const { t } = useTranslation(["trackingPage"]);

  const handleClick = useCallback(() => {
    dispatch(fetchTrackingInfo({ documentNumber, mobileNumber }));
    setIsPressed(true);
  }, [mobileNumber, documentNumber]);

  const filledBtn = useMemo(() => {
    return (
      <FilledButton
        onClick={handleClick}
        style={{ height: "56px" }}
        disabled={!documentNumber}
      >
        {t("search")}
      </FilledButton>
    );
  }, [documentNumber, mobileNumber, language]);

  const { info, status, error } = useSelector((state) => state.tracking);

  return (
    <div>
      <div className={styles.trackingInputs}>
        <InputTextField
          label={t("document_number")}
          style={{ mb: 2, mr: 1, width: "300px" }}
          value={documentNumber}
          onChange={(e) => setDocumentNumber(e.target.value)}
          required={true}
        />
        <InputTextField
          label={t("mobile_number")}
          style={{ mb: 2, mr: 1, width: "300px" }}
          value={mobileNumber}
          onChange={(e) => setMobileNumber(e.target.value)}
        />
        {filledBtn}
      </div>
      <Loader status={status} cls={styles.circular}>
        <DisplayTrackInfo
          error={error}
          info={info}
          status={status}
          isPressed={isPressed}
        />
      </Loader>
    </div>
  );
}

export default TrackingPage;
