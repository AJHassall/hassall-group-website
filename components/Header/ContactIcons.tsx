import { Text, Box, rem, Flex } from '@mantine/core';
import { IconSun, IconPhone, IconAt } from '@tabler/icons-react';
import classes from './ContactIcons.module.css';

interface ContactIconProps extends Omit<React.ComponentPropsWithoutRef<'div'>, 'title'> {
  icon: typeof IconSun;
  title: React.ReactNode;
  description: React.ReactNode;
  href: string;
}

function ContactIcon({ icon: Icon, title, description, href, ...others }: ContactIconProps) {
  return (
    <div className={classes.wrapper} {...others}>
      <Box mr="md">
        <Icon style={{ width: rem(24), height: rem(24) }} />
      </Box>

      <div>
        <Text size="lg" className={classes.title}>
          {title}
        </Text>
        <a href={href} className={classes.description}><Text fz="md">{description}</Text></a>
      </div>
    </div>
  );
}

const MOCKDATA = [
  { title: 'Email', description: 'hassallgroup@gmail.com', href: 'mailto:hassallgroup@gmail.com', icon: IconAt },
  { title: 'Phone', description: '07799 683073', href: 'tel:07799 683073', icon: IconPhone },
];

export function ContactIconsList() {
  const items = MOCKDATA.map((item, index) => <ContactIcon key={index} {...item} />);
 return (
  <Box className={classes.contactIconsList}>
   <Flex>{items}</Flex>
  </Box>);
}
