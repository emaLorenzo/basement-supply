import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Basement Supply</title>
        <meta name="description" content="Get your basement swag here" />
        <meta
          name="keywords"
          content="basement, swag, supplies, tshirt, cap, hoddie"
        />
        <meta name="author" content="Emanuel Lorenzo" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 style={{ fontSize: '8rem' }}>BASEMENT SUPPLY</h1>

        <p>
          A man can’t have enough base­ment swag  —  A man can’t have enough
          base­ment swag
        </p>
      </main>
    </div>
  );
};

export default Home;
