import { Text, Title, Group, Badge, Container } from '@mantine/core';
import classes from './Intro.module.css';

export default function Intro() {
    return (
    <>
    <Container size="lg" py="xl">
        <Group justify="center">

            <Badge variant="filled" size="lg">
            Hassall Group Ltd
            </Badge>
        </Group>

        <Title order={2} className={classes.title} ta="center" mt="sm">
            Your Trusted Building Partner
        </Title>

        <Text c="dimmed" className={classes.description} fz="lg" w="100%" ta="justify" mt="md" p={0}>
        Welcome to Hassall Group, A principal building and landscaping company.
        We cover all aspects of Extensions, Conversions, Bricklaying, Carpentry, Plastering,
        Groundworks, and Roofing. We stand out with a commitment to precision and craftsmanship
        in every project. Our landscaping seamlessly blends aesthetics and functionality.
        Dedicated to customer satisfaction, we prioritize open communication, transparency.
        Hassall Group for your building journey, where excellence is guaranteed in every aspect.
        </Text>
    </Container>
    </>
    );
}
