"use client";

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

interface Product {
  id: string;
  slug: string;
  name: string;
  price: number;
  shortDescription: string;
  detailedDescription: string;
  quantity: number;
  brand: string;
  originalPrice: string;
  imageSrc: string;
}

const products: Product[] = [
  {
    id: '1',
    slug: 'eco-friendly-bamboo-toothbrush',
    name: 'Eco-friendly Bamboo Toothbrush',
    price: 5,
    shortDescription: 'Eco-friendly Bamboo Toothbrush',
    detailedDescription: 'Eco-friendly Bamboo Toothbrush with soft bristles and ergonomic handle.',
    quantity: 0,
    brand: 'EcoHome',
    originalPrice: '10',
    imageSrc: 'https://images.unsplash.com/photo-1646753522408-077ef9839300?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
  },
  {
    id: '2',
    slug: 'wireless-bluetooth-headphones',
    name: 'Wireless Bluetooth Headphones',
    price: 79,
    shortDescription: 'Wireless Bluetooth Headphones',
    detailedDescription: 'High-quality wireless Bluetooth headphones with noise cancellation and long battery life.',
    quantity: 0,
    brand: 'Techie',
    originalPrice: '129',
    imageSrc: 'https://images.unsplash.com/photo-1651950519238-15835722f8bb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8Mjh8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
  },
  {
    id: '3',
    slug: 'stainless-steel-chef-knife',
    name: 'Stainless Steel Chef Knife',
    price: 29,
    shortDescription: 'Stainless Steel Chef Knife',
    detailedDescription: 'Professional-grade stainless steel chef knife with ergonomic handle and sharp blade.',
    quantity: 0,
    brand: 'KitchenPro',
    originalPrice: '49',
    imageSrc: 'https://images.unsplash.com/photo-1651950537598-373e4358d320?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MjV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
  },
  {
    id: '4',
    slug: 'luxury-silk-scarf',
    name: 'Luxury Silk Scarf',
    price: 45,
    shortDescription: 'Luxury Silk Scarf',
    detailedDescription: 'Elegant luxury silk scarf with intricate patterns and soft texture.',
    quantity: 0,
    brand: 'Glamour',
    originalPrice: '75',
    imageSrc: 'https://images.unsplash.com/photo-1651950540805-b7c71869e689?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8Mjl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
  },
  {
    id: '5',
    slug: 'yoga-mat-with-alignment-lines',
    name: 'Yoga Mat with Alignment Lines',
    price: 20,
    shortDescription: 'Yoga Mat with Alignment Lines',
    detailedDescription: 'High-quality yoga mat with alignment lines for perfect poses and extra grip.',
    quantity: 0,
    brand: 'FitnessHub',
    originalPrice: '35',
    imageSrc: 'https://images.unsplash.com/photo-1649261191624-ca9f79ca3fc6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NDd8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
  },
  {
    id: '6',
    slug: 'wi-fi-smart-plug',
    name: 'Wi-Fi Smart Plug',
    price: 15,
    shortDescription: 'Wi-Fi Smart Plug',
    detailedDescription: 'Wi-Fi smart plug for remote control of home appliances and energy monitoring.',
    quantity: 0,
    brand: 'SmartHome',
    originalPrice: '25',
    imageSrc: 'https://images.unsplash.com/photo-1649261191606-cb2496e97eee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
  }
];

const ProductCard: React.FC<Product> = ({ brand, name, price, originalPrice, imageSrc, slug }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/product/${slug}`);
  };

  return (
    <div className="w-72 bg-white dark:bg-gray-800 shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl" onClick={handleClick}>
      <img src={imageSrc} alt={name} className="h-80 w-72 object-cover rounded-t-xl" />
      <div className="px-4 py-3 w-72">
        <span className="text-gray-400 dark:text-gray-300 mr-3 uppercase text-xs">{brand}</span>
        <p className="text-lg font-bold text-black dark:text-white truncate block capitalize">{name}</p>
        <div className="flex items-center">
          <p className="text-lg font-semibold text-black dark:text-white cursor-auto my-3">${price.toFixed(2)}</p>
          <del>
            <p className="text-sm text-gray-600 dark:text-gray-400 cursor-auto ml-2">${originalPrice}</p>
          </del>
          <div className="ml-auto">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="h-5 w-5 text-black dark:text-white">
              <path fillRule="evenodd" d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"/>
              <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProductList: React.FC = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="text-center p-10">
      <h1 className="font-bold text-4xl mb-4 text-black dark:text-white">Responsive Product Card Grid</h1>
      <h1 className="text-3xl text-black dark:text-white">Tailwind CSS</h1>
      <section id="Projects" className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            {...product}
          />
        ))}
      </section>
    </div>
  );
};

export default ProductList;