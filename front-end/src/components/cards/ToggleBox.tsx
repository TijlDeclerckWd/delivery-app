import { Box, Typography } from "@mui/material";
import React from "react";

type ToggleBoxProps = {
  arrayHelpers: any;
  name: string;
  label: string;
};

const ToggleBox = ({ name, arrayHelpers, label }: ToggleBoxProps) => {
  const {
    name: controlName,
    form: { values: formValues },
  } = arrayHelpers;

  const value = formValues[controlName];
  const isSelected = value.includes(name);
  return (
    <Box
      onClick={() => {
        let fieldValues = arrayHelpers.form.values[arrayHelpers.name];
        if (fieldValues.includes(name)) {
          fieldValues.forEach((fieldValue: any, index: number) => {
            if (fieldValue === name) {
              arrayHelpers.remove(index);
            }
          });
        } else {
          arrayHelpers.push(name);
        }
      }}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: 'pointer',
        textAlign: "center",
        border: theme => isSelected ? `3px solid ${theme.palette.primary.main}` : `3px solid ${theme.palette.info.main}`,
        color: theme => isSelected ? theme.palette.primary.main : theme.palette.info.main,
        borderRadius: "10px",
        width: theme => theme.spacing(25),
        height: "100px",
      }}
    >
      <Typography variant='h5'>{label}</Typography>
    </Box>
  );
};

export default ToggleBox;
