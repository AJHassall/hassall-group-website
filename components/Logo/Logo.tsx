import Image from 'next/image';

export function Logo() {
  const assetDomain = process.env.pathPrefix;

  return (
    <Image
      src={`${assetDomain}/hassall90x50 no background.png`}
      width={270}
      height={150}
      alt="Company logo"
    />
  );
}
