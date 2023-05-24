import React from "react";
import { Select, MenuItem, Menu } from "@mui/material";

export default function InputSelectField(props) {
  return (
    <>
      <Select
        labelId={props.labelId} //filter-type
        label={props.label} //filter
        value={props.filterType} //filterType
        {...props.value}
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
