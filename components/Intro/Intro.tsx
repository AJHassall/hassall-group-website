import { Text, TypographyStylesProvider } from '@mantine/core';

export function Intro() {
    return (
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
          </TypographyStylesProvider>
        </Text>
      );
}
