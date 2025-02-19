"use client"; // Declare this as a Client Component

import { useEffect, useState } from 'react';
import Link from 'next/link';
import React from 'react';
import { toast } from 'react-toastify';
import Breadcrumbs from '../../../components/breadcrumbs';
import { useCart } from '../../../lib/features/cart/cartContext';

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

const ProductDetail = ({ params }: { params: Promise<{ slug: string }> }) => {
  const [slug, setSlug] = useState<string>('');
  const { state: cart, dispatch } = useCart();

  useEffect(() => {
    params.then(p => setSlug(p.slug));
  }, [params]);

  const product = products.find(p => p.slug === slug);

  if (!product) {
    return <h1>Product not found</h1>;
  }

  const handleAddToCart = () => {
    // Check ID của product và service để không trùng nhau
    // TODO
    const existingProduct = cart.items.find(item => item.id === product.id);
    if (existingProduct) {
      toast.info(`${product.name} is already in the cart!`);
    } else {
      dispatch({ type: 'ADD_PRODUCT', payload: { ...product, quantity: 1 } });
      toast.success(`${product.name} was successfully added.`);
    }
  };

  const handleBuyNow = () => {
    handleAddToCart();
    // Chuyển hướng đến trang giỏ hàng
  };

  const breadcrumbItems = [
    { name: 'Home', href: '/', current: false },
    { name: 'Products', href: '/product', current: false },
    { name: product.name, href: `/product/${product.slug}`, current: true },
  ];

  return (
    <>
      <div className="bg-gray-100 dark:bg-gray-800 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mt-16"> {/* Thêm khoảng cách phía trên để tránh bị che bởi Navbar */}
            <Breadcrumbs items={breadcrumbItems} />
          </div>
          <div className="flex flex-col md:flex-row -mx-4 mt-4">
            <div className="md:flex-1 px-4">
              <div className="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
                <img className="w-full h-full object-cover" src={product.imageSrc} alt={product.name} />
              </div>
              <div className="flex -mx-2 mb-4">
                <div className="w-1/2 px-2">
                  <button
                    onClick={handleAddToCart}
                    className="w-full bg-gray-900 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700"
                  >
                    Add to Cart
                  </button>
                </div>
                <div className="w-1/2 px-2">
                  <button className="w-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white py-2 px-4 rounded-full font-bold hover:bg-gray-300 dark:hover:bg-gray-600">
                    Add to Wishlist
                  </button>
                </div>
              </div>
            </div>
            <div className="md:flex-1 px-4">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">{product.name}</h2>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{product.shortDescription}</p>
              <div className="flex mb-4">
                <div className="mr-4">
                  <span className="font-bold text-gray-700 dark:text-gray-300">Price:</span>
                  <span className="text-gray-600 dark:text-gray-300">${product.price.toFixed(2)}</span>
                </div>
                <div>
                  <span className="font-bold text-gray-700 dark:text-gray-300">Availability:</span>
                  <span className="text-gray-600 dark:text-gray-300">In Stock</span>
                </div>
              </div>
              <Link href="/cart">
                <button
                  onClick={handleBuyNow}
                  className="dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-base flex items-center justify-center leading-none text-white bg-gray-800 w-full py-4 hover:bg-gray-700"
                >
                  <img src="/buynow.svg" alt="Buy now icon" width={16} height={17} className="mr-3" />
                  Buy now
                </button>
              </Link>
              <div className="mt-6">
                <span className="font-bold text-gray-700 dark:text-gray-300">Product Description:</span>
                <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">{product.detailedDescription}</p>
              </div>
              <div className="mt-6 border-t max-w-sm mx-auto w-full"></div>
              <Link href="/" className="flex items-center font-semibold text-blue-600 text-sm mt-4">
                <img src="/back.svg" alt="Back" width={20} height={20} className="mr-2" />
                <span className="ml-2">Continue Shopping</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;