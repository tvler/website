import { NextPage } from "next";
import Head from "next/head";

const spacer = <>&nbsp;&nbsp;</>;

const Page: NextPage = () => {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,shrink-to-fit=no,viewport-fit=cover"
        />
        <meta
          name="description"
          content="Tyler Deitz is a software engineer who lives in Los Angeles and works at Mirror."
        />
        <title>Tyler Deitz</title>
      </Head>

      <p className="mt5 measure-phrase mh3">
        Software engineer interested in web technologies, user
        interfaces, platforms and culture. I live in Los Angeles and work at
        Mirror.
      </p>

      <p className="mt4 mh3">
        <a className="cool-blue" href="https://github.com/tvler">
          GitHub
        </a>
        {spacer}
        <a className="cool-blue" href="https://www.are.na/tyler-deitz">
          Are.na
        </a>
        {spacer}
        <a className="cool-blue" href="https://twitter.com/ty___ler">
          Twitter
        </a>
        {spacer}
        <a className="cool-blue" href="mailto:tylerdeitz@gmail.com">
          Email
        </a>
      </p>
    </>
  );
};

export default Page;
