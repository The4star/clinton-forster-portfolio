import * as React from "react";
import { AppProps } from "next/dist/next-server/lib/router/router";
import Head from "next/head";

import "../styles/main.scss";
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, maximum-scale=1"
        />
        <link
          rel="icon"
          href="favicon.ico"
        />
        <title>Clinton Forster Portfolio</title>
        <meta name="description" content="Clinton Forster is a Full Stack Developer with a passion for creating all forms of applications with special interest in React and Typescript." />
        <meta property="og:title" content="Clinton Forster Portfolio" key="ogtitle" />
        <meta property="og:description" content="Clinton Forster is a Full Stack Developer with a passion for creating all forms of applications with special interest in React and Typescript." key="ogdesc" />
        <meta property="og:image" content="https://cdn.pokko.io/66dac2b2-a989-482f-9032-5d3ad3b607aa/a10b0eb4-85c9-4539-a428-03baa4c41250" key="ogimage" />
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
