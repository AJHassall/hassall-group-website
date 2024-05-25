'use client';

import Link from 'next/link';
import {
  Group,
  Divider,
  Box,
  Burger,
  Drawer,
  ScrollArea,
  rem,
  Menu,
  Button,
  Text,
  Accordion,
} from '@mantine/core';
import { IconChevronDown } from '@tabler/icons-react';
import { useDisclosure } from '@mantine/hooks';
import classes from './header.module.css';
import { Logo } from '../Logo/Logo';
import { ContactIconsList } from './ContactIcons';

export function Header() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);

  return (
    <Box>
      <header className={classes.header}>

        <Group justify="space-between" h="100%">
          <Link href="/" className={classes.link}>
            <div className={classes.logoContainer}>
              <Logo size={256} />
            </div>
          </Link>

          <Group justify="flex-end" h="100%" gap={0} visibleFrom="sm">
            <Link className={classes.link} href="/About">
              <Text>About</Text>
            </Link>
            <Link className={classes.link} href="/Reviews">
              <Text>Reviews</Text>
            </Link>
            <Menu>
              <Menu.Target>
                <Button color="#0190b8" fz="md">Our Services <IconChevronDown /></Button>
              </Menu.Target>
              <Menu.Dropdown>
                <Menu.Item>
                  <Link href="/services/kitchenrenovations" className={classes.link}>
                  Kitchen Renovations
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link href="/services/conversions" className={classes.link}>
                  Conversions
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link href="/services/fencing" className={classes.link}>
                  Fencing
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link href="/services/landscaping" className={classes.link}>
                  Landscaping
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link href="/services/kitchenrenovations" className={classes.link}>
                  Kitchens
                  </Link>
                </Menu.Item>
                <Menu.Item>
                <Link href="/services/carpentryandjoinery" className={classes.link}>
                  Carpentry And Joinery
                </Link>
                </Menu.Item>
                <Menu.Item>
                <Link href="/services/bathrooms" className={classes.link}>
                  Bathrooms
                </Link>
                </Menu.Item>
              </Menu.Dropdown>
            </Menu>
          </Group>
          <ContactIconsList />

          <Burger opened={drawerOpened} onClick={toggleDrawer} hiddenFrom="sm" />
        </Group>
      </header>

      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="md"
        title="Navigation"
        hiddenFrom="sm"
        zIndex={1000000}
      >
        <ScrollArea h={`calc(100vh - ${rem(80)})`} mx="-md">
          <Divider my="sm" />
            <Link href="/" className={classes.link} onClick={toggleDrawer}>
              <Text size="md" w="100%">
                Home
              </Text>
            </Link>
            <Accordion>
                <Accordion.Item value="Services">
                  <Accordion.Control>Services</Accordion.Control>
                  <Accordion.Panel>
                      <Link href="/services/kitchenrenovations" className={classes.link} onClick={toggleDrawer}>
                      Kitchen Renovations
                      </Link>
                  </Accordion.Panel>
                  <Accordion.Panel>
                      <Link href="/services/conversions" className={classes.link} onClick={toggleDrawer}>
                      Conversions
                      </Link>
                  </Accordion.Panel>

                  <Accordion.Panel>
                      <Link href="/services/fencing" className={classes.link} onClick={toggleDrawer}>
                      Fencing
                      </Link>
                  </Accordion.Panel>
                  <Accordion.Panel>
                      <Link href="/services/landscaping" className={classes.link} onClick={toggleDrawer}>
                      Landscaping
                      </Link>
                  </Accordion.Panel>
                  <Accordion.Panel>
                      <Link href="/services/bathrooms" className={classes.link} onClick={toggleDrawer}>
                      Bathrooms
                      </Link>
                  </Accordion.Panel>
                  <Accordion.Panel>
                      <Link href="/services/carpentryandjoinery" className={classes.link} onClick={toggleDrawer}>
                      Carpentry And Joinery
                      </Link>
                  </Accordion.Panel>
                </Accordion.Item>
            </Accordion>

        </ScrollArea>
      </Drawer>

    </Box>
  );
}
