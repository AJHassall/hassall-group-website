'use client';

import { Title, Image, Container, Center } from '@mantine/core';
import { FaqSimple, GetInTouchSimple } from '@/components';

export default function LoftConversions() {
  return (

    <>
        <Container m={10}>
        <Center>
            <Title order={2}>Loft Conversions</Title>
        </Center>
        <Image
          src="/content/kitchen.jpg"
          h={400}
          w={1000}
        />

        <FaqSimple />
        <GetInTouchSimple />
        </Container>

    </>
);
}
