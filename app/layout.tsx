import type { Metadata } from 'next';
import { MantineProvider, ColorSchemeScript, Box } from '@mantine/core';
import { NextAppDirEmotionCacheProvider } from 'tss-react/next/appDir';
import Head from 'next/head';
import { theme } from '@/lib/theme';
import { Header } from '@/components/Header/Header';
import { ContactForm, FooterSimple } from '@/components';
import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';
import './layout.css';

export const metadata: Metadata = {
  title: 'Hassall-Group-Ltd',
  description: '',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <Head>
        <ColorSchemeScript defaultColorScheme="light" />
      </Head>
      <body>
        <NextAppDirEmotionCacheProvider options={{ key: 'css' }}>
          <MantineProvider defaultColorScheme="light" theme={theme}>
              <Header />
              <Box component="main" bg="white">
                {children}
                <ContactForm/>
              </Box>
              <FooterSimple />
          </MantineProvider>
        </NextAppDirEmotionCacheProvider>

      </body>
    </html>
  );
}
