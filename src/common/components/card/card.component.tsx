import React from "react";
import CardMUI, { CardProps } from "@mui/material/Card";

export const Card: React.FC<React.PropsWithChildren<CardProps>> = (props) => {
  return <CardMUI {...props}> {props.children}</CardMUI>;
};
