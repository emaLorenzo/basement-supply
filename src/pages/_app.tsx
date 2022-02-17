import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

import { GlobalStyles } from '@/components/GlobalStyles';
import { QUERIES } from '@/theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={{ queries: QUERIES }}>
      <Component {...pageProps} />
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default MyApp;
