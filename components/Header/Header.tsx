'use client';

import * as core from '@mantine/core';
  import { useDisclosure } from '@mantine/hooks';

  import classes from './header.module.css';

//   const mockdata = [
//     {
//       icon: IconCode,
//       title: 'Open source',
//       description: 'This Pokémon’s cry is very loud and distracting',
//     },
//     {
//       icon: IconCoin,
//       title: 'Free for everyone',
//       description: 'The fluid of Smeargle’s tail secretions changes',
//     },
//     {
//       icon: IconBook,
//       title: 'Documentation',
//       description: 'Yanma is capable of seeing 360 degrees without',
//     },
//     {
//       icon: IconFingerprint,
//       title: 'Security',
//       description: 'The shell’s rounded shape and the grooves on its.',
//     },
//     {
//       icon: IconChartPie3,
//       title: 'Analytics',
//       description: 'This Pokémon uses its flying ability to quickly chase',
//     },
//     {
//       icon: IconNotification,
//       title: 'Notifications',
//       description: 'Combusken battles with the intensely hot flames it spews',
//     },
//   ];

  export function Header() {
    const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);

    // const links = mockdata.map((item) => (
    //   <UnstyledButton className={classes.subLink} key={item.title}>
    //     <Group wrap="nowrap" align="flex-start">
    //       <ThemeIcon size={34} variant="default" radius="md">
    //         <item.icon style={{ width: rem(22), height: rem(22) }} color={theme.colors.blue[6]} />
    //       </ThemeIcon>
    //       <div>
    //         <Text size="sm" fw={500}>
    //           {item.title}
    //         </Text>
    //         <Text size="xs" c="dimmed">
    //           {item.description}
    //         </Text>
    //       </div>
    //     </Group>
    //   </UnstyledButton>
    // ));

    return (
      <core.Box pb={150}>
        <header className={classes.header}>
          <core.Group h="100%">
          <core.Image
            radius="md"
            src="logo.svg"
            h={50}
            w={50}

          />

          <core.Text ml="100">
            <h2>
            Hassall Group Ltd
            </h2>
          </core.Text>

            <core.Group h="100%" gap={0} visibleFrom="sm" ml="auto">
              <a href="#" className={classes.link}>
                Home
              </a>
              {/* <HoverCard width={600} position="bottom" radius="md" shadow="md" withinPortal>
                <HoverCard.Target>
                  <a href="#" className={classes.link}>
                    <Center inline>
                      <Box component="span" mr={5}>
                        Features
                      </Box>
                      <IconChevronDown
                        style={{ width: rem(16), height: rem(16) }}
                        color={theme.colors.blue[6]}
                      />
                    </Center>
                  </a>
                </HoverCard.Target>

                <HoverCard.Dropdown style={{ overflow: 'hidden' }}>
                  <Group justify="space-between" px="md">
                    <Text fw={500}>Features</Text>
                    <Anchor href="#" fz="xs">
                      View all
                    </Anchor>
                  </Group>

                  <Divider my="sm" />

                  <SimpleGrid cols={2} spacing={0}>
                    {links}
                  </SimpleGrid>

                  <div className={classes.dropdownFooter}>
                    <Group justify="space-between">
                      <div>
                        <Text fw={500} fz="sm">
                          Get started
                        </Text>
                        <Text size="xs" c="dimmed">
                          Their food sources have decreased, and their numbers
                        </Text>
                      </div>
                      <Button variant="default">Get started</Button>
                    </Group>
                  </div>
                </HoverCard.Dropdown>
              </HoverCard> */}
              <a href="#" className={classes.link}>
                Our Projects
              </a>
              <a href="#" className={classes.link}>
                Contact Us
              </a>
            </core.Group>

            <core.Burger opened={drawerOpened} onClick={toggleDrawer} hiddenFrom="sm" />
          </core.Group>
        </header>

        <core.Drawer
          opened={drawerOpened}
          onClose={closeDrawer}
          size="100%"
          padding="md"
          title="Navigation"
          hiddenFrom="sm"
          zIndex={1000000}
        >
          <core.ScrollArea h={`calc(100vh - ${core.rem(80)})`} mx="-md">
            <core.Divider my="sm" />

            <a href="#" className={classes.link}>
              Home
            </a>
            {/* <UnstyledButton className={classes.link} onClick={toggleLinks}>
              <Center inline>
                <Box component="span" mr={5}>
                  Features
                </Box>
                <IconChevronDown
                  style={{ width: rem(16), height: rem(16) }}
                  color={theme.colors.blue[6]}
                />
              </Center>
            </UnstyledButton> */}
            {/* <Collapse in={linksOpened}>{links}</Collapse> */}
            <a href="#" className={classes.link}>
              Contact Us
            </a>
            <a href="#" className={classes.link}>
              Our Projects
            </a>

            <core.Divider my="sm" />
          </core.ScrollArea>
        </core.Drawer>
      </core.Box>
    );
  }
