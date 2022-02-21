import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useEffect } from "react";

const Products: NextPage = () => {

  // useEffect(() => {
  //   fetch('localhost:8888/api/products', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json'
  //       // 'Content-Type': 'application/x-www-form-urlencoded',
  //     },
  //     body: JSON.stringify({ title: 'test'}),
  //   }).then((data) => console.log('data checj'))
  // }, []);

  return (
    <div>
      <Head>
        <title>Delivery app products</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      This is the products page
      <h1>
        return to{" "}
        <Link href="/">
          <a>Home</a>
        </Link>
      </h1>
    </div>
  );
};

export default Products;
