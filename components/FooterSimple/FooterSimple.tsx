'use client';

import { Container, Group, Anchor, Box, Button, Paper } from '@mantine/core';
import Link from 'next/link';
import classes from './FooterSimple.module.css';
import { Logo } from '../Logo/Logo';

const links = [
  { link: '#', label: 'Facebook' },
  { link: '#', label: 'Instagram' },
];

export function FooterSimple() {
  const items = links.map((link) => (
    <Anchor<'a'>
      c="white"
      key={link.label}
      href={link.link}
      size="xl"
    >
      {link.label}
    </Anchor>
  ));

  return (
    <>
    <div className={classes.footerSpacer} />
    <Box component="div" className={classes.footerWrapper} bg="blue">
      <Container className={classes.inner}>
        <Paper pl="lg" pr="lg">
        <Logo size={256} />
        </Paper>
        <Group className={classes.links} p="lg">
          {items}
          <Link href="/get-a-quote">
            <Button variant="filled">Get a Quote</Button>
          </Link>
        </Group>
      </Container>
    </Box>
    </>
  );
}
