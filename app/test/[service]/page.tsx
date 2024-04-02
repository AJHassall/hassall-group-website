// app/services/[service]/page.js or similar

import { pleaseWork } from '@/app/api/images/route';
import GalleryPage from '@/components/Gallery/Gallery';
import { Suspense } from 'react';

export async function generateStaticParams() {
  return [
    { service: 'extensions' },
    // { productId: 'Fencing' },
    // { productId: 'KitchenRenovations' },
    // { productId: 'LoftConversions' },
    // { productId: 'Patios' },
    // { productId: 'Roofing' },
  ];
}

async function Temp({ params }: { params: { service: string } }) {
  const { service } = params;

  const res = await fetch(`${process.env.BASE_URL}/services/data.json`);
  const servicesData = await res.json();
  const serviceData = servicesData.find((s: { name: string; }) => s.name === params.service);

  const imageReq = await pleaseWork(`${service}`);
  // const imagePaths = await imageReq.json();
  console.log(imageReq);
  // console.log(imagePaths);
  return (
    <>
        <GalleryPage serviceData={serviceData} imagePaths={imageReq} />
    </>
  );
}

async function Service({ params }: { params: { service: string } }) {
  return (
    <>
        <Suspense fallback={<></>}>
          <Temp params={params} />
        </Suspense>
        {/* <GalleryPage serviceData={serviceData} imagePaths={imagePaths} /> */}
    </>
  );
}

export default Service;
