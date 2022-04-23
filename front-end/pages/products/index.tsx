import type { NextPage } from "next";
import { Box, Button } from '@mui/material';
import Head from "next/head";
import Layout from "../../components.old/layout";

const Products: NextPage = () => {

  return (
    <Layout>
      <Head>
        <title>Delivery app products</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box>
        <Button variant='outlined' color='primary'>Create Product</Button>
      </Box>
    </Layout>
  );
};

export default Products;
