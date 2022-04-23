import { TextField } from "@mui/material";
import React, { ChangeEvent } from "react";
import ControlLabel from "../ControlLabel";

type TextFieldControlProps = {
  label: string;
  required?: boolean;
  subLabel?: string;
  name: string;
  type?: string;
  value?: string;
  onChange?: (e: ChangeEvent) => void;
  error?: boolean;
  helperText?: string | boolean;
  fullWidth?: boolean;
  id: string;
  onBlur?: (e: ChangeEvent) => void;
  multiline?: boolean;
  minRows?: number;
};

const TextFieldControl = ({
  label,
  required,
  subLabel,
  fullWidth = true,
  multiline = false,
  ...fieldProps
}: TextFieldControlProps) => {
  return (
    <ControlLabel label={label} required={required} subLabel={subLabel}>
      <TextField
        variant="outlined"
        multiline={multiline}
        fullWidth={fullWidth}
        {...fieldProps}
      />
    </ControlLabel>
  );
};

export default TextFieldControl;
