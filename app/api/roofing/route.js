import fs from 'fs';
import path from 'path';

export async function GET(req, res) {

  const imagesDirectory = path.join(process.cwd(), 'public/content/roofing');
  const fileNames = fs.readdirSync(imagesDirectory);

  const images = fileNames.map(fileName => ({
    src: `${process.env.pathPrefix}/content/roofing/${fileName}`,
    alt: fileName.replace(/\.[^/.]+$/, "")  
  }));

 // return res.status(200).json(images);

  return Response.json(images);
}
