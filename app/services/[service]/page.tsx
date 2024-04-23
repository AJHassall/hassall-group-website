import { GetImages } from '@/app/Helpers/GetImages';
import GalleryPage from '@/components/Gallery/Gallery';
import { wording } from './data.json';

// export const dynamicParams = false;

export async function generateStaticParams() {
  return [
    { service: 'fencing' },
    { service: 'kitchenrenovations' },
    { service: 'conversions' },
    { service: 'landscaping' },
    { service: 'carpentryandjoinery' },
    { service: 'bathrooms' },
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
