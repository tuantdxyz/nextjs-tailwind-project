"use client";
import { useState } from 'react';

const PricingTable = () => {
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <div className="relative font-inter antialiased">
      <main className="relative min-h-screen flex flex-col justify-center bg-slate-50 overflow-hidden">
        <div className="w-full max-w-6xl mx-auto px-4 md:px-6 py-24">
          <div>
            {/* Pricing toggle */}
            <div className="flex justify-center max-w-[14rem] m-auto mb-8 lg:mb-16">
              <div className="relative flex w-full p-1 bg-white dark:bg-slate-900 rounded-full">
                <span className="absolute inset-0 m-1 pointer-events-none" aria-hidden="true">
                  <span className={`absolute inset-0 w-1/2 bg-indigo-500 rounded-full shadow-sm shadow-indigo-950/10 transform transition-transform duration-150 ease-in-out ${isAnnual ? 'translate-x-0' : 'translate-x-full'}`}></span>
                </span>
                <button
                  className={`relative flex-1 text-sm font-medium h-8 rounded-full focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600 transition-colors duration-150 ease-in-out ${isAnnual ? 'text-white' : 'text-slate-500 dark:text-slate-400'}`}
                  onClick={() => setIsAnnual(true)}
                  aria-pressed={isAnnual}
                >
                  Yearly <span className={isAnnual ? 'text-indigo-200' : 'text-slate-400 dark:text-slate-500'}>-20%</span>
                </button>
                <button
                  className={`relative flex-1 text-sm font-medium h-8 rounded-full focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600 transition-colors duration-150 ease-in-out ${!isAnnual ? 'text-white' : 'text-slate-500 dark:text-slate-400'}`}
                  onClick={() => setIsAnnual(false)}
                  aria-pressed={!isAnnual}
                >
                  Monthly
                </button>
              </div>
            </div>

            <div className="max-w-sm mx-auto grid gap-6 lg:grid-cols-3 items-start lg:max-w-none">
              {/* Pricing tabs */}
              <PricingCard title="Essential" price={isAnnual ? 29 : 35} />
              <PricingCard title="Perform" price={isAnnual ? 49 : 55} mostPopular />
              <PricingCard title="Enterprise" price={isAnnual ? 79 : 85} mostPopular/>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

const PricingCard = ({ title, price, mostPopular }: { title: string; price: number; mostPopular?: boolean }) => {
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
        <div className="mb-5">
          <div className="text-slate-900 dark:text-slate-200 font-semibold mb-1">{title}</div>
          <div className="inline-flex items-baseline mb-2">
            <span className="text-slate-900 dark:text-slate-200 font-bold text-3xl">$</span>
            <div className="mb-4 space-x-2">
            <span className="text-slate-900 dark:text-slate-200 font-bold text-4xl">{price}</span>
                <span className="text-2xl text-indigo-100 line-through">$39/mo</span>
            </div>
          </div>
          <div className="text-sm text-slate-500 mb-5">There are many variations available, but the majority have suffered.</div>
          <a className="w-full inline-flex justify-center whitespace-nowrap rounded-lg bg-indigo-500 px-3.5 py-2.5 text-sm font-medium text-white shadow-sm shadow-indigo-950/10 hover:bg-indigo-600 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600 transition-colors duration-150" href="#0">
            Purchase Plan
          </a>
        </div>
        <div className="text-slate-900 dark:text-slate-200 font-medium mb-3">Includes:</div>
        <ul className="text-slate-600 dark:text-slate-400 text-sm space-y-3 grow">
          {["Unlimited placeholder texts", "Consectetur adipiscing elit", "Excepteur sint occaecat cupidatat", "Officia deserunt mollit anim", "Predefined chunks as necessary"].map((item, index) => (
            <li className="flex items-center" key={index}>
              <svg className="w-3 h-3 fill-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
              </svg>

              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="w-5 h-5"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PricingTable;