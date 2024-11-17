import Head from "next/head";
import { HomeLayout } from "@/layouts/HomeLayout";

export default function Home() {
  return (
    <>
      <Head>
        <title>Apiday</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div style={{ backgroundColor: "#07034f", padding: 8 }}>
        <img
          width={100}
          src="https://cdn.prod.website-files.com/63721a84a9a62db8eb794541/63736a71868f853b9bb0b3d0_logo-apiday_blanc.svg"
        />
      </div>
      <HomeLayout />
    </>
  );
}
