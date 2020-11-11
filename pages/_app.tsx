import { AppProps } from "next/app";
import Head from "next/head";

import "../index.css";
import "tachyons/css/tachyons.min.css";

const App: React.FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,shrink-to-fit=no,viewport-fit=cover"
        />
        <title>Tyler Deitz</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default App;
