import React from "react";

import { CircularProgress } from "@mui/material";

const Loader = ({ cls, status, children }) => {
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
};

export default Loader;
