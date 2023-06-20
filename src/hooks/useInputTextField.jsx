import React, { useState } from "react";

import { REGEX } from "src/utils/constants";

import { TextField } from "@mui/material";

const useInputTextField = ({ type, style, label, required }) => {
  const [value, setValue] = useState("");

  const input = (
    <TextField
      type={type}
      sx={style}
      label={label}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      required={required}
      error={type !== "number" && !value.match(REGEX) && value.length !== 0}
    />
  );

  return [value, input];
};

export default useInputTextField;
