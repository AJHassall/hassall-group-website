import { SimpleGrid, Card, Image, Text, Container, AspectRatio } from '@mantine/core';
import Link from 'next/link';
import classes from './ArticlesCardsGrid.module.css';

import loftconversion from '@/public/content/loftconversions/loft_conversion (1).jpg';
import extension from '@/public/content/extensions/extension (1).jpg';
import kitchen from '@/public/content/kitchens/kitchen_renovation (1).jpg';
import fencing from '@/public/content/fencing/Fencing (1).jpg';
import patio from '@/public/content//patios/Patios (1).jpg';
import roof from '@/public/content/roofing/roofing (1).jpg';

const mockdata = [
  {
    title: 'Loft conversions',
    href: 'Services/LoftConversions',
    image: loftconversion.src,
    date: 'August 18, 2022',
  },
  {
    title: 'Extensions',
    href: 'Services/Extensions',
    image: extension.src,
    date: 'August 27, 2022',
  },
  {
    title: 'Kitchen renovation',
    href: 'Services/KitchenRenovations',
    image: kitchen.src,
    date: 'September 9, 2022',
  },
  {
    title: 'Fencing',
    href: 'Services/Fencing',
    image: fencing.src,
    date: 'September 12, 2022',
  },
  {
    title: 'Patios',
    href: 'Services/Patios',
    image: patio.src,
    date: 'September 12, 2022',

  },
  {
    title: 'Roofing',
    href: 'Services/Roofing',
    image: roof.src,
    date: 'September 12, 2022',
  },
];

export function ArticlesCardsGrid() {
  const cards = mockdata.map((article) => (

    <Link href={article.href} className={classes.link}>
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
