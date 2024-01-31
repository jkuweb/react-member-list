import React from "react";
import InputMUI, { InputProps } from "@mui/material/Input";

export const Input: React.FC<InputProps> = (props) => {
  return <InputMUI {...props} />;
};
