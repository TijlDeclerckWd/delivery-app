import { Box, Typography } from "@mui/material";
import { Navbar } from "components";
import type { NextPage } from "next";
import Link from "next/link";
import { PageContainer } from "styled";

const Home: NextPage = () => {
  return (
    <Box>
      <Box mt={7}>
        <Typography variant="h2">Delivery App</Typography>
        <Box>
          <Link href="/meals">
            <a>Meals</a>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
