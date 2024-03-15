import { Image, ImageProps } from '@mantine/core';

interface LogoProps extends ImageProps { // Extend Mantine's ImageProps
  size: number;
}

export function Logo({ size, ...otherProps }: LogoProps) {
  const assetDomain = process.env.pathPrefix;

  return (
    <Image
      src={`${assetDomain}/hassall90x50 no background.png`}
      fit="contain"
      w={size}
      h="auto"
      {...otherProps} // Pass any remaining props to Image
    />
  );
}
