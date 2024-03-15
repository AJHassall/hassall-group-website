'use client';

import { Container } from '@mantine/core';
import classes from './GooglemapsLocation.module.css';

// const serviceAreas = [
//   'Romford',
//   'Hockley',
//   'Leigh-on-Sea',
//   'Stanford-le-hope',
//   'Chelmsford, ',
//   'Benfleet',
//   'Westcliff, ',
//   'Thorpe Bay ',
//   'Horndon on the Hill',
//   'Basildon,',
//   'Wickford, ',
//   'Rayleigh, ',
//   'Southend-on-Sea ',
//   'Grays',
//   'Canvey',
//   '& more...',
// ];

export default function GooglemapsLocation() {
  return (
    <article>

    <Container fluid>

          <div className={classes.hideTop} />
          <iframe className={classes.location} title="OurLocation" src="https://www.google.com/maps/d/embed?mid=11i43HyMHgsNqNuNKpTfPJyC_v2r6Bko&ehbc=2E312F&noprof=1" />

    </Container>
    </article>
  );
}
