import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import {
  SplashScreen,
  NavBar,
  LayoutContainer,
  Header,
} from "../src/components/index";

const Home: NextPage = () => {
  return (
    <>
      <LayoutContainer>
        <Head>
          <title>Create Next App</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <SplashScreen />
        <NavBar />
        <Header />
        <NavBar />
        <main></main>
      </LayoutContainer>
    </>
  );
};

export default Home;
