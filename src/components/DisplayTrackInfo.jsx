import React from "react";

import {
  TrackingCard,
  TrackingError,
} from "src/pages/TrackingPage/TrackingCard/TrackingCard";

const DisplayTrackInfo = ({ error, info, isPressed }) => {
  if (info) {
    return <TrackingCard info={info} isPressed={isPressed} />;
  } else if (error) {
    return <TrackingError error={error} />;
  }
};

export default DisplayTrackInfo;
