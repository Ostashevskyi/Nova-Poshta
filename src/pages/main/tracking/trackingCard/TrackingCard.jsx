import React from "react";

import {
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
} from "@mui/material";

import styles from "./trackingCard.module.css";

export function TrackingCard(props) {
  const deliveryInfo = props.info;

  return (
    <div className={props.isPressed ? styles.trackingCard : ""}>
      {deliveryInfo.map((el, index) => {
        return (
          <>
            <Accordion key={"Delivery Details"}>
              <AccordionSummary>
                <Typography sx={{ fontSize: "20px", fontWeight: 700 }}>
                  Delivery Details
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography component={"span"}>
                  <p>
                    {" "}
                    <span>Delivery Type:</span> {el.CargoDescriptionString}
                  </p>
                  <p>
                    <span>Warhouse Category:</span>{" "}
                    {el.CategoryOfWarehouse === "Branch"
                      ? "Department"
                      : "Postomat"}
                  </p>
                  <p>
                    <span>Creation Date:</span> {el.DateCreated}
                  </p>
                  <p>
                    {" "}
                    <span>Weight: </span> {el.DocumentWeight} kg
                  </p>
                  <p>
                    <span>Status:</span> {el.Status}
                  </p>
                  <p>
                    <span>Tracking Update Date:</span> {el.TrackingUpdateDate}
                  </p>
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion key={"Sender/Recipient Info"}>
              <AccordionSummary>
                <Typography sx={{ fontSize: "20px", fontWeight: 700 }}>
                  Sender/Recipient Info
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography component={"span"}>
                  <p>
                    <span>City Sender:</span> {el.CitySender}{" "}
                  </p>
                  <p>
                    <span>City Recipient:</span> {el.CityRecipient}{" "}
                  </p>
                  <p>
                    <span>Sender Full Name:</span> {el.SenderFullNameEW}
                  </p>
                  <p>
                    <span>Sender Description:</span>{" "}
                    {el.CounterpartySenderDescription}
                  </p>
                  <p>
                    <span>Sender Phone:</span> {el.PhoneSender}{" "}
                  </p>
                  <p>
                    <span>Sender Address:</span> {el.SenderAddress}
                  </p>
                  <p>
                    <span>Recipient Address:</span> {el.RecipientAddress}
                  </p>
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion key={"Payment Details"}>
              <AccordionSummary>
                <Typography sx={{ fontSize: "20px", fontWeight: 700 }}>
                  Payment Details
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography component={"span"}>
                  <p>
                    <span>Estimated Payment Amount:</span>{" "}
                    {el.ExpressWaybillAmountToPay} UAH
                  </p>
                  <p>
                    <span>Announced Price:</span> {el.AnnouncedPrice} UAH{" "}
                  </p>
                  <p>
                    <span>Payment Method:</span>{" "}
                    {el.PaymentMethod === "Cash" ? "Cash" : "Cards"}
                  </p>
                </Typography>
              </AccordionDetails>
            </Accordion>
          </>
        );
      })}
    </div>
  );
}

export function TrackingError(props) {
  return <h2 className={styles.error}>{props.error}</h2>;
}
