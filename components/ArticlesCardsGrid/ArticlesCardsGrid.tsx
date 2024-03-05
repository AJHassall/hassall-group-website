import { SimpleGrid, Card, Image, Text, Container, AspectRatio } from '@mantine/core';
import classes from './ArticlesCardsGrid.module.css';

const mockdata = [
  {
    title: 'Loft conversions',
    image:
      '/content/loftconversions/loft_conversion (6).jpg',
    date: 'August 18, 2022',
  },
  {
    title: 'Extensions',
    image:
      '/content/extensions/extension (1).jpg',
    date: 'August 27, 2022',
  },
  {
    title: 'Kitchen renovation',
    image:
      'content/kitchens/kitchen_renovation (1).jpg',
    date: 'September 9, 2022',
  },
  {
    title: 'Fencing',
    image:
      '/content/fencing/Fencing (2).jpg',
    date: 'September 12, 2022',
  },
  {
    title: 'Patios',
    image:
      '/content/patios/Patios (2).jpg',
    date: 'September 12, 2022',
  },
  {
    title: 'Roofing',
    image:
      '/content/roofing/roofing (2).jpg',
    date: 'September 12, 2022',
  },
];

export function ArticlesCardsGrid() {
  const cards = mockdata.map((article) => (
    <Card key={article.title} p="md" radius="md" component="a" href="#" shadow="md" className={classes.card}>
      <AspectRatio ratio={1920 / 1080}>
        <Image src={article.image} />
      </AspectRatio>
      <Text c="dimmed" size="xs" tt="uppercase" fw={700} mt="md">
        {article.date}
      </Text>
      <Text className={classes.title} mt={5}>
        {article.title}
      </Text>
    </Card>
  ));

  return (
    <Container size="lg" w="100%">
      <SimpleGrid cols={{ base: 1, sm: 3 }}>{cards}</SimpleGrid>
    </Container>
  );
}
