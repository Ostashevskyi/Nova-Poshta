import React, { useState } from "react";

import { TextField } from "@mui/material";
import { REGEX } from "src/utils/constants";

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
