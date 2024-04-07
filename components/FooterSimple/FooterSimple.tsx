'use client';

import { Container, Group, Box, Paper, ActionIcon, rem } from '@mantine/core';
import { IconBrandFacebook, IconBrandInstagram, IconBrandYoutube } from '@tabler/icons-react';
import classes from './FooterSimple.module.css';
import { Logo } from '../Logo/Logo';

export function FooterSimple() {
  return (
    <>
    <div className={classes.footerSpacer} />
    <Box component="div" className={classes.footerWrapper}>
      <Container className={classes.inner}>
        <Paper pl="lg" pr="lg" style={{ backgroundColor: 'rgba(0,0,0,0)' }}>
        <Logo size={200} />
        </Paper>

        <Group pr="lg" gap="sm" justify="flex-end" wrap="nowrap">
          <ActionIcon size="lg" variant="default" radius="xl">
            <IconBrandFacebook style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg" variant="default" radius="xl">
            <IconBrandYoutube style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg" variant="default" radius="xl">
            <IconBrandInstagram style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
          </ActionIcon>
        </Group>
      </Container>
    </Box>
    </>
  );
}
