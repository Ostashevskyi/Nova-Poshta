import React from "react";

import { Select, MenuItem } from "@mui/material";

export default function InputSelectField(props) {
  return (
    <>
      <Select
        labelId={props.labelId}
        label={props.label}
        value={props.value}
        onChange={props.onChange}
      >
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
