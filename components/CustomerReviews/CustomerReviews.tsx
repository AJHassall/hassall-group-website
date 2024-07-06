'use client';

import { Carousel } from '@mantine/carousel';
import { TypographyStylesProvider, Card, Group, Text, Center, Container, em } from '@mantine/core';

import { IconQuote, IconStar } from '@tabler/icons-react';
import { useMediaQuery } from '@mantine/hooks';
import classes from './CustomerReviews.module.css';
import customerReviews from './Reviews.json';

interface ReviewProps {
    id: number;
    author: string;
    rating: number;
    title: string;
    review: string;
    date: string;
    source: string;
}

function Review({ id, author, rating, title, review, date, source }: ReviewProps) {
  return (

          <Card withBorder shadow="md" radius="md" className={classes.card} key={id}>
            <Group>
              <div>
                <Text fz="sm">{author}</Text>
                <Text fz="xs" c="dimmed">
                  {date}
                </Text>
                <Text fz="sm">
                  <IconQuote size={12} style={{ transform: 'rotate(180deg)' }} />{' '}
                  <i>{title}</i> <IconQuote size={12} />
                </Text>
              </div>
            </Group>
            <TypographyStylesProvider className={classes.body}>
              <div className={classes.content}>
                <Text fs="xs" c="gray">
                  <IconQuote size={12} style={{ transform: 'rotate(180deg)' }} /> {review} <IconQuote size={12} />
                </Text>
              </div>
              <div className={classes.lineAfter}>
                <Center pt="auto">
                  <Group mt="lg">
                    {Array(Math.round(rating))
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
              <i>{source}</i>
            </Text>
          </Card>
  );
}

export default function CustomerReviews() {
  const slides = customerReviews.map((item) => (
    <Carousel.Slide key={item.id} pt="xl">
      <Review {...item} />
    </Carousel.Slide>
  ));
  const isMobile = useMediaQuery(`(max-width: ${em(750)})`);
  return (
    <Container size="lg">

    <Carousel
      initialSlide={3}
      slideGap="sm"
      align="center"
      height=""
      slideSize={isMobile ? '100%' : '33%'}
      loop
      withIndicators

    >
      {slides}
    </Carousel>
    </Container>
  );
}
