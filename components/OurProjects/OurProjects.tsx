'use client';

import { Grid, Container } from '@mantine/core';
import { ProjectCard } from '../ProjectCard/ProjectCard';

const project = <ProjectCard />;

export function OurProjects() {
  return (
    <>
      <Container size="xl">
      <Grid>
        <Grid.Col span={{ base: 12, xs: 8 }}>{project}</Grid.Col>
        <Grid.Col span={{ base: 12, xs: 4 }}>{project}</Grid.Col>
        <Grid.Col span={{ base: 12, xs: 4 }}>{project}</Grid.Col>
        <Grid.Col span={{ base: 12, xs: 5 }}>{project}</Grid.Col>
        <Grid.Col span={{ base: 12, xs: 3 }}>{project}</Grid.Col>
        <Grid.Col span={{ base: 12, xs: 5 }}>{project}</Grid.Col>
        <Grid.Col span={{ base: 12, xs: 6 }}>{project}</Grid.Col>
      </Grid>
      </Container>
    </>
  );
}
