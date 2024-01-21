import { Text } from '@mantine/core';
import classes from './StatsGroup.module.css';

const data = [
  {
    title: 'Projects Completed',
    stats: '99',
    description: 'We have succesfully completed 99 different projects for our clients to the highest possible standard.',
  },
  {
    title: 'Happy Customers',
    stats: '99',
    description: 'Our goal is customer satisfaction.',
  },
  {
    title: 'Years of experience',
    stats: '99',
    description: 'With over 99 years of experience we are able to fulfill your requirments with the skill that is required for a range of different services',
  },
];

export function StatsGroup() {
  const stats = data.map((stat) => (
    <div key={stat.title} className={classes.stat}>
      <Text className={classes.count}>{stat.stats}</Text>
      <Text className={classes.title}>{stat.title}</Text>
      <Text className={classes.description}>{stat.description}</Text>
    </div>
  ));
  return <div className={classes.root}>{stats}</div>;
}
