import React from "react";

import { Select, MenuItem } from "@mui/material";

export default function InputSelectField({ labelId, label, value, onChange }) {
  return (
    <>
      <Select labelId={labelId} label={label} value={value} onChange={onChange}>
        {props.types.map((el) => {
          return (
            <MenuItem key={el.id} value={el.ref}>
              {el.name}
            </MenuItem>
          );
        })}
      </Select>
    </>
  );
}
