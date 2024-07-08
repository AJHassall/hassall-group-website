'use client';

import { Carousel } from '@mantine/carousel';
import { useMediaQuery } from '@mantine/hooks';
import { Paper, Text, Title, Button, useMantineTheme, rem, Box, Container } from '@mantine/core';
import classes from './ArticlesCardsGrid.module.css';

import conversions from '@/public/content/conversions/conversions (9).webp';
import extension from '@/public/content/carpentryandjoinery/carpentryandjoinery (3).webp';
import kitchen from '@/public/content/kitchenrenovations/kitchen_renovation (1).webp';
import fencing from '@/public/content/fencing/Fencing (1).webp';
import landscaping from '@/public/content/landscaping/landscaping (9).webp';
import bathroom from '@/public/content/bathrooms/Bathroom (8).webp';
import { Wave } from '../Wave/wave';
import { WaveTop } from '../WaveTop/wavetop';

interface CardProps {
  image: any;
  title: string;
  category: string;
}

function Card({ image, title, category }: CardProps) {
  return (
    <Paper
      shadow="md"
      p="xl"
      radius="md"
      style={{ backgroundImage: `url('${image}')` }}
      className={classes.card}
    >      <div>
        <Text className={classes.category} size="xs">
          {category}
        </Text>
        <Title order={3} className={classes.title}>
          {title}
        </Title>
           </div>
      <Button variant="white" color="dark">
        Read article
      </Button>
    </Paper>
  );
}

const data = [
  {
    image: kitchen.src,
    title: 'Kitchen renovations',
    category: 'kitchen',
  },
  {
    image: extension.src,
      title: 'Extensions',
    category: '',
  },
  {
    image:
      conversions.src,
      title: 'Conversions',
    category: 'nature',
  },
  {
    image: landscaping.src,
        title: 'Landscaping',
    category: 'Landscaping',
  },
  {
    image: fencing.src,
    title: 'Fencing',
    category: 'tourism',
  },
  {
    image: bathroom.src,
    title: 'Bathrooms',
    category: 'bathrooms',
  },
];

export function ArticlesCardsGrid() {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const slides = data.map((item) => (
    <Carousel.Slide key={item.title}>
      <Card {...item} />
    </Carousel.Slide>
  ));

  return (
    <section style={{ position: 'relative' }}>
    <WaveTop colour="#36454F" />
    <Box
      mih="100vh"
      p={mobile ? 'md' : 'xl'}
      pt="10rem"
      pb="10rem"
      style={{ backgroundImage: 'linear-gradient(250deg, #3b4c77 0%, #0190b8 70%)',
      }}
    >
      <Text c="white" className={classes.description} fz="md" w="100%" ta="center" p="xl" mt="md">
          At Hassall Group Ltd., we&apos;re committed to exceeding client expectations.
           See what our satisfied customers are saying about their experience working with us.
            Their testimonials can help you decide if Hassall Group is
             the right builder for your next project.
      </Text>

      <Container size="lg" p="xl">
      <Carousel
        loop
        slideSize={{ base: '100%', sm: '33%' }}
        slideGap={{ base: rem(2), sm: 'xl' }}
        align="start"
        slidesToScroll={mobile ? 1 : 2}
      >
        {slides}
      </Carousel>
      </Container>
    </Box>
    <Wave colour="#fff" />

    </section>
  );
}
