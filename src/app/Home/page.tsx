import React from 'react';
import Link from 'next/link';
import HomeSlide from '../../components/homeSlide';
import ProcessInto from '../../components/processInto';
import FeaturesSection from '../../components/featuresSection';
import ReviewsSection from '../../components/reviewsSection';
import TopSellersSection from '../../components/topSellersSection';
import PromotionsSection from '../../components/promotionsSection';
import PartnerSection from '../../components/partnerSection';
import CustomerActivitySection from '../../components/customerActivitySection';
export default function Home() {
  return (
    <div>
      {/* HomeSlide component */}
      <HomeSlide />
      {/* Import ProcessInto component */}
      <ProcessInto />
      {/* Import PromotionsSection component */}
      <PromotionsSection />
      {/* Import CustomerActivitySection Two Column component */}
      <CustomerActivitySection />
      {/* Import TopSellersSection component */}
      <TopSellersSection />
      {/* Import FeaturesSection component */}
      <FeaturesSection />
      {/* Import ReviewsSection component */}
      <ReviewsSection />
      {/* Import PartnerSection component  */}
      <PartnerSection />
    </div>
  );
}