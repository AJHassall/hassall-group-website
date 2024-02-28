import { Container, Title, Accordion } from '@mantine/core';
import classes from './FaqSimple.module.css';

export function FaqSimple() {
  return (
    <Container size="xl" variant="filled" pl={0} pr={0} className={classes.wrapper}>
      <Title ta="center" className={classes.title}>
        Frequently Asked Questions
      </Title>

      <Accordion variant="default">
        <Accordion.Item className={classes.item} value="project-costs">
          <Accordion.Control>How do you determine project costs?</Accordion.Control>
          <Accordion.Panel>
            We provide detailed estimates based on project scope,
             material selections, labor, and timelines.  We can discuss options to fit your budget.
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item className={classes.item} value="timeline">
          <Accordion.Control>What are typical project timelines?</Accordion.Control>
          <Accordion.Panel>
            Timelines vary depending on project size and complexity.
            After an initial consultation, we can provide a realistic estimated timeline.
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item className={classes.item} value="consultation">
          <Accordion.Control>Do you offer free consultations?</Accordion.Control>
          <Accordion.Panel>
            Yes!  We offer free initial consultations to discuss your
            project and answer any questions you have.
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item className={classes.item} value="permits">
          <Accordion.Control>Do you handle obtaining necessary permits?</Accordion.Control>
          <Accordion.Panel>
            Yes, we can manage the permit application process and ensure your
            project complies with building codes.
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item className={classes.item} value="references">
          <Accordion.Control>Can you provide references from past clients?</Accordion.Control>
          <Accordion.Panel>
            Absolutely!  We&apos;re happy to provide references so you can
             hear directly from our satisfied clients.
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>
    </Container>
  );
}
