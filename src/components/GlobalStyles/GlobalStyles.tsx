import { createGlobalStyle } from 'styled-components';

import { QUERIES } from '@/theme';

export const GlobalStyles = createGlobalStyle`
  @font-face {
      font-family: 'basement-grotesque';
      src: url('/fonts/basement-grotesqueBlack.woff2') format('woff2');
      font-weight: 700;
      font-style: normal;
      font-display: swap;
  }

  :root {
    --spacing: 2rem;
    --active: hsl(0 0% 40%);
    --hover: hsl(0 0% 20%);

    --color-primary: hsl(0 0% 100%);
    --color-secondary: hsl(0 0% 0%);
    --color-background: hsl(0 0% 0%);
    --color-text: hsl(0 0% 100%);
  }

  /* @media (prefers-color-scheme: light) {
    :root {
      --color-primary: hsl(0 0% 100%);
      --color-secondary: hsl(0 0% 0%);
      --color-background: hsl(0 0% 80%);
      --color-text: hsl(0 0% 100%);
      --spacing: 2rem;
      --active: hsl(0 0% 40%);
      --hover: hsl(0 0% 20%);
    }
  } */

  @media ${QUERIES.mobile} {
    :root {
      --spacing: 1rem;
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
body::-webkit-scrollbar {
  width: 8px;
}

body::-webkit-scrollbar-track {
  background: black;       
}

body::-webkit-scrollbar-thumb {
  background-color: var(--color-primary);
  border-radius: 00px;   /*    roundness of the scroll thumb */
  border: 1px solid var(--color-background);  /* creates padding around scroll thumb */
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
