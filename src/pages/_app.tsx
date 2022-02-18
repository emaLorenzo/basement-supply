import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import * as Dialog from '@radix-ui/react-dialog';

import { GlobalStyles } from '@/components/GlobalStyles';
import { Overlay } from '@/components';
import { QUERIES } from '@/theme';

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={{ queries: QUERIES }}>
      <Dialog.Root>
        <GlobalStyles />
        <Overlay />
        <Component {...pageProps} />
      </Dialog.Root>
    </ThemeProvider>
  );
}

export default App;
