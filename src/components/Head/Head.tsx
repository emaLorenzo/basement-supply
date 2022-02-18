import NextHead from 'next/head';

export const Head = () => (
  <NextHead>
    <title>Basement Supply</title>
    <meta name="description" content="Get your basement swag here" />
    <meta
      name="keywords"
      content="basement, swag, supplies, tshirt, cap, hoddie"
    />
    <meta name="author" content="Emanuel Lorenzo" />
    <meta name="robots" content="follow, index" />
    <meta property="og:title" content="Basement Supply" />
    <meta
      property="og:description"
      content="A man can’t have enough base­ment swag"
    />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://basement-supply.emalorenzo.com/" />
    <meta
      property="og:image"
      content="https://basement-supply.emalorenzo.com/images/og.png"
    />
    <link rel="icon" href="/favicon.ico" />
  </NextHead>
);
