import { Box } from "@mui/material";
import Link from "next/link";
import React from "react";

type NavbarItemProps = {
  link: string;
  Icon: any;
  active?: boolean;
};

const NavBarItem = ({ Icon, active = false, link }: NavbarItemProps) => {
  return (
    <Box
      sx={{
        width: (theme) => theme.spacing(20),
        borderBottom: (theme) =>
          active
            ? `3px solid ${theme.palette.primary.main}`
            : "3px solid transparent",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Link href={link}>
        <a>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: (theme) =>
                active ? theme.palette.primary.main : theme.palette.info.main,
            }}
          >
            <Icon fontSize="large" />
          </Box>
        </a>
      </Link>
    </Box>
  );
};

export default NavBarItem;
