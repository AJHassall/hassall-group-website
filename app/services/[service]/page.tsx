import { GetImages } from '@/app/Helpers/GetImages';
import GalleryPage from '@/components/Gallery/Gallery';
import { wording } from './data.json';

// export const dynamicParams = false;

export async function generateStaticParams() {
  return [
    { service: 'extensions' },
    { service: 'fencing' },
    { service: 'kitchenrenovations' },
    { service: 'loftconversions' },
    { service: 'patios' },
    { service: 'roofing' },
  ];
}

async function Service({ params }: { params: { service: string } }) {
  const { service } = params;
  const serviceData = wording.find((s: { name: string; }) => s.name === params.service);
  const imagePaths = await GetImages(`${service}`);
  return (
    <>
        <GalleryPage serviceData={serviceData} imagePaths={imagePaths} />
    </>
  );
}

export default Service;
