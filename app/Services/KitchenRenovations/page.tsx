'use client';

import { Title, Image, Container, Center } from '@mantine/core';
import { FaqSimple, GetInTouchSimple } from '@/components';

export default function LoftConversions() {
  return (

    <>
        <Container>
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
