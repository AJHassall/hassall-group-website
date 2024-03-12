'use client';

import { Container } from '@mantine/core';
import classes from './GooglemapsLocation.module.css';

export default function GooglemapsLocation() {
  return (
    <Container fluid p={0} mt="10rem">
      <iframe className={classes.location} title="OurLocation" src="https://www.google.com/maps/d/embed?mid=11i43HyMHgsNqNuNKpTfPJyC_v2r6Bko&ehbc=2E312F&noprof=1" width="640" height="480" />
    </Container>
  );
}
