import React from "react";

import { Button } from "@mui/material";

export default function FilledButton({ style, onClick, disabled, text }) {
  return (
    <>
      <Button
        variant="contained"
        sx={style}
        onClick={onClick}
        disabled={disabled}
      >
        {text}
      </Button>
    </>
  );
}
