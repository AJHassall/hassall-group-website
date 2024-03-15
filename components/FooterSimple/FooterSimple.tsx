'use client';

import { Container, Group, Anchor, Box, Button } from '@mantine/core';
import Link from 'next/link';
import classes from './FooterSimple.module.css';
import { Logo } from '../Logo/Logo';

const links = [
  { link: '#', label: 'Contact' },
  { link: '#', label: 'Privacy' },
  { link: '#', label: 'Blog' },
  { link: '#', label: 'Careers' },
];

export function FooterSimple() {
  const items = links.map((link) => (
    <Anchor<'a'>
      c="darkBlue"
      key={link.label}
      href={link.link}
     // onClick={(event) => event.preventDefault()}
      size="xl"
    >
      {link.label}
    </Anchor>
  ));

  return (
    <>
    <div className={classes.footerSpacer} />
    <Box component="div" className={classes.footerWrapper}>
      <Container className={classes.inner}>
        <Logo size={256} />
        <Group className={classes.links}>
          {items}
          <Link href="/get-a-quote">
            <Button variant="outline">Get a Quote</Button>
          </Link>
        </Group>
      </Container>
    </Box>
    </>
  );
}
