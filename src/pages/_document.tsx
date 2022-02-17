import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          rel="preload"
          href="/fonts/basement-grotesqueBlack.woff"
          as="font"
          type="font/woff"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/basement-grotesqueBlack.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link href="/images/favicons/favicon.ico" rel="icon" />
        <link href="/images/favicons/site.webmanifest" rel="manifest" />
        <link
          href="/images/favicons/apple-touch-icon.png"
          rel="apple-touch-icon"
          sizes="180x180"
        />
        <link
          href="/images/favicons/favicon-32x32.png"
          rel="icon"
          sizes="32x32"
          type="image/png"
        />
        <link
          href="/images/favicons/favicon-16x16.png"
          rel="icon"
          sizes="16x16"
          type="image/png"
        />
        <link color="#000000" rel="mask-icon" />
        <meta content="#000000" name="theme-color" />
        <meta content="#000000" name="msapplication-TileColor" />
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
