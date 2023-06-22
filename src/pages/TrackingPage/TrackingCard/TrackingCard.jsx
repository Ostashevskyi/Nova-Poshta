import React from "react";

import { useTranslation } from "react-i18next";
import {
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
} from "@mui/material";

import styles from "./trackingCard.module.css";

export function TrackingCard(props) {
  const deliveryInfo = props.info;

  const { t } = useTranslation(["trackingPage", "common"]);

  return (
    <div>
      {deliveryInfo.map((el, index) => {
        return (
          <div key={index} className={styles.trackingCard}>
            <Accordion>
              <AccordionSummary>
                <Typography sx={{ fontSize: "20px", fontWeight: 700 }}>
                  {t("del_details")}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography component={"span"}>
                  <p>
                    {" "}
                    <span>{t("del_type")}:</span> {el.CargoDescriptionString}
                  </p>
                  <p>
                    <span>{t("warhouse_cat")}:</span>{" "}
                    {el.CategoryOfWarehouse === "Branch"
                      ? "Department"
                      : "Postomat"}
                  </p>
                  <p>
                    <span>{t("creation_date")}:</span> {el.DateCreated}
                  </p>
                  <p>
                    {" "}
                    <span>{t("weight")}: </span> {el.DocumentWeight} kg
                  </p>
                  <p>
                    <span>{t("status")}:</span> {el.Status}
                  </p>
                  <p>
                    <span>{t("upd_date")}:</span> {el.TrackingUpdateDate}
                  </p>
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion>
              <AccordionSummary>
                <Typography sx={{ fontSize: "20px", fontWeight: 700 }}>
                  {t("sen_rec_info")}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography component={"span"}>
                  <p>
                    <span>{t("common:city_sender")}:</span> {el.CitySender}{" "}
                  </p>
                  <p>
                    <span>{t("common:city_recipient")}:</span>{" "}
                    {el.CityRecipient}{" "}
                  </p>
                  <p>
                    <span>{t("sen_full_name")}:</span> {el.SenderFullNameEW}
                  </p>
                  <p>
                    <span>{t("sen_desc")}:</span>{" "}
                    {el.CounterpartySenderDescription}
                  </p>
                  <p>
                    <span>{t("sen_phone")}:</span> {el.PhoneSender}{" "}
                  </p>
                  <p>
                    <span>{t("sen_address")}:</span> {el.SenderAddress}
                  </p>
                  <p>
                    <span>{t("rec_address")}:</span> {el.RecipientAddress}
                  </p>
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion>
              <AccordionSummary>
                <Typography sx={{ fontSize: "20px", fontWeight: 700 }}>
                  {t("payment_details")}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography component={"span"}>
                  <p>
                    <span>{t("est_payment")}:</span>{" "}
                    {el.ExpressWaybillAmountToPay} UAH
                  </p>
                  <p>
                    <span>{t("ancd_price")}:</span> {el.AnnouncedPrice} UAH{" "}
                  </p>
                  <p>
                    <span>{t("payment_mthd")}:</span>{" "}
                    {el.PaymentMethod === "Cash" ? "Cash" : "Cards"}
                  </p>
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
        );
      })}
    </div>
  );
}

export function TrackingError(props) {
  return <h2 className={styles.error}>{props.error}</h2>;
}
