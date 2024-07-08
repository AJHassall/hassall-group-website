'use client';

import { Button, Container, Title, Text } from '@mantine/core';
import classes from './CarouselHeroHeader.module.css';

import { Wave } from '../Wave/wave';

    export function CarouselHeroHeader() {
      return (
        <section className={classes.root} style={{ position: 'relative' }}>
          <Container size="lg">
            <div className={classes.inner}>
              <div className={classes.content}>
                <div className={classes.left}>

                <Title className={classes.title}>
                  Your Trusted Building Partner,{' '}
                  <Text
                    component="span"
                    inherit
                    variant="gradient"
                    gradient={{ from: 'yellow', to: 'pink' }}
                  >
                    Hassall Group Ltd
                  </Text>{' '}
                </Title>

                  <Text className={classes.description} mt={20} fz="lg" c="white">
                    Welcome to Hassall Group, a principal building and landscaping company.
                    We cover all aspects of Extensions, Conversions, Bricklaying, Carpentry,
                    Plastering, Groundworks
                    and Roofing throughout Essex. We stand out with a commitment to precision and
                    craftsmanship in every project.
                    Our landscaping seamlessly blends aesthetics and functionality.
                    We are Dedicated to customer
                    satisfaction and
                    we prioritize open communication, transparency.
                    Hassall Group for your building journey,
                    where excellence is
                    guaranteed in every aspect.
                  </Text>

                <Button
                  variant="gradient"
                  gradient={{ from: 'pink', to: 'yellow' }}
                  size="xl"
                  className={classes.control}
                  mt={40}
                >
                  Contact
                </Button>
                <div />
                </div>
              <div className={classes.right} />
              </div>
            </div>
          </Container>

          <Wave colour="#36454F" />

        </section>
      );
    }
