import React from 'react';
import Link from 'next/link';
import HomeSlide from '../../components/homeSlide';
import ProcessInto from '../../components/processInto';
import HotDeal from '../../components/hotDeal';
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
      <ProcessInto />
      {/* Import ReviewsSection component */}
      <PromotionsSection />
      {/* Import TopSellersSection component */}
      {/* <TopSellersSection /> */}
      {/* Import FeaturesSection component */}
      {/* <FeaturesSection /> */}
      {/* Import PromotionsSection component */}
      {/* <ReviewsSection /> */}
    </div>
  );
}