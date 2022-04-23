import React from "react";
import { Box, TextField } from "@mui/material";

export const IngredientFilter = () => {
  
  const searchIngredient = (val) => {
    // Do request to search for ingredient in third party API
  };

  return (
    <Box>
      <TextField size="small" onChange={searchIngredient} />
    </Box>
  );
};
