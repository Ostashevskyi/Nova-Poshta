import React from "react";

import { Button } from "@mui/material";

export default function FilledButton(props) {
  return (
    <>
      <Button
        variant="contained"
        sx={props.style}
        onClick={props.onClick}
        disabled={props.disabled}
      >
        {props.text}
      </Button>
    </>
  );
}
