import { FeaturesCards } from '@/components/FeaturesCards/FeaturesCards';
import { CarouselHeroHeader } from '@/components/CarouselHeroHeader/CarouselHeroHeader';
import { ArticlesCardsGrid } from '@/components';
import Intro from '@/components/Intro/Intro';
import CustomerReviews from '@/components/CustomerReviews/CustomerReviews';

export default function HomePage() {
  return (
    <>
      <CarouselHeroHeader />
      <Intro />
      <ArticlesCardsGrid />
      <FeaturesCards />
      <CustomerReviews />
    </>
  );
}
