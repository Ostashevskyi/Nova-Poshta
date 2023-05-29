import React from "react";

import { CircularProgress } from "@mui/material";

export default function Loader(props) {
  return (
    <>
      {props.status === "loading" ? (
        <div className={props.class}>
          <CircularProgress />
        </div>
      ) : (
        props.activeFunc()
      )}
    </>
  );
}
