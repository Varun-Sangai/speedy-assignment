import { TextField, TextFieldProps } from "@mui/material";
import React from "react";

export type InputField = {
  color?: string;
  backgroundColor?: string;
} & TextFieldProps;


function InputField(props: InputField) {
  const {
    color = "#000",
    backgroundColor = "#fff",
    InputProps,
    InputLabelProps,
    sx,
    fullWidth = true,
    ...restProps
  } = props;
  return (
    <TextField
      {...restProps}
      fullWidth
      sx={{
        "& .MuiOutlinedInput-root": {
          borderRadius: "8px !important",
          overflow: "hidden !important",
          "& fieldset": {
            borderColor: "#D0D5DD !important",
            borderWidth: "1px !important",
          },
          "&:hover fieldset": {
            borderColor: "#859BB4 !important",
            borderWidth: "1px !important",
          },
          "&.Mui-focused fieldset": {
            borderColor: "#859BB4 !important",
            borderWidth: "1px !important",
          },
        },
        ...sx
      }}
      InputProps={{
        sx: {
          "& input": {
            fontSize: "16px",
            lineHeight: "150%",
            color: color,
            fontWeight: "400 !important",
            backgroundColor: backgroundColor,
            padding: "15px 14px",
          },
          "& textarea": {
            fontSize: "16px",
            lineHeight: "150%",
            color: color,
            fontWeight: "400 !important",
            backgroundColor: backgroundColor,
          },
        },
        ...InputProps,
      }}
      InputLabelProps={{
        sx: {
          fontSize: "14px",
        },
        ...InputLabelProps
      }}
    />
  );
}


export default React.memo(InputField);
