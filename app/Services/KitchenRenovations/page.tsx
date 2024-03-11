'use client';

import React, { useState, useEffect } from 'react';
import { Grid, Image, Container } from '@mantine/core';

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
      const response = await fetch('/api/');
      const data = await response.json();
      setImages(data);
    };

    fetchImages();
  }, []);

  return (
    <>
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
    </>
  );
};

export default GalleryPage;
