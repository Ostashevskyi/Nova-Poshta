import React from "react";

import {
  TrackingCard,
  TrackingError,
} from "src/pages/TrackingPage/TrackingCard/TrackingCard";

const DisplayTrackInfo = ({ error, info, status, isPressed }) => {
  if (status === "rejected") {
    return <TrackingError error={error} />;
  } else {
    return <TrackingCard info={info} isPressed={isPressed} />;
  }
};

export default DisplayTrackInfo;
