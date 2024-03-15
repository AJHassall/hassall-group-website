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
  Stack,
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
          <Stack>

          <ContactIconsList />
          <Divider />
          <Group justify="flex-end" h="100%" gap={0} visibleFrom="sm">
            <Link href="/ContactUs" className={classes.link}>
              Contact Us
            </Link>
            <Menu>
              <Menu.Target>
                <Button color="#0190b8">Our Services <IconChevronDown /></Button>
              </Menu.Target>
              <Menu.Dropdown>
                <Menu.Item>
                  <Link href="/Services/KitchenRenovations" className={classes.link}>
                  Kitchen Renovations
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link href="/Services/LoftConversions" className={classes.link}>
                  Loft Conversions
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link href="/Services/Roofing" className={classes.link}>
                  Roofing
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link href="/Services/Fencing" className={classes.link}>
                  Fencing
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link href="/Services/Patios" className={classes.link}>
                  Patios
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link href="/Services/BathroomsAndKitchens" className={classes.link}>
                  Bathrooms and Kitchens
                  </Link>
                </Menu.Item>
              </Menu.Dropdown>
            </Menu>
          </Group>
          </Stack>

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
            <Link href="/AboutUs" className={classes.link}>
              About Us
            </Link>
            <Link href="/OurProjects" className={classes.link}>
              Our Projects
            </Link>
            <Menu>
              <Menu.Target>
                <Button color="#0190b8">Our Services</Button>
              </Menu.Target>
              <Menu.Dropdown>
                <Menu.Item>
                  <Link href="/Services/KitchenRenovations" className={classes.link}>
                  Kitchen Renovations
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link href="/Services/LoftConversions" className={classes.link}>
                  Loft Conversions
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link href="/Services/Roofing" className={classes.link}>
                  Roofing
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link href="/Services/Fencing" className={classes.link}>
                  Fencing
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link href="/Services/Patios" className={classes.link}>
                  Patios
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link href="/Services/Bathrooms" className={classes.link}>
                  Bathrooms
                  </Link>
                </Menu.Item>
              </Menu.Dropdown>
            </Menu>
        </ScrollArea>
      </Drawer>
    </Box>
  );
}
