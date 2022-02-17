import { createGlobalStyle } from 'styled-components';

import { QUERIES } from '@/theme';

export const GlobalStyles = createGlobalStyle`
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
    --spacing: 2rem;
  }

  @media (prefers-color-scheme: dark) {
    :root {
      --color-primary: hsl(0 0% 100%);
      --color-secondary: hsl(0 0% 0%);
      --color-background: hsl(0 0% 0%);
      --color-text: hsl(0 0% 100%);
    }
  }

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
  width: 8px;               /* width of the entire scrollbar */
}

body::-webkit-scrollbar-track {
  background: black;       
}

body::-webkit-scrollbar-thumb {
  background-color: var(--color-primary);
  border-radius: 00px;   /*    roundness of the scroll thumb */
  border: 1px solid var(--color-background);  /* creates padding around scroll thumb */
}

body::-webkit-scrollbar-thumb:hover {
  /* background-color: #222; */
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
