import React from "react";
import Head from "next/head";

export default function Header({ title }: { title: string }) {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content="The ulmate referrals management app for doctors"
      />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1"
      />
      <link
        rel="icon"
        href="/favicon.ico"
      />
    </Head>
  );
}
