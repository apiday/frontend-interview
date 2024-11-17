import Head from "next/head";
import { HomeLayout } from "@/layouts/HomeLayout";

export default function Home() {
  return (
    <>
      <Head>
        <title>Apiday</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeLayout />
    </>
  );
}
