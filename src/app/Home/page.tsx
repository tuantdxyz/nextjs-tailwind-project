import React from 'react';
import Link from 'next/link';
import HomeSlide from '../../components/homeSlide';
import ProcessInto from '../../components/processInto';
import FeaturesSection from '../../components/featuresSection';
import ReviewsSection from '../../components/reviewsSection';
import TopSellersSection from '../../components/topSellersSection';
import PromotionsSection from '../../components/promotionsSection';

export default function Home() {
  return (
    <div>
      {/* HomeSlide component */}
      <HomeSlide />
      {/* Import ProcessInto component */}
      {/* <ProcessInto /> */}
      {/* Import TopSellersSection component */}
      {/* <TopSellersSection /> */}
      {/* Import FeaturesSection component */}
      {/* <FeaturesSection /> */}
      {/* Import PromotionsSection component */}
      {/* <PromotionsSection /> */}
      {/* Import ReviewsSection component */}
      {/* <ReviewsSection /> */}
    </div>
  );
}