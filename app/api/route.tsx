import fs from 'fs';
import path from 'path';
import type { NextApiRequest, NextApiResponse } from 'next';

export async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { service } = req.body;
  const imagesDirectory = path.join(process.cwd(), `public/content/${service}`);
  const fileNames = fs.readdirSync(imagesDirectory);

  const images = fileNames.map(fileName => ({
    src: `${process.env.pathPrefix}/content/bathrooms/${fileName}`,
    alt: fileName.replace(/\.[^/.]+$/, ''),
  }));

  let wording = '';
  switch (service) {
    case 'extensions':
        wording = `Boost your home&apos;s value and create the extra space \n
        you need with a stunning extension.
        We offer quality craftsmanship,
        durable materials, and designs that maximize both functionality and resale potential.`;
      break;

    default:
      break;
  }

  res.status(200).json({ images, wording });
}
