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
import { IconBuildingSkyscraper, IconShieldCheck, IconToolsKitchen2 } from '@tabler/icons-react';
import classes from './FeaturesCards.module.css';

const mockdata = [
  {
    title: 'Quality Craftsmanship',
    description:
      'Our skilled team takes pride in meticulous attention to detail, delivering projects that reflect superior workmanship and enduring quality.',
    icon: IconToolsKitchen2,
  },
  {
    title: 'Client-Focused',
    description:
      'We prioritize open communication and collaboration, ensuring your vision guides the process and your needs are met at every stage.',
    icon: IconShieldCheck,
  },
  {
    title: 'Timely & Efficient',
    description:
      'With streamlined processes and a commitment to deadlines, we strive to complete projects on time and within budget.',
    icon: IconBuildingSkyscraper,
  },
];

export function FeaturesCards() {
  const features = mockdata.map((feature) => (
    <Card key={feature.title} shadow="md" radius="md" className={classes.card} padding="xl">
      <feature.icon
        style={{ width: rem(50), height: rem(50) }}
        stroke={2}
        color="blue"
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

    <Text c="dimmed" className={classes.description} ta="center" mt="md">
      With more than 15 years of experience, we deliver  projects that stand the test of time.
    </Text>

      <SimpleGrid cols={{ base: 1, md: 3 }} spacing="xl" mt={50}>
        {features}
      </SimpleGrid>
    </Container>
  );
}
