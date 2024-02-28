import Image from 'next/image';

export function Logo() {
  const assetDomain = process.env.pathPrefix;

  return (
    <Image
      src={`${assetDomain}/logo.svg`}
      width={64}
      height={64}
      alt="Company logo"
      priority
    />
  );
}
