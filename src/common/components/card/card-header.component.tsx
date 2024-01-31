import React from "react";
import CardHeaderMUI, { CardHeaderProps } from "@mui/material/CardHeader";

export const CardHeader: React.FC<CardHeaderProps> = (props) => {
  return <CardHeaderMUI {...props} />;
};
