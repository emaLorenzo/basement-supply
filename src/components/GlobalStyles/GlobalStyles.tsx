import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'basement-grotesque';
    src: url('/fonts/basement-grotesqueRegular.woff2') format('woff2'),
        url('/fonts/basement-grotesqueRegular') format('woff');
    font-weight: 500;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
      font-family: 'basement-grotesque';
      src: url('/fonts/basement-grotesqueBlack.woff2') format('woff2'),
          url('/fonts/basement-grotesqueBlack') format('woff');
      font-weight: 700;
      font-style: normal;
      font-display: swap;
  }

  :root {
    --color-primary: hsl(0 0% 0%);
    --color-secondary: hsl(0 0% 100%);
    --color-background: hsl(0 0% 100%);
    --color-text: hsl(0 0% 0%);
  }

  @media (prefers-color-scheme: dark) {
    :root {
      --color-primary: hsl(0 0% 100%);
      --color-secondary: hsl(0 0% 0%);
      --color-background: hsl(0 0% 0%);
      --color-text: hsl(0 0% 100%);
    }
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }
  * {
    margin: 0;
  }
  html, body {
    height: 100%;
    scroll-behavior: smooth;
  }
  body {
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    font-family: 'basement-grotesque', -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    background-color: var(--color-background);
    color: var(--color-text);
  }
  img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
  }
  input, button, textarea, select {
    font: inherit;
  }
  p, h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word;
  }
  #__next {
    isolation: isolate;
    height: 100%;
  }
`;
