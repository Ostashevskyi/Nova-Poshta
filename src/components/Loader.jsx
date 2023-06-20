import React from "react";

import { CircularProgress } from "@mui/material";

export default function Loader({ cls, status, children }) {
  return (
    <>
      {status === "loading" ? (
        <div className={cls}>
          <CircularProgress />
        </div>
      ) : (
        children
      )}
    </>
  );
}
