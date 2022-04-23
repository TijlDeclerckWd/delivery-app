import React from "react";
import { FormLabel, Typography, Box } from "@mui/material";

type ControlLabelProps = {
  label: string;
  subLabel?: string;
  required?: boolean;
  children: React.ReactNode;
};

const ControlLabel = ({
  label,
  required,
  subLabel,
  children,
}: ControlLabelProps) => {
  return (
    <FormLabel sx={{ "& > p": { fontWeight: 600 } }} component="legend">
      {label && (
        <Typography sx={{ mb: 1.5 }} variant="body2">
          {label}
          {required && " (*)"}
        </Typography>
      )}
      {subLabel && (
        <Box mb={2}>
          <Typography variant="caption">{subLabel}</Typography>
        </Box>
      )}
      {children}
    </FormLabel>
  );
};

export default ControlLabel;
