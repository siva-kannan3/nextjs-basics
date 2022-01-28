import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import React from "react";

export default function Design() {
  return (
    <React.Fragment>
      <Head>
        <title>Figma design</title>
      </Head>
      <div className="flex">
        <Link href={"/"}>Go to home</Link>
        <Image
          src="/images/design.png"
          alt="figma_design"
          width={600}
          height={600}
        />
      </div>

      <style jsx>{`
        .flex {
          display: flex;
          flex-direction: column;
          align-items: center;
          box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.2);
        }
      `}</style>
    </React.Fragment>
  );
}
