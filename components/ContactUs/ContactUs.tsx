import {
    Text,
    Title,
    SimpleGrid,
    TextInput,
    Textarea,
    Button,
    Group,
    ActionIcon,
  } from '@mantine/core';
  import { IconBrandTwitter, IconBrandYoutube, IconBrandInstagram } from '@tabler/icons-react';
  import { ContactIconsList } from './ContactIcons';
  import classes from './ContactUs.module.css';

  const social = [IconBrandTwitter, IconBrandYoutube, IconBrandInstagram];

  export function ContactUs() {
    const icons = social.map((Icon, index) => (
      <ActionIcon key={index} size={28} className={classes.social} variant="transparent">
        <Icon size="1.4rem" stroke={1.5} />
      </ActionIcon>
    ));

    return (
      <div className={classes.wrapper}>
            <ContactIconsList />
      </div>
    );
  }
