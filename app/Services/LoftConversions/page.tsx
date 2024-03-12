'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Grid, Image, Container, Title, Text, Stack } from '@mantine/core';
import { Carousel } from '@mantine/carousel';
import Autoplay from 'embla-carousel-autoplay';
import classes from './styles.module.css';

interface ImageData {
  src: string;
  alt: string;
}

const GalleryPage = () => {
  const [images, setImages] = useState<ImageData[]>([]);
  const [selectedImage, setSelectedImage] = useState<ImageData | null>(null);

  useEffect(() => {
    const fetchImages = async () => {
      const response = await fetch('/api/loftconversions');
      const data = await response.json();
      setImages(data);

      if (data.length > 0) {
        setSelectedImage(data[0]);
      }
    };

    fetchImages();
  }, []);

  const slides = images.map((image) => (
      <Carousel.Slide key={image.src}>
      <Image src={image.src} height={700} />
      </Carousel.Slide>
  ));
  const autoplay = useRef(Autoplay({ delay: 2000 }));

  return (
    <>
    <Stack>
      <div style={{ textAlign: 'center' }}>
      <Container size="xs">
        <Title c="darkBlue" m={20}>Kitchen Renovations</Title>
      </Container>
      </div>
      <div>
        <Text p={10}>Invest in your home and lifestyle with
        a stunning loft conversion.  Maximize your living space,
         transforming your unused attic into a beautiful and functional
         room.  We offer expert craftsmanship, high-quality materials,
         and stylish designs to elevate your homes value and your quality of life.
        </Text>
      </div>

    </Stack>
    <div className={classes.desktopImageViewer}>

    <Container fluid>

      <Grid m={0} p={0}>
        <Grid.Col span={6}>
          <div>

          {selectedImage ? (
            <Image
              src={selectedImage.src}
              alt={selectedImage.alt}
              height="700"
              width="auto"
            />
            ) : (
              <div>Click an image to view</div>
              )}
          </div>
        </Grid.Col>
        <Grid.Col span={6}>
          <Grid grow gutter="xs">
              {images.map((image) => (
                <Grid.Col key={image.src} span={4}>
                  <div className={classes.selectableImage}>
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={300}
                    height={200}
                    onClick={() => setSelectedImage(image)}
                  />
                  </div>
                </Grid.Col>
              ))}
          </Grid>
        </Grid.Col>
      </Grid>
    </Container>
    </div>
    <div className={classes.mobileImageViewer}>

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
    </div>

    </>
  );
};

export default GalleryPage;
