import { Text, Title, Group, Badge, Container, Box } from '@mantine/core';
import classes from './Intro.module.css';
import CustomerReviews from '../CustomerReviews/CustomerReviews';

export default function Intro() {
    return (
    <>
    <section style={{ position: 'relative' }}>
    <Box w="100%" bg="charcoal" mih="100vh">

    <Container size="lg" py="xl" bg="charcoal" w="100%">
        <Group justify="center">

            <Badge variant="filled" size="lg">
            Hassall Group Ltd
            </Badge>
        </Group>

        <Title order={1} className={classes.title} c="white" ta="center" mt="sm">
            Why Choose Hassall Group? Read Our Happy Customer Testimonials
        </Title>

        <Text c="white" className={classes.description} fz="md" w="100%" ta="center" p="xl" mt="md">
        At Hassall Group Ltd., we&apos;re committed to exceeding client expectations.
         See what our satisfied customers are saying about their experience working with us.
          Their testimonials can help you decide if Hassall Group is
           the right builder for your next project.
        </Text>
    </Container>
    <CustomerReviews />
    </Box>
    </section>
    </>
    );
}
