'use client';

import React, { useState, useEffect } from 'react';
import { Image, Container, Title, Text, Stack, SimpleGrid, Modal } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import classes from './styles.module.css';

interface ImageData {
    src: string;
    alt: string;
  }

    function GalleryPage({ serviceData, imagePaths }: { serviceData :any, imagePaths: any }) {
    const [images, setImages] = useState<ImageData[]>([]);
    const [opened, { open, close }] = useDisclosure(false);
    const [selectedImage, setSelectedImage] = useState<ImageData | null>(null);

    useEffect(() => {
      const fetchImages = async () => {
        setImages(imagePaths);
      };

      fetchImages();
    }, []);

    return (
      <>
      <Modal opened={opened} onClose={close} centered size="85%">
      { selectedImage ?
        (<Image
          src={selectedImage.src}
          alt={selectedImage.alt}
          height="700"
          width="auto"
        />) : (<></>)
       }
      </Modal>

      <Stack>
        <div style={{ textAlign: 'center' }}>
          <Title c="darkBlue" m={20}>{serviceData.title}</Title>
        </div>
        <Container>
          <Text m={10}>{serviceData.description}
          </Text>
        </Container>

      </Stack>

        <SimpleGrid cols={{ base: 1, sm: 2, lg: 4 }} m="xl">

                {images.map((image) => (

                    <Image
                      key={image.src}
                      className={classes.selectableImage}
                      src={image.src}
                      alt={image.alt}
                      h={400}
                      radius="md"
                      onClick={() => {
                        open();
                        setSelectedImage(image);
                      }}
                      width={300}
                      height={200}
                      placeholder="blur"
                    />

                ))}
        </SimpleGrid>

      </>
    );
  }

  export default GalleryPage;
