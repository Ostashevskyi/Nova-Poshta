import React from "react";

import { useTranslation } from "react-i18next";
import { GoogleMap, Marker } from "@react-google-maps/api";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";

import styles from "./cityCard.module.css";

export default function CityCard(props) {
  const { t } = useTranslation(["common", "home"]);
  return (
    <div className={styles.departments}>
      <Accordion sx={{ width: "80%" }}>
        <AccordionSummary>
          <Typography sx={{ fontSize: "20px", fontWeight: 700 }}>
            {t("common:city")}: {props.cityDescription} | {t("common:street")}:{" "}
            {props.description}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography component={"span"}>
            <HidenInfo
              lat={props.lat}
              lng={props.lng}
              schedule={props.schedule}
            />
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

function HidenInfo(props) {
  return (
    <div className={styles.hidenInfo}>
      <div className={styles.mapWrapper}>
        <Map lat={props.lat} lng={props.lng} />
      </div>
      <div className={styles.schedule}>
        <h4>{t("home:schedule")}</h4>
        <ul>
          <li>
            <span>{t("home:days.0")}:</span> {props.schedule.Monday}
          </li>
          <li>
            <span>{t("home:days.1")}:</span> {props.schedule.Tuesday}
          </li>
          <li>
            <span>{t("home:days.2")}:</span> {props.schedule.Wednesday}
          </li>
          <li>
            <span>{t("home:days.3")}:</span> {props.schedule.Thursday}
          </li>
          <li>
            <span>{t("home:days.4")}:</span> {props.schedule.Friday}
          </li>
          <li>
            <span>{t("home:days.5")}:</span> {props.schedule.Saturday}
          </li>
          <li>
            <span>{t("home:days.6")}:</span> {props.schedule.Sunday}
          </li>
        </ul>
      </div>
    </div>
  );
}

function Map(props) {
  const mapRef = React.useRef(undefined);

  const defaultOptions = {
    streetViewControl: false,
    mapTypeControl: false,
    fullscreenControl: false,
    rotateControl: false,
    keyboardShortcuts: false,
    disableDoubleClickZoom: false,
  };

  const center = {
    lat: +props.lat,
    lng: +props.lng,
  };

  const onLoad = React.useCallback(function callback(map) {
    mapRef.current = map;
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    mapRef.current = undefined;
  }, []);

  return (
    <GoogleMap
      mapContainerClassName={styles.map}
      center={center}
      zoom={17}
      onLoad={onLoad}
      onUnmount={onUnmount}
      options={defaultOptions}
    >
      <Marker position={center} />
    </GoogleMap>
  );
}
