'use client';

import { useRef } from 'react';
import Autoplay from 'embla-carousel-autoplay';
import { Carousel } from '@mantine/carousel';
import { Container, Image, Text, Title } from '@mantine/core';
import classes from './CarouselHeroHeader.module.css';

import roof from '@/public/content/roofing/roofing (2).jpg';
import extension from '@/public/content/extensions/extension (1).jpg';
import loftconversion from '@/public/content/loftconversions/loft_conversion (3).jpg';

const images = [
        roof.src,
        extension.src,
        loftconversion.src,
    ];

function CarouselHeroHeader() {
    const slides = images.map((image) => (
        <Carousel.Slide key={image}>
        <Image src={image} height="100%" />
        </Carousel.Slide>
    ));

  const autoplay = useRef(Autoplay({ delay: 2000 }));
  return (
    <div className={classes.heroContainer}>

    <Carousel
      withIndicators
      loop
      height="30rem"
      plugins={[autoplay.current]}
      onMouseEnter={autoplay.current.stop}
      onMouseLeave={autoplay.current.reset}
    >
      {slides}
      {/* ...other slides */}

    </Carousel>

      <Container m={0} p={0} w="100%" className={classes.textContainer}>
          <Title order={2} c="darkBlue" fw={1000}>Specialist builders based in Essex</Title>
          <Text c="grey" fz="xl"> Call now on <a href="tel:07799 683073">07799 683073</a>  </Text>
      </Container>
    </div>
  );
}

export { CarouselHeroHeader };
