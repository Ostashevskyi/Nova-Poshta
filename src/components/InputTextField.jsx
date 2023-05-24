import React from "react";

import { REGEX } from "src/constants";

import { TextField } from "@mui/material";

export default function InputTextField(props) {
  return (
    <>
      <TextField
        type={props.type}
        sx={props.style}
        label={props.label}
        data={props.data}
        {...props.value}
        error={
          props.type !== "number" &&
          !props.data.match(REGEX) &&
          props.data.length !== 0
        }
      />
    </>
  );
}
