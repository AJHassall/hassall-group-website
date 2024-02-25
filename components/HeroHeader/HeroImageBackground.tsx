import cx from 'clsx';
import { Title, Text, Container, Button, Overlay } from '@mantine/core';
import classes from './HeroImageBackground.module.css';

export function HeroImageBackground() {
  return (
    <div className={classes.wrapper}>
      <Overlay color="#000" opacity={0.65} zIndex={1} />

      <div className={classes.inner}>
        <Title className={classes.title}>
          Building Specialist Essex{' '}
          <Text component="span" inherit className={classes.highlight}>
            
          </Text>
        </Title>

        <Container size={640}>
          <Text size="lg" className={classes.description}>
            
          </Text>
        </Container>

        <div className={classes.controls}>
          <Button className={classes.control} variant='white' size="lg">
            Our Services
          </Button>
          <Button className={cx(classes.control, classes.control)} variant='white' size="lg">
            See Our Work 
          </Button>
          <Button className={cx(classes.control, classes.control)} variant='white' size="lg">
            Contact Us
          </Button>
        </div>
      </div>
    </div>
  );
}