import React from "react";
import ButtonMUI, { ButtonProps } from "@mui/material/Button";

export const Button: React.FC<React.PropsWithChildren<ButtonProps>> = (
  props
) => {
  return <ButtonMUI {...props}>{props.children}</ButtonMUI>;
};

export const ButtonList: React.FC<React.PropsWithChildren<ButtonProps>> = (
  props
) => {
  return <ButtonMUI {...props}>{props.children}</ButtonMUI>;
};
