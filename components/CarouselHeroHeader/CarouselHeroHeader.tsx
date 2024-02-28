'use client';

import { useRef } from 'react';
import Autoplay from 'embla-carousel-autoplay';
import { Carousel } from '@mantine/carousel';
import { Container, Image, Text, Title } from '@mantine/core';
import classes from './CarouselHeroHeader.module.css';

const images = [
    'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
    'https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
    'https://images.unsplash.com/photo-1605774337664-7a846e9cdf17?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
    'https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
    'https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
    ];

function CarouselHeroHeader() {
    const slides = images.map((image) => (
        <Carousel.Slide key={image}>
        <Image src={image} height={700} />
        </Carousel.Slide>
    ));

  const autoplay = useRef(Autoplay({ delay: 2000 }));
  return (
    <div className={classes.heroContainer}>

    <Carousel
      withIndicators
      loop
      height={700}
      plugins={[autoplay.current]}
      onMouseEnter={autoplay.current.stop}
      onMouseLeave={autoplay.current.reset}
    >
      {slides}
      {/* ...other slides */}

    </Carousel>

      <Container bg="white" className={classes.textContainer}>
          <Title order={2} c="black" fw={700}>Specialist Builders Essex and Canvey</Title>
          <Text> Call now on 00000-000000  </Text>
      </Container>
    </div>
  );
}

export default CarouselHeroHeader;
