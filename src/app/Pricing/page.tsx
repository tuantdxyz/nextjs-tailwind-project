"use client";
import { useState } from 'react';

const PricingTable = () => {
  const [isAnnual, setIsAnnual] = useState(true);

  // Định nghĩa thông tin cho các gói
  const packages = {
    Essential: {
      price: { annual: 29, monthly: 35 },
      originalPrice: { annual: 39, monthly: 0 },
      salePrice: { annual: 19, monthly: 33 },
      includesAnnual: [
        { text: "Unlimited annual placeholder texts", icon: "check" },
        { text: "Advanced reporting features", icon: "check" },
        { text: "Priority customer support", icon: "cross" },
      ],
      includesMonthly: [
        { text: "Limited monthly placeholder texts", icon: "check" },
        { text: "Basic reporting features", icon: "check" },
        { text: "Standard customer support", icon: "cross" },
      ],
      saleStartDate: new Date('2023-12-01'),
      saleEndDate: new Date('2024-12-25'),
      count: { annual: 60, monthly: 30 },
    },
    Perform: {
      price: { annual: 49, monthly: 55 },
      originalPrice: { annual: 59, monthly: 69 },
      salePrice: { annual: 39, monthly: 0 },
      includesAnnual: [
        { text: "Advanced analytics", icon: "check" },
        { text: "Enhanced support", icon: "check" },
        { text: "Custom integrations", icon: "cross" },
      ],
      includesMonthly: [
        { text: "Basic analytics", icon: "check" },
        { text: "Standard support", icon: "check" },
        { text: "Limited integrations", icon: "cross" },
      ],
      saleStartDate: new Date('2023-12-01'),
      saleEndDate: new Date('2024-01-01'),
      count: { annual: 20, monthly: 55 },
    },
    Enterprise: {
      price: { annual: 79, monthly: 85 },
      originalPrice: { annual: 99, monthly: 109 },
      salePrice: { annual: 69, monthly: 79 },
      includesAnnual: [
        { text: "All features from Perform", icon: "check" },
        { text: "Dedicated account manager", icon: "check" },
        { text: "Custom integrations", icon: "check" },
      ],
      includesMonthly: [
        { text: "Core features from Perform", icon: "check" },
        { text: "Standard account manager", icon: "check" },
        { text: "Basic integrations", icon: "cross" },
      ],
      saleStartDate: new Date('2023-12-01'),
      saleEndDate: new Date('2024-01-01'),
      count: { annual: 75, monthly: 10 },
    },
  };

  // Tự động xác định isSale và isMostPopular
  const processedPackages = Object.entries(packages).map(([key, pkg]) => {
    const currentDate = new Date();
    const isInSalePeriod = currentDate >= pkg.saleStartDate && currentDate <= pkg.saleEndDate;

    const isSale = isInSalePeriod && (
      (isAnnual && pkg.salePrice.annual < pkg.originalPrice.annual) ||
      (!isAnnual && pkg.salePrice.monthly < pkg.originalPrice.monthly && pkg.salePrice.monthly > 0)
    );

    const isMostPopular = (isAnnual ? pkg.count.annual : pkg.count.monthly) > 50;

    return {
      ...pkg,
      isSale,
      isMostPopular,
      title: key,
    };
  });

  // Sắp xếp gói theo số lượt bán
  const sortedPackages = processedPackages.sort((a, b) => {
    return (isAnnual ? b.count.annual : b.count.monthly) - (isAnnual ? a.count.annual : a.count.monthly);
  });

  return (
    <div className="relative font-inter antialiased">
      <main className="relative min-h-screen flex flex-col justify-center bg-slate-50 overflow-hidden">
        <div className="w-full max-w-6xl mx-auto px-4 md:px-6 py-24">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold text-black sm:text-5xl">
              Choose Your Plan
            </h2>
            <p className="mt-4 text-xl text-gray-500">
              Unlock the power of decentralized finance with our cutting-edge solutions.
            </p>
          </div>
          <div>
            {/* Pricing toggle */}
            <div>
              <div className="flex justify-center max-w-[14rem] m-auto mb-8 lg:mb-16">
                <div className="relative flex w-full p-1 bg-white dark:bg-slate-900 rounded-full">
                  <span className="absolute inset-0 m-1 pointer-events-none" aria-hidden="true">
                    <span className={`absolute inset-0 w-1/2 bg-indigo-500 rounded-full shadow-sm shadow-indigo-950/10 transform transition-transform duration-150 ease-in-out ${isAnnual ? 'translate-x-0' : 'translate-x-full'}`}></span>
                  </span>
                  <button
                    className={`relative flex-1 text-base font-medium h-12 rounded-full focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600 transition-all duration-150 ease-in-out ${isAnnual ? 'text-white bg-indigo-500' : 'text-slate-500 dark:text-slate-400 hover:bg-indigo-200'}`}
                    onClick={() => setIsAnnual(true)}
                    aria-pressed={isAnnual}
                  >
                    Monthly <span className={isAnnual ? 'text-indigo-200' : 'text-slate-400 dark:text-slate-500'}>-20%</span>
                  </button>
                  <div className="w-2.5"></div> {/* Khoảng cách giữa hai nút */}
                  <button
                    className={`relative flex-1 text-base font-medium h-12 rounded-full focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600 transition-all duration-150 ease-in-out ${!isAnnual ? 'text-white bg-indigo-500' : 'text-slate-500 dark:text-slate-400 hover:bg-indigo-200'}`}
                    onClick={() => setIsAnnual(false)}
                    aria-pressed={!isAnnual}
                  >
                    Annual
                  </button>
                </div>
              </div>
            </div>

            <div className="max-w-sm mx-auto grid gap-6 lg:grid-cols-3 items-start lg:max-w-none">
              {/* Pricing tabs */}
              {sortedPackages.map((pkg) => (
                <PricingCard
                  key={pkg.title}
                  title={pkg.title}
                  price={isAnnual ? pkg.price.annual : pkg.price.monthly}
                  originalPrice={isAnnual ? pkg.originalPrice.annual : pkg.originalPrice.monthly}
                  includes={isAnnual ? pkg.includesAnnual : pkg.includesMonthly}
                  mostPopular={pkg.isMostPopular}
                  isSale={pkg.isSale}
                />
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

const PricingCard = ({ title, price, originalPrice, includes, mostPopular, isSale }: { title: string; price: number; originalPrice: number; includes: { text: string; icon: string }[]; mostPopular?: boolean; isSale: boolean }) => {
  return (
    <div className="h-full">
      <div className="relative flex flex-col h-full p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-900 shadow shadow-slate-950/5">
        {mostPopular && (
          <div className="absolute top-0 right-0 mr-6 -mt-4">
            <div className="inline-flex items-center text-xs font-semibold py-1.5 px-3 bg-emerald-500 text-white rounded-full shadow-sm shadow-slate-950/5">
              Most Popular
            </div>
          </div>
        )}
        {isSale && (
          <div className="absolute top-0 left-0 ml-6 -mt-4">
            <div className="inline-flex items-center text-xs font-semibold py-1.5 px-3 bg-red-500 text-white rounded-full shadow-sm shadow-slate-950/5">
              Sale
            </div>
          </div>
        )}
        <div className="mb-5">
          <div className="text-slate-900 dark:text-slate-200 font-semibold mb-1">{title}</div>
          <div className="inline-flex items-baseline mb-2">
            <span className="text-slate-900 dark:text-slate-200 font-bold text-3xl">$</span>
            <div className="mb-4 space-x-2">
              <span className="text-slate-900 dark:text-slate-200 font-bold text-4xl">{price}</span>
              {isSale && (
                <span className="line-through text-1xl font-sans text-gray-500/70">${originalPrice}</span>
              )}
            </div>
          </div>
          <div className="text-sm text-slate-500 mb-5">There are many variations available, but the majority have suffered.</div>
          <a className="w-full inline-flex justify-center whitespace-nowrap rounded-lg bg-indigo-500 px-3.5 py-2.5 text-sm font-medium text-white shadow-sm shadow-indigo-950/10 hover:bg-indigo-600 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600 transition-colors duration-150" href="#0">
            Purchase Plan
          </a>
        </div>
        <div className="text-slate-900 dark:text-slate-200 font-medium mb-3">Includes:</div>
        <ul className="text-slate-600 dark:text-slate-400 text-sm space-y-3 grow">
          {includes.map((item, index) => (
            <li className="flex items-center" key={index}>
              {item.icon === "check" ? (
                <img src="/check.svg" alt="Check" className="w-3 h-3 mr-3 shrink-0" />
              ) : (
                <img src="/cross.svg" alt="Cross" className="w-3 h-3 mr-3 shrink-0" />
              )}
              <span>{item.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PricingTable;