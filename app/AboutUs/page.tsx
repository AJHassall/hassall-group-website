import { Center, Text, TypographyStylesProvider } from '@mantine/core';
import { StatsGroup } from '@/components/StatsGroup/StatusGroup';

export default function AboutUs() {
    return (
        <>
        <div>
            <Center>
            <Text component="div"><h1>About Us</h1></Text>
            </Center>
        </div>
        <Text component="div">
          <TypographyStylesProvider>
            <h3>Line clamp with TypographyStylesProvider</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt nulla quam aut sed
              corporis voluptates praesentium inventore, sapiente ex tempore sit consequatur debitis
              non! Illo cum ipsa reiciendis quidem facere, deserunt eos totam impedit. Vel ab, ipsum
              veniam aperiam odit molestiae incidunt minus, sint eos iusto earum quaerat vitae
              perspiciatis.
            </p>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt nulla quam aut sed
              corporis voluptates praesentium inventore, sapiente ex tempore sit consequatur debitis
              non! Illo cum ipsa reiciendis quidem facere, deserunt eos totam impedit. Vel ab, ipsum
              veniam aperiam odit molestiae incidunt minus, sint eos iusto earum quaerat vitae
              perspiciatis.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt nulla quam aut sed
              corporis voluptates praesentium inventore, sapiente ex tempore sit consequatur debitis
              non! Illo cum ipsa reiciendis quidem facere, deserunt eos totam impedit. Vel ab, ipsum
              veniam aperiam odit molestiae incidunt minus, sint eos iusto earum quaerat vitae
              perspiciatis.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt nulla quam aut sed
              corporis voluptates praesentium inventore, sapiente ex tempore sit consequatur debitis
              non! Illo cum ipsa reiciendis quidem facere, deserunt eos totam impedit. Vel ab, ipsum
              veniam aperiam odit molestiae incidunt minus, sint eos iusto earum quaerat vitae
              perspiciatis.
            </p>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt nulla quam aut sed
              corporis voluptates praesentium inventore, sapiente ex tempore sit consequatur debitis
              non! Illo cum ipsa reiciendis quidem facere, deserunt eos totam impedit. Vel ab, ipsum
              veniam aperiam odit molestiae incidunt minus, sint eos iusto earum quaerat vitae
              perspiciatis.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt nulla quam aut sed
              corporis voluptates praesentium inventore, sapiente ex tempore sit consequatur debitis
              non! Illo cum ipsa reiciendis quidem facere, deserunt eos totam impedit. Vel ab, ipsum
              veniam aperiam odit molestiae incidunt minus, sint eos iusto earum quaerat vitae
              perspiciatis.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt nulla quam aut sed
              corporis voluptates praesentium inventore, sapiente ex tempore sit consequatur debitis
              non! Illo cum ipsa reiciendis quidem facere, deserunt eos totam impedit. Vel ab, ipsum
              veniam aperiam odit molestiae incidunt minus, sint eos iusto earum quaerat vitae
              perspiciatis.
            </p>
          </TypographyStylesProvider>
        </Text>
        <StatsGroup />
        </>
      );
}
