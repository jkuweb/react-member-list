import React from "react";
import InputLabelMUI, { InputLabelProps } from "@mui/material/InputLabel";

export const InputLabel: React.FC<InputLabelProps> = (props) => {
  return <InputLabelMUI {...props}>{props.children}</InputLabelMUI>;
};
