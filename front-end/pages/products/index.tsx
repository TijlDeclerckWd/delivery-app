import { useFetch } from "core/api";
import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useEffect } from "react";

const Products: NextPage = () => {
  const fetch = useFetch();

  const body = { title: "Joske" };

  useEffect(() => {
    fetch
      .post("products", {
        // @ts-ignore
        body: body,
      })
      .then((data) => console.log("data check", data));
  }, []);

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
