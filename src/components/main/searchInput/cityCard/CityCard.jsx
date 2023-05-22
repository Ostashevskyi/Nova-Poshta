import React, { useState } from "react";
import styles from "./cityCard.module.css";

import { GoogleMap, Marker } from "@react-google-maps/api";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";

export default function CityCard(props) {
  return (
    <div className={styles.departments}>
      <Accordion sx={{ width: "80%" }}>
        <AccordionSummary>
          <Typography sx={{ fontSize: "20px", fontWeight: 700 }}>
            City: {props.cityDescription} | Street: {props.description}
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
      <div>
        <Map lat={props.lat} lng={props.lng} />
      </div>
      <div className={styles.schedule}>
        <h4>Work schedule</h4>
        <ul>
          <li>
            <span>Monday:</span> {props.schedule.Monday}
          </li>
          <li>
            <span>Tuesday:</span> {props.schedule.Tuesday}
          </li>
          <li>
            <span>Wednesday:</span> {props.schedule.Wednesday}
          </li>
          <li>
            <span>Thursday:</span> {props.schedule.Thursday}
          </li>
          <li>
            <span>Friday:</span> {props.schedule.Friday}
          </li>
          <li>
            <span>Saturday:</span> {props.schedule.Saturday}
          </li>
          <li>
            <span>Sunday:</span> {props.schedule.Sunday}
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

  const containerStyle = {
    width: "400px",
    height: "400px",
  };

  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
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
