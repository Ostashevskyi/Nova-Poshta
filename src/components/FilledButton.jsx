import React from "react";

import { Button } from "@mui/material";

const FilledButton = ({ style, onClick, disabled, children }) => {
  return (
    <Button
      variant="contained"
      sx={style}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </Button>
  );
};
export default FilledButton;
