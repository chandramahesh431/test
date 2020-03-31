import React from "react";
import TextField from "@material-ui/core/TextField";

export default function InputText(props) {
  const { error, autoComplete, helperText, value, label } = props;
  return (
    <TextField
      error={error}
      label={label}
      value={value}
      variant="outlined"
      helperText={helperText || ""}
      autoComplete={autoComplete}
    />
  );
}

InputText.defaultProps = {
  error: true,
  autoComplete: "off",
  helperText: "",
  value: "",
  label: "Default Label"
};
