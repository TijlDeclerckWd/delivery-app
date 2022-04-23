import { Box, Typography } from "@mui/material";
import React from "react";

type FullImageCardProps = {
    imageUrl: string;
    title?: string;
}

const FullImageCard = ({imageUrl, title }: FullImageCardProps) => {
  return (
    <Box
      sx={{
        backgroundImage:
          `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${imageUrl})`,
        backgroundSize: "cover",
        height: 200,
        borderRadius: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: 'center',
        color: "white",
        cursor: 'pointer',
        '&:hover': {
            backgroundImage:
            `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${imageUrl})`,
        }
      }}
    >
      <Typography variant="h4">{title}</Typography>
    </Box>
  );
};

export default FullImageCard;
