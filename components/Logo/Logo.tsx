import { Image } from '@mantine/core';

export function Logo() {
  const assetDomain = process.env.pathPrefix;

  return (
    <Image
      src={`${assetDomain}/hassall90x50 no background.png`}
      w="15rem"
      height="auto"
      alt="Company logo"
    />
  );
}
