'use client';

import {
  Badge,
  Group,
  Title,
  Text,
  Card,
  SimpleGrid,
  Container,
  rem,
} from '@mantine/core';
import { IconHammer, IconUser, IconClock2 } from '@tabler/icons-react';
import classes from './FeaturesCards.module.css';

const mockdata = [
  {
    title: 'Quality Craftsmanship',
    description:
      'Our skilled team takes pride in meticulous attention to detail, delivering projects that reflect superior workmanship and enduring quality.',
    icon: IconHammer,
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
    icon: IconClock2,
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
      <Group justify="center">
        <Badge variant="filled" size="lg">
          Hassall Group Ltd
        </Badge>
      </Group>

      <Title order={2} className={classes.title} ta="center" mt="sm">
        Your Trusted Building Partner
      </Title>

    <Text c="dimmed" className={classes.description} w="100%" ta="justify" mt="md" p={0}>
    Welcome to Hassall Group, A principal building and landscaping company.
     We cover all aspects of Extensions, Conversions, Bricklaying, Carpentry, Plastering,
      Groundworks, and Roofing. We stand out with a commitment to precision and craftsmanship
      in every project. Our landscaping seamlessly blends aesthetics and functionality.
      Dedicated to customer satisfaction, we prioritize open communication, transparency.
      Hassall Group for your building journey, where excellence is guaranteed in every aspect.
    </Text>

      <SimpleGrid cols={{ base: 1, md: 3 }} spacing="xl" mt={50}>
        {features}
      </SimpleGrid>
    </Container>
  );
}
