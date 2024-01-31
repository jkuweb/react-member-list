import React from "react";
import FormControlMUI, { FormControlProps } from "@mui/material/FormControl";

export const FormControl: React.FC<FormControlProps> = (props) => {
  return <FormControlMUI {...props}>{props.children}</FormControlMUI>;
};
