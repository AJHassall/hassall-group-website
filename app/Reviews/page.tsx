import { Text, Group, TypographyStylesProvider, Card, Container, SimpleGrid, Center, Title } from '@mantine/core';
import { IconStar, IconQuote } from '@tabler/icons-react';
import classes from './reviews.module.css';
import reviewsJson from './Reviews.json';

export default function Reviews() {
  return (
    <Container size="xl" mt="md">
      <Title m="xl" ta="center" c="darkBlue" order={1} className={classes.title}>
        What our clients say
      </Title>
      <Text m="xl" ta="center" className={classes.paragraph}>
        We’re passionate about the quality of our work and the
        satisfaction of our clients. Here’s what some of our clients have to say about us
      </Text>
      <SimpleGrid cols={{ base: 1, sm: 3 }}>
        {reviewsJson.map((review) => (
          <Card withBorder shadow="md" m="md" radius="md" className={classes.card} key={review.id}>
            <Group>
              <div>
                <Text fz="sm">{review.Author}</Text>
                <Text fz="xs" c="dimmed">
                  {review.Date}
                </Text>
                <Text fz="sm">
                  <IconQuote size={12} style={{ transform: 'rotate(180deg)' }} />{' '}
                  <i>{review.Title}</i> <IconQuote size={12} />
                </Text>
              </div>
            </Group>
            <TypographyStylesProvider className={classes.body}>
              <div className={classes.content}>
                <Text c="gray">
                  <IconQuote size={12} style={{ transform: 'rotate(180deg)' }} /> {review.Review} <IconQuote size={12} />
                </Text>
              </div>
              <div className={classes.lineAfter}>
                <Center pt="auto">
                  <Group mt="lg">
                    {Array(Math.round(review.Rating))
                      .fill(null)
                      .map((_, i) => (
                        <IconStar
                          strokeWidth={2}
                          stroke={2}
                          fill="#FFD700"
                          color="#FFD700"
                          size="16px"
                          key={i}
                        />
                      ))}
                  </Group>
                </Center>
              </div>
            </TypographyStylesProvider>
            <Text ta="right" c="gray" mt="auto">
              <i>{review.Source}</i>
            </Text>
          </Card>
        ))}
      </SimpleGrid>
    </Container>
  );
}
