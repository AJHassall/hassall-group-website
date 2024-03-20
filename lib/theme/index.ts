'use client';

import {
  createTheme,
  DEFAULT_THEME,
  MantineBreakpointsValues,
  mergeMantineTheme,
} from '@mantine/core';
import { themeToVars } from '@mantine/vanilla-extract';
import { Roboto } from 'next/font/google';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
});

export const themeOverride = createTheme({
  primaryColor: 'orange',
  other: {
    maxApplicationWidth: 1440,
  },
  colors: {
    lightBlue: ['#0190b8', '#0190b8', '#0190b8', '#0190b8', '#0190b8', '#0190b8', '#0190b8', '#0190b8', '#0190b8', '#0190b8'],
    darkBlue: ['#3b4c77', '#3b4c77', '#3b4c77', '#3b4c77', '#3b4c77', '#3b4c77', '#3b4c77', '#3b4c77', '#3b4c77', '#3b4c77'],
    grey: ['#919fa4', '#919fa4', '#919fa4', '#919fa4', '#919fa4', '#919fa4', '#919fa4', '#919fa4', '#919fa4', '#919fa4'],
  },
  fontFamily: roboto.style.fontFamily,
  fontFamilyMonospace: roboto.style.fontFamily,
  headings: { fontFamily: roboto.style.fontFamily },
});

export const theme = mergeMantineTheme(DEFAULT_THEME, themeOverride);

export const vars = themeToVars(theme);

/** Theme media query helper for use in TSS syntax
 * @returns
 * ```
 * {
 *  xs: '@media (max-width: 36em)',
 *  sm: '@media (max-width: 48em)',
 *  md: '@media (max-width: 62em)',
 *  lg: '@media (max-width: 75em)',
 *  xl: '@media (max-width: 88em)'
 * }
 * ```
 * Use in TSS css syntax like this:
 * ```
 *  [`${mq.sm}`]: {
 *    margin: 12px
 *  }
 * ```
 */
export const mq = Object.keys(theme.breakpoints).reduce(
  (acc, mantineSize) => ({
    ...acc,
    [mantineSize]: `@media ${vars.smallerThan(mantineSize)}`,
  }),
  {} as Record<keyof MantineBreakpointsValues, string>
);
