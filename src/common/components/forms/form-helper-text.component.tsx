import React from "react";
import FormHelperTextMUI, {
  FormHelperTextProps,
} from "@mui/material/FormHelperText";

export const FormHelperText: React.FC<FormHelperTextProps> = (props) => {
  return <FormHelperTextMUI {...props}>{props.children}</FormHelperTextMUI>;
};
