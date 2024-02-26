'use client';

import Link from 'next/link';
import {
  Group,
  Divider,
  Box,
  Burger,
  Drawer,
  ScrollArea,
  rem,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import classes from './header.module.css';
import { Logo } from '../Logo/Logo';

export function Header() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
  return (
    <Box pb={120}>
      <header className={classes.header}>
        <Group justify="space-between" h="100%">
          <Logo />

          <Group h="100%" gap={0} visibleFrom="sm">
            <Link href="/AboutUs" className={classes.link}>
              About Us
            </Link>
            <Link href="/OurProjects" className={classes.link}>
              Our Projects
            </Link>
            <Link href="/Services" className={classes.link}>
              Our Services
            </Link>
          </Group>

          <Burger opened={drawerOpened} onClick={toggleDrawer} hiddenFrom="sm" />
        </Group>
      </header>

      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="md"
        title="Navigation"
        hiddenFrom="sm"
        zIndex={1000000}
      >
        <ScrollArea h={`calc(100vh - ${rem(80)})`} mx="-md">
          <Divider my="sm" />
            <Link href="/AboutUs" className={classes.link}>
              About Us
            </Link>
            <Link href="/OurProjects" className={classes.link}>
              Our Projects
            </Link>
            <Link href="/Services" className={classes.link}>
              Our Services
            </Link>
        </ScrollArea>
      </Drawer>
    </Box>
  );
}
