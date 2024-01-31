import React from "react";
import CardContentMUI, { CardContentProps } from "@mui/material/CardContent";

export const CardContent: React.FC<CardContentProps> = ({ children }) => {
  return <CardContentMUI>{children}</CardContentMUI>;
};
