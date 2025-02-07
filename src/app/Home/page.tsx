import React from 'react';
import Link from 'next/link';
import HomeSlide from '../../components/homeSlide';
import ProcessInto from '../../components/processInto';

export default function Home() {
  return (
    <div>
      {/* HomeSlide component */}
      <HomeSlide />
      {/* Import ProcessInto component */}
      <ProcessInto />
    </div>
  );
}