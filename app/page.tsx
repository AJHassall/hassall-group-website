import { FeaturesCards } from '@/components/FeaturesCards/FeaturesCards';
import { CarouselHeroHeader } from '@/components/CarouselHeroHeader/CarouselHeroHeader';
import { ArticlesCardsGrid } from '@/components';
import Intro from '@/components/Intro/Intro';

export default function HomePage() {
  return (
    <>
      <CarouselHeroHeader />
      <Intro />
      <FeaturesCards />
      <ArticlesCardsGrid />
    </>
  );
}
