import React from "react";

import { CircularProgress } from "@mui/material";

export default function Loader({ cls, activeFunc }) {
  return (
    <>
      {props.status === "loading" ? (
        <div className={cls}>
          <CircularProgress />
        </div>
      ) : (
        activeFunc
      )}
    </>
  );
}
