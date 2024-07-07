'use client';

import { Button, Container, Title, Text, em } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import Link from 'next/link';
import classes from './CarouselHeroHeader.module.css';

import landscaping from '@/public/content/landscaping/landscaping (15).webp';
import conversion from '@/public/content/conversions/conversions (9).webp';
import porch from '@/public/content/porches/porch.webp';
import kitchen from '@/public/content/kitchenrenovations/kitchen_renovation (8).webp';
import bathroom from '@/public/content/bathrooms/Bathroom (8).webp';

const images = [
        landscaping.src,
        conversion.src,
        porch.src,
        kitchen.src,
        bathroom.src,
    ];

    export function CarouselHeroHeader() {
      const isMobile = useMediaQuery('(min-width: 750px)');
      return (
        <div className={classes.root}>
          <Container size="lg">
            <div className={classes.inner}>
              <div className={classes.content}>
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

                {isMobile && (

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
                )}

                <Button
                  variant="gradient"
                  gradient={{ from: 'pink', to: 'yellow' }}
                  size="xl"
                  className={classes.control}
                  mt={40}
                >
                  Contact
                </Button>
              </div>
            <div>
              {/* table of contents */}
              <Link href="/About" className={classes.link}>
                <Title className={classes.title} td="underline">
                  Reviews
                </Title>
              </Link>
              <Link href="/About" className={classes.link}>
                <Title className={classes.title} td="underline">
                  Projects
                </Title>
              </Link>
              <Link href="/About" className={classes.link}>
                <Title className={classes.title} td="underline">
                  About
                </Title>
              </Link>
              <Link href="/About" className={classes.link}>
                <Title className={classes.title} td="underline">
                  Services
                </Title>
              </Link>
            </div>
            </div>
          </Container>
        </div>
      );
    }
