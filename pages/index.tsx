import { NextPage, GetStaticProps, InferGetStaticPropsType } from "next";
import { Fragment, useState } from "react";
import { formatDistanceToNow, parseISO } from "date-fns";

type Chan = {
  id: string;
  title: string;
  length: string;
  updated_at: string;
  slug: string;
};

type Link = {
  href: string;
  title: string;
};

type Props = {
  chans: Chan[] | null;
};

const spacer = <>&nbsp;&nbsp;</>;

const Page: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  chans,
}) => {
  const [moreLinksIndex, setMoreLinksIndex] = useState(0);

  const moreLinksButton = (
    <>
      {spacer}
      <button
        className="input-reset b--none bg-transparent pa0 cool-blue ellipses-loader"
        onClick={() => {
          setMoreLinksIndex(moreLinksIndex + 1);
        }}
      >
        …
      </button>
    </>
  );

  return (
    <>
      <h1 className="mb0 f4 fw5 i mt3 mh3">Tyler Deitz</h1>

      <p className="mv0 sans mh3">
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
        {moreLinksIndex === 0 && moreLinksButton}
      </p>

      {moreLinksIndex > 0 && (
        <p className="mv0 sans mh3">
          <a className="cool-blue" href="mailto:tylerdeitz@gmail.com">
            Email
          </a>
          {moreLinksIndex === 1 && moreLinksButton}
        </p>
      )}

      {moreLinksIndex > 1 && (
        <p className="mv0 sans mh3">
          <a
            className="cool-blue"
            href="https://www.linkedin.com/in/tyler-deitz/"
          >
            LinkedIn
          </a>
          {moreLinksIndex === 2 && moreLinksButton}
        </p>
      )}

      {moreLinksIndex > 2 && (
        <p className="mv0 sans mh3">
          <a className="cool-blue" href="https://gist.github.com/tvler">
            Gists
          </a>
          {moreLinksIndex === 3 && moreLinksButton}
        </p>
      )}

      {moreLinksIndex > 3 && (
        <p className="mv0 sans mh3">
          <a className="cool-blue" href="https://bandcamp.com/beyblader365">
            Bandcamp
          </a>
          {moreLinksIndex === 4 && moreLinksButton}
        </p>
      )}

      {moreLinksIndex > 4 && (
        <p className="mv0 sans mh3">
          <a className="cool-blue" href="https://www.instagram.com/tvler/">
            Instagram
          </a>
          {moreLinksIndex === 5 && moreLinksButton}
        </p>
      )}

      {moreLinksIndex > 5 && <p className="mv0 mh3">☯&#xFE0E;</p>}

      <p className="mt4 measure-phrase mh3 mb0">
        Hi! I’m a software engineer interested in web technologies, interfaces,
        platforms, and culture.
      </p>

      <p className="mt4 mh3 mb0 measure-phrase">
        I live in Silver Lake, Los Angeles, and work at Opendoor.
      </p>

      {chans && (
        <>
          <p className="mt4 measure-phrase mh3 mb0">
            Three recent Are.na channels of mine:
          </p>

          <div className="mh3 mt4 gap3 grid columns-auto-fit-block rows-auto-block">
            {chans.map((chan) => {
              return (
                <a
                  key={chan.id}
                  href={`https://www.are.na/channel/${chan.slug}`}
                  className="ba b--cool-green br1 bg-white flex flex-column cool-green justify-center items-center tc sans no-underline ph3"
                >
                  <span>{chan.title}</span>
                  <span className="f8">
                    {chan.length} blocks • {chan.updated_at}
                  </span>
                </a>
              );
            })}
          </div>
        </>
      )}

      <p className="mt4 mh3 mb0 i mb3">
        Thanks for visiting,
        <br />
        Tyler
      </p>
    </>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const res = await fetch("https://api.are.na/v2/users/6442/channels", {
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${process.env.ARENA_TOKEN}`,
    },
  });

  const data: {
    channels?: Chan[];
  } = await res.json();

  const chans =
    data?.channels?.slice(0, 3).map((c) => ({
      id: c.id,
      title: c.title,
      length: c.length,
      updated_at: formatDistanceToNow(parseISO(c.updated_at), {
        addSuffix: true,
      }),
      slug: c.slug,
    })) || null;

  return {
    props: {
      chans,
    },
    revalidate: 60 * 10, // 10 min
  };
};

export default Page;
