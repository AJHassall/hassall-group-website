import { SimpleGrid, Card, Image, Text, Container, AspectRatio } from '@mantine/core';
import Link from 'next/link';
import classes from './ArticlesCardsGrid.module.css';

import conversions from '@/public/content/conversions/conversions (9).webp';
import extension from '@/public/content/carpentryandjoinery/carpentryandjoinery (3).webp';
import kitchen from '@/public/content/kitchenrenovations/kitchen_renovation (1).webp';
import fencing from '@/public/content/fencing/Fencing (1).webp';
import landscaping from '@/public/content/landscaping/landscaping (9).webp';
import bathroom from '@/public/content/bathrooms/Bathroom (8).webp';

const mockdata = [
  {
    title: 'Conversions',
    href: 'services/conversions',
    image: conversions.src,
    date: 'August 18, 2022',
  },
  {
    title: 'Carpentry and Joinery',
    href: 'services/carpentryandjoinery',
    image: extension.src,
    date: 'August 27, 2022',
  },
  {
    title: 'Kitchen renovation',
    href: 'services/kitchenrenovations',
    image: kitchen.src,
    date: 'September 9, 2022',
  },
  {
    title: 'Fencing',
    href: 'services/fencing',
    image: fencing.src,
    date: 'September 12, 2022',
  },
  {
    title: 'Landscaping',
    href: 'services/landscaping',
    image: landscaping.src,
    date: 'September 12, 2022',

  },
  {
    title: 'Bathrooms',
    href: 'services/bathrooms',
    image: bathroom.src,
    date: 'September 12, 2022',
  },
];

export function ArticlesCardsGrid() {
  const cards = mockdata.map((article) => (

    <Link href={article.href} className={classes.link} key={article.title}>
      <Card key={article.title} p="md" radius="md" shadow="md" className={classes.card}>
        <AspectRatio ratio={1920 / 1080}>
          <Image src={article.image} />
        </AspectRatio>

        <Text className={classes.title} mt={5}>
          {article.title}
        </Text>
      </Card>
    </Link>
  ));

  return (
    <Container size="lg" w="100%">
      <SimpleGrid cols={{ base: 1, sm: 3 }}>{cards}</SimpleGrid>
    </Container>
  );
}
