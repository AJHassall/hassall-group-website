'use client';

import { Center, Container, Flex, Stack, Text} from '@mantine/core';
import { CarouselCard } from '@/components';

export default function AboutUs() {
    return (
        <>
             <Container p={10}>
              <Center>
                <Text component="div"><h1>Our Components</h1></Text>

              </Center>

              <Center>
                <CarouselCard />
              </Center>
              <Center>
                <CarouselCard />
              </Center>
              <Center>
                <CarouselCard />
              </Center>
              <Center>
                <CarouselCard />
              </Center>
             </Container>

        </>
      );
}
