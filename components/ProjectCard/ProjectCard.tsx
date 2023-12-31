import React from 'react';
import { Card, Image, Text } from '@mantine/core';

function ProjectCard() {
  return (
    <Card
      shadow="sm"
      padding="xl"
      component="a"
      href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
      target="_blank"
    >
    <Card.Section>
      <Image
        src="https://images.unsplash.com/photo-1579227114347-15d08fc37cae?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80"
        h={300}
        alt="No way!"
      />
    </Card.Section>

    <Text fw={500} size="lg" mt="md">
      Project1
    </Text>

    <Text mt="xs" c="dimmed" size="sm">
      PProject1
    </Text>
    </Card>
);
}

export default ProjectCard;
