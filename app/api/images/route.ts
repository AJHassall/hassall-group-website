import { NextRequest } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function pleaseWork(service :string) {
    console.log('aaaaaa');

    const imagesDirectory = path.join(process.cwd(), `public/content/${service}`);
    const fileNames = fs.readdirSync(imagesDirectory);

    const images = fileNames.map((fileName: string) => ({
      src: `${process.env.pathPrefix}/content/${service}/${fileName}`,
      alt: fileName.replace(/\.[^/.]+$/, ''),
    }));

   // return res.status(200).json(images);

    return images;
}
