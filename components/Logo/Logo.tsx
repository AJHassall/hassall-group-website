import { ImageProps } from '@mantine/core';
import Image from 'next/image';

interface LogoProps extends ImageProps { // Extend Mantine's ImageProps
  size: number;
}

export function Logo({ size }: LogoProps) {
  return (
    <Image
      src="/hassall90x50 no background.png"
      //fit="contain"
      width={size}
      height={(size / 90) * 50}
      alt="Hassall Group Ltd logo"
      //{...otherProps} // Pass any remaining props to Image
      priority
    />
  );
}
