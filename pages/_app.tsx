import * as React from "react";
import { AppProps } from "next/dist/next-server/lib/router/router";
import Head from "next/head";

import "../styles/main.scss";
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';

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
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
