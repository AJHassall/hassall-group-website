import type { Metadata } from 'next';
import { MantineProvider, ColorSchemeScript } from '@mantine/core';
import { NextAppDirEmotionCacheProvider } from 'tss-react/next/appDir';
import { theme } from '@/lib/theme';
import '@mantine/core/styles.css';
import { Header } from '@/components/Header/Header';
import '@mantine/carousel/styles.css';
import './layout.css';
import GooglemapsLocation from '@/components/GooglemapsLocation/GooglemapsLocation';

export const metadata: Metadata = {
  title: 'Hassall-Group-Ltd',
  description: '',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript defaultColorScheme="light" />
      </head>
      <body>
        <NextAppDirEmotionCacheProvider options={{ key: 'css' }}>
          <MantineProvider defaultColorScheme="light" theme={theme}>
            <Header />
            {children}
            <GooglemapsLocation />
          </MantineProvider>
        </NextAppDirEmotionCacheProvider>

      </body>
    </html>
  );
}
