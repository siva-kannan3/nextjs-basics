import React from "react";
import Head from "next/head";
import Link from "next/link";

export default function FirstPost() {
  return (
    <React.Fragment>
      <Head>
        <title>First Post</title>
      </Head>
      <main className="center">
        <h1>First post</h1>
        <Link href={"/"}>Go to home</Link>
      </main>

      <style jsx>{`
        .center {
          text-align: center;
        }
      `}</style>
    </React.Fragment>
  );
}
