import type { NextPage } from "next";
import {
  Box,
  Button,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Grid,
} from "@mui/material";
import Head from "next/head";
import {
  FullImageCard,
  ImageCard,
  PageTitle,
  AddButtonLarge,
} from "components";
import { PageContainer } from "styled";
import Link from "next/link";

const Meals: NextPage = () => {
  return (
    <Box>
      <Head>
        <title>Meals</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageContainer>
        <PageTitle>Meals</PageTitle>
        <Grid mt={3} container spacing={3}>
          <Grid item xs={12} md={6} lg={4} xl={3}>
            <FullImageCard
              title="Paëlla"
              imageUrl="https://www.eefkooktzo.nl/wp-content/uploads/elementor/thumbs/Paella-recept-pc4r3cgn18mwdvwr2lwd4vxqef7n9qrzjjz1hnu1t0.jpg"
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4} xl={3}>
            <FullImageCard
              title="Gentse Waterzooi"
              imageUrl="https://img.static-rmg.be/a/food/image/q75/w640/h400/1012/gentse-waterzooi.jpg"
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4} xl={3}>
            <FullImageCard
              title="Spaghetti Bolognese"
              imageUrl="https://img-global.cpcdn.com/recipes/a96cbdca9cec8c36/680x482cq70/easy-spaghetti-bolognese-recipe-main-photo.webp"
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4} xl={3}>
            <Link href="/meals/add-meal">
              <a>
                <AddButtonLarge />
              </a>
            </Link>
          </Grid>
        </Grid>
        <Grid container spacing={3} justifyContent="space-between" mt={3}>
          <Grid display="flex" item xs={12} md={6} lg={4}>
            <ImageCard
              url="https://luxofood.com/wp-content/uploads/2021/12/oct4-image-1.jpg"
              title="Ingredients"
              description="Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Fugiat enim dolorum maxime suscipit unde culpa? Beatae ipsa
                  illum labore alias distinctio expedita"
            />
          </Grid>
          <Grid
            display="flex"
            justifyContent="center"
            item
            xs={12}
            md={6}
            lg={4}
          >
            <ImageCard
              url="https://foodenginepos.com/img/features/im.png"
              title="Inventory"
              description="Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Fugiat enim dolorum maxime suscipit unde culpa? Beatae ipsa
                  illum labore alias distinctio expedita"
            />
          </Grid>
          <Grid
            display="flex"
            justifyContent="flex-end"
            item
            xs={12}
            md={6}
            lg={4}
          >
            <ImageCard
              url="https://www.cdc.gov/diabetes/images/managing/meal.png"
              title="Meal Plans"
              description="Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Fugiat enim dolorum maxime suscipit unde culpa? Beatae ipsa
                  illum labore alias distinctio expedita"
            />
          </Grid>
        </Grid>
      </PageContainer>
    </Box>
  );
};

export default Meals;
