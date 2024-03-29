import GalleryPage from '@/components/Gallery/Gallery';

export async function generateStaticParams() {
  const url = 'http://localhost:3000/api'; // Replace with the actual endpoint
  const requestBody = { service: 'extensions' };

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(requestBody),
  });

  return [
    { productId: 'extensions', response },
    { productId: 'Fencing', response },
    { productId: 'KitchenRenovations', response },
    { productId: 'LoftConversions', response },
    { productId: 'Patios', response },
    { productId: 'Roofing', response },
  ];
}

  function Service({ params }: { params: { productId: string } }) {
  const { productId } = params;
  return (
    <>
        <GalleryPage productId={productId} />
    </>
  );
}

export default Service;
