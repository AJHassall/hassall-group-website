'use client';

import { Title, Image, Container, Center } from '@mantine/core';
import { FaqSimple, GetInTouchSimple } from '@/components';

export default function LoftConversions() {
  return (

    <>
        <Container>

        <Center>
            <Title order={2}><h1>Loft Conversions</h1></Title>
        </Center>
        <Image
          src="/content/kitchen.jpg"
          h={400}
        />

        <FaqSimple />
        <GetInTouchSimple />
        </Container>

    </>
);
}
