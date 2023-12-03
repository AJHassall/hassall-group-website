import Image from 'next/image';

export function Logo() {
  return (
    <Image
      src="/logo.svg"
      width={64}
      height={64}
      alt="Picture of the author"
      priority
    />
  );
}
