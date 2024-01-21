'use client';

import { Center, Text, Grid, SimpleGrid, Container, Skeleton, rem } from '@mantine/core';

const PRIMARY_COL_HEIGHT = rem(300);

 export default function OurProjects() {
  const SECONDARY_COL_HEIGHT = `calc(${PRIMARY_COL_HEIGHT} / 2 - var(--mantine-spacing-md) / 2)`;
  return (
    <>
    <div>
        <Center>
            <Text component="div"><h1>Our Projects</h1></Text>
        </Center>
    </div>
    <Container my="md">
      <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="md">
        <Skeleton height={PRIMARY_COL_HEIGHT} radius="md" animate={false} />
        <Grid gutter="md">
          <Grid.Col>
            <Skeleton height={SECONDARY_COL_HEIGHT} radius="md" animate={false} />
          </Grid.Col>
          <Grid.Col span={6}>
            <Skeleton height={SECONDARY_COL_HEIGHT} radius="md" animate={false} />
          </Grid.Col>
          <Grid.Col span={6}>
            <Skeleton height={SECONDARY_COL_HEIGHT} radius="md" animate={false} />
          </Grid.Col>
        </Grid>
      </SimpleGrid>
    </Container>
    </>
  );
}
