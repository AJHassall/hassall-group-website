import fs from 'fs';
import path from 'path';

export async function GetImages(service :string) {
    const imagesDirectory = path.join(process.cwd(), `public/content/${service}`);
    const fileNames = fs.readdirSync(imagesDirectory);

    const images = fileNames.map((fileName: string) => ({
      src: `${process.env.pathPrefix}/content/${service}/${fileName}`,
      alt: fileName.replace(/\.[^/.]+$/, ''),
    }));

    return images;
}
