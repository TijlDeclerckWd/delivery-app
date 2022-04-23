import { Typography } from "@mui/material";
import React from "react";

type PageTitleProps = {
    children: React.ReactNode;
    variant?: string;
}

const PageTitle = ({ children, variant = 'h4' }: PageTitleProps) => {
  return <Typography variant={variant}>{children}</Typography>;
};

export default PageTitle;
