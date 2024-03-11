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
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import classes from './header.module.css';
import { Logo } from '../Logo/Logo';

export function Header() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
  return (
    <Box>
      <header className={classes.header}>
        <Group justify="space-between" h="100%">
          <Link href="/" className={classes.link}>
            <Logo />
          </Link>

          <Group h="100%" gap={0} visibleFrom="sm">
            <Link href="/AboutUs" className={classes.link}>
              About Us
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
                  <Link href="/Services/BathroomsAndKitchens" className={classes.link}>
                  Bathrooms and Kitchens
                  </Link>
                </Menu.Item>
              </Menu.Dropdown>
            </Menu>
          </Group>

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
        </ScrollArea>
      </Drawer>
    </Box>
  );
}
