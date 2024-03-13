'use client';

import { Container, Grid, Title } from '@mantine/core';
import classes from './GooglemapsLocation.module.css';

const serviceAreas = [
  'Romford',
  'Hockley',
  'Leigh-on-Sea',
  'Stanford-le-hope',
  'Chelmsford, ',
  'Benfleet',
  'Westcliff, ',
  'Thorpe Bay ',
  'Horndon on the Hill',
  'Basildon,',
  'Wickford, ',
  'Rayleigh, ',
  'Southend-on-Sea ',
  'Grays',
  'Canvey',
  '& more...',
];

export default function GooglemapsLocation() {
  return (
    <article>

    <Container fluid mt="5rem">

      <Grid>
    <Grid.Col span={{ base: 12, md: 12, lg: 12 }}>
    <Title c="darkBlue">Areas we cover</Title>
      <ul className={classes.areasList}>
          {serviceAreas.map((area) => (
            <li key={area}> {area} </li>
          ))}
      </ul>
    </Grid.Col>
        <Grid.Col span={{ base: 12, md: 12, lg: 12 }}>
          <div className={classes.hideTop} />
          <iframe className={classes.location} title="OurLocation" src="https://www.google.com/maps/d/embed?mid=11i43HyMHgsNqNuNKpTfPJyC_v2r6Bko&ehbc=2E312F&noprof=1" width="640" height="640" />
        </Grid.Col>
      </Grid>
    </Container>
    </article>
  );
}
