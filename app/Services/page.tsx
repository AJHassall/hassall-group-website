'use client';

import { Title, Text, Overlay, Center } from '@mantine/core';
import classes from './services.module.css';

export default function services() {
  return (

    <>
    <div>
        <Center>
        <Text component="div"><h1>Our Services</h1></Text>
        </Center>
    </div>
    <div className={classes.wrapper}>
      <Overlay color="#000" opacity={0.65} zIndex={1} />

      <div className={classes.inner}>
        <Title className={classes.title}>
          Loft conversions{' '}
        </Title>

      </div>
    </div>
    <div className={classes.wrapper}>
      <Overlay color="#000" opacity={0.65} zIndex={1} />

      <div className={classes.inner}>
        <Title className={classes.title}>
          Extensions{' '}
        </Title>
      </div>
    </div>
    <div className={classes.wrapper}>
      <Overlay color="#000" opacity={0.65} zIndex={1} />

      <div className={classes.inner}>
        <Title className={classes.title}>
          Loft conversions{' '}
        </Title>
      </div>
    </div>
    </>
);
}
