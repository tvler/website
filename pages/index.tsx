import { NextPage } from "next";
import Head from "next/head";

const spacer = <>&nbsp;&nbsp;</>;

const Page: NextPage = () => {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="me" href="https://mastodon.social/@tvler" />
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

      <p className="measure-phrase mh3">
        Software engineer in Los Angeles working at
        Mirror (<a className="cool-blue" href="https://abc.mirror.xyz/">abc.mirror.xyz</a>).
      </p>

      <p className="measure-phrase mh3">
        Previously – Open Listings (acq by Opendoor), iFixit, and a bit of work for&nbsp;Are.na.
      </p>

      <p className="mh3">
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
