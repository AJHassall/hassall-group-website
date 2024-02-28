import { FeaturesCards } from '@/components/FeaturesCards/FeaturesCards';
import CarouselHeroHeader from '@/components/CarouselHeroHeader/CarouselHeroHeader';
import { ArticlesCardsGrid } from '@/components';

export default function HomePage() {
  return (
    <>
      <CarouselHeroHeader />
      <FeaturesCards />
      <ArticlesCardsGrid />
    </>
  );
}
