import { Box } from "@mui/material";
import React from "react";
import { styled } from "@mui/system";
import FacebookLogo from "assets/images/facebook-logo.svg";
import NavBarItem from "./NavBarItem";
import {
  HomeOutline,
  FoodOutline,
  AccountMultipleOutline,
  CalendarMonthOutline,
} from "mdi-material-ui";
import { useRouter } from "next/router";

const NavbarContainer = styled("div")(({ theme }) => ({
  height: theme.spacing(7),
  borderBottom: "1px solid lightgrey",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
}));

const NavbarItemContainer = styled("div")({
  display: "flex",
  height: "100%",
});

const Navbar = () => {
  const router = useRouter();

  const isActive = (link: string) => {
    const matchMainCategory = router.pathname.match(/\/[^\/]*/);
    return link === matchMainCategory?.[0];
  };

  return (
    <NavbarContainer>
      <Box position="absolute" left="8px" display="flex" height="80%">
        <FacebookLogo />
      </Box>
      <NavbarItemContainer>
        <NavBarItem link="/" Icon={HomeOutline} active={isActive("/")} />
        <NavBarItem
          link="/meals"
          Icon={FoodOutline}
          active={isActive("/meals")}
        />
        <NavBarItem
          link="/clients"
          Icon={AccountMultipleOutline}
          active={isActive("/clients")}
        />
        <NavBarItem
          link="/planning"
          Icon={CalendarMonthOutline}
          active={isActive("/planning")}
        />
      </NavbarItemContainer>
    </NavbarContainer>
  );
};

export default Navbar;
