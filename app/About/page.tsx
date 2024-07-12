import { Image, Container, Text } from '@mantine/core';
import pops from '@/public/content/TheFounderOfTheFounder.webp';
import prefix from '../prefix';

export default function About() {
  return (
    <Container>
      <div>
        <h1>About Hassall Group Ltd</h1>
        <Text c="darkBlue">
           Much like everything we do, Hassall Group Ltd is built on strong foundations

        </Text>
      </div>
        <Image
          src={`${prefix}${pops.src}`}
          //p="lg"
          alt="The Founder of the Founder"
          width={800}
          height="auto"
          radius="md"
        />
    </Container>
  );
}
