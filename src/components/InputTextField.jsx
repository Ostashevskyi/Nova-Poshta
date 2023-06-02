import React from "react";

import { REGEX } from "src/utils/constants";

import { TextField } from "@mui/material";

export default function InputTextField(props) {
  return (
    <>
      <TextField
        type={props.type}
        sx={props.style}
        label={props.label}
        value={props.value}
        onChange={props.onChange}
        required={props.required}
        error={
          props.type !== "number" &&
          !props.value.match(REGEX) &&
          props.value.length !== 0
        }
      />
    </>
  );
}
