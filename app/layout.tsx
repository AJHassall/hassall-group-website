import type { Metadata } from 'next';
import { MantineProvider, ColorSchemeScript, Box } from '@mantine/core';
import { NextAppDirEmotionCacheProvider } from 'tss-react/next/appDir';
import { ReCaptchaProvider } from 'next-recaptcha-v3';
import { theme } from '@/lib/theme';
import { Header } from '@/components/Header/Header';
import { FooterSimple } from '@/components';
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
      <head>
        <ColorSchemeScript defaultColorScheme="light" />
      </head>
      <body>
        <NextAppDirEmotionCacheProvider options={{ key: 'css' }}>
          <MantineProvider defaultColorScheme="light" theme={theme}>
            <ReCaptchaProvider useEnterprise>
              <Header />
              <Box component="main" bg="white">
                {children}
              </Box>
              <FooterSimple />
            </ReCaptchaProvider>

          </MantineProvider>
        </NextAppDirEmotionCacheProvider>

      </body>
    </html>
  );
}
