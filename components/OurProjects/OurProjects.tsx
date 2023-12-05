'use client';

import { Grid, Container } from '@mantine/core';
import ProjectCard from '../ProjectCard/ProjectCard';

 export function OurProjects() {
  return (
    <>
      <Container size="xl">
      <Grid>
        <ProjectCard src="/content/02.mp4" />
        <ProjectCard src="/content/03.mp4" />
        <ProjectCard src="/content/01.mp4" />
        <ProjectCard src="/content/02.mp4" />
        <ProjectCard src="/content/03.mp4" />
        <ProjectCard src="/content/01.mp4" />
      </Grid>
      </Container>
    </>
  );
}
