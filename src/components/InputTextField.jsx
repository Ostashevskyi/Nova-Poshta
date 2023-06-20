import React from "react";

import { REGEX } from "src/utils/constants";

import { TextField } from "@mui/material";

export default function InputTextField({
  type,
  style,
  label,
  onChange,
  required,
  value,
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
        error={type !== "number" && !value.match(REGEX) && value.length !== 0}
      />
    </>
  );
}
