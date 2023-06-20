import React, { useCallback, useState, useMemo } from "react";

import Loader from "src/components/Loader";
import { useTranslation } from "react-i18next";
import useGetLanguage from "src/hooks/useGetLanguage";
import { useDispatch, useSelector } from "react-redux";
import FilledButton from "src/components/FilledButton";
import { fetchTrackingInfo } from "src/store/trackingSlice";
import useInputTextField from "src/hooks/useInputTextField";
import DisplayTrackInfo from "src/components/DisplayTrackInfo";

import styles from "./trackingPage.module.css";

function TrackingPage() {
  const [language] = useGetLanguage();
  const { t } = useTranslation(["trackingPage"]);

  const [documentNumber, setDocumentNumber] = useInputTextField({
    type: "number",
    style: { mb: 2, mr: 1, width: "300px" },
    label: t("document_number"),
    required: true,
  });

  const [mobileNumber, setMobileNumber] = useInputTextField({
    type: "number",
    style: { mb: 2, mr: 1, width: "300px" },
    label: t("mobile_number"),
  });
  const [isPressed, setIsPressed] = useState(false);

  const dispatch = useDispatch();

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
        {setDocumentNumber}
        {setMobileNumber}
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
