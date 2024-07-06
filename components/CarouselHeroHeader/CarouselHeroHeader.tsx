'use client';

import { useRef } from 'react';
import Autoplay from 'embla-carousel-autoplay';
import { Carousel } from '@mantine/carousel';
import Link from 'next/link';
import { Container, Image, Title } from '@mantine/core';
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

function CarouselHeroHeader(props: any) {
    const slides = images.map((image) => (
        <Carousel.Slide key={image}>
        <Image src={image} height="100%" />
        </Carousel.Slide>
    ));

  const autoplay = useRef(Autoplay({ delay: 4000 }));
  return (
    <div className={classes.heroContainer} {...props}>

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
          <Title style={{ textShadow: '2px 2px #000' }} order={1} c="white" fw={1000}>Specialist builders based in Essex</Title>
          <Title style={{ textShadow: '2px 2px #000' }} order={2} c="white"> Call now on <Link className={classes.link} href="tel:07799 683073">07799 683073</Link>  </Title>
      </Container>
    </div>
  );
}

export { CarouselHeroHeader };
