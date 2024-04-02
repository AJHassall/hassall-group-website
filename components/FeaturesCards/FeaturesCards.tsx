'use client';

import {
  Text,
  Card,
  SimpleGrid,
  Container,
  rem,
} from '@mantine/core';
import { IconWall, IconUser, IconClockHour4 } from '@tabler/icons-react';
import classes from './FeaturesCards.module.css';

const mockdata = [
  {
    title: 'Quality Craftsmanship',
    description:
      'Our skilled team takes pride in meticulous attention to detail, delivering projects that reflect superior workmanship and enduring quality.',
    icon: IconWall,
  },
  {
    title: 'Client-Focused',
    description:
      'We prioritize open communication and collaboration, ensuring your vision guides the process and your needs are met at every stage.',
    icon: IconUser,
  },
  {
    title: 'Timely & Efficient',
    description:
      'With streamlined processes and a commitment to deadlines, we strive to complete projects on time and within budget.',
    icon: IconClockHour4,
  },
];

export function FeaturesCards() {
  const features = mockdata.map((feature) => (
    <Card key={feature.title} shadow="md" radius="md" className={classes.card} padding="xl">
      <feature.icon
        style={{ width: rem(50), height: rem(50) }}
        stroke={2}
        color="darkBlue"
      />
      <Text fz="lg" fw={500} className={classes.cardTitle} mt="md">
        {feature.title}
      </Text>
      <Text fz="sm" c="dimmed" mt="sm">
        {feature.description}
      </Text>
    </Card>
  ));

  return (
    <Container size="lg" py="xl">
      <SimpleGrid cols={{ base: 1, md: 3 }} spacing="xl" mt={50}>
        {features}
      </SimpleGrid>
    </Container>
  );
}
