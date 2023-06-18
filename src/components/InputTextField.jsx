import React from "react";

import { REGEX } from "src/utils/constants";

import { TextField } from "@mui/material";

export default function InputTextField({
  type,
  style,
  label,
  onChange,
  required,
}) {
  return (
    <>
      <TextField
        type={type}
        sx={style}
        label={label}
        value={value}
        onChange={onChange}
        required={required}
        error={
          props.type !== "number" &&
          !props.value.match(REGEX) &&
          props.value.length !== 0
        }
      />
    </>
  );
}
