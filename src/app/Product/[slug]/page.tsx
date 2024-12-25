"use client"; // Thêm dòng này để chỉ định đây là Client Component

import { useDispatch } from 'react-redux';
import Link from 'next/link';
import { addProduct } from '../../../lib/features/cart/productSlice';
import Head from 'next/head';
import React from 'react';
import { toast } from 'react-toastify'; // Import toast từ React Toastify

interface Product {
  id: string;
  slug: string;
  name: string;
  price: number;
  description: string;
}

interface Params {
  slug: string;
}

const products: Product[] = [
  { id: '1', slug: 'essential-plan', name: 'Essential Plan', description: 'Unlock unlimited features with our Essential Plan.', price: 29 },
  { id: '2', slug: 'premium-plan', name: 'Premium Plan', description: 'Get more with our Premium Plan.', price: 49 },
  { id: '3', slug: 'enterprise-plan', name: 'Enterprise Plan', description: 'All features for enterprises.', price: 79 },
];

const ProductDetail = ({ params }: { params: Promise<{ slug: string }> }) => {
  const dispatch = useDispatch();
  const { slug } = React.use(params);
  const product = products.find(p => p.slug === slug);

  if (!product) {
    return <h1>Product not found</h1>;
  }

  const handleAddToCart = () => {
    // Dispatch action để thêm sản phẩm vào Redux Store
    dispatch(addProduct({ ...product, quantity: 1 }));
    toast.success(`${product.name} was successfully added.`);
  };

  return (
    <>
      <Head>
        <title>{product.name}</title>
        <meta name="description" content={product.description} />
      </Head>
      <div className="bg-gray-100 dark:bg-gray-800 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row -mx-4">
            <div className="md:flex-1 px-4">
              <div className="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
                <img className="w-full h-full object-cover" src="https://cdn.pixabay.com/photo/2020/05/22/17/53/mockup-5206355_960_720.jpg" alt="Product Image" />
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
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{product.description}</p>
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
                  className="dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-base flex items-center justify-center leading-none text-white bg-gray-800 w-full py-4 hover:bg-gray-700"
                >
                  <img src="/buynow.svg" alt="Buy now icon" width={16} height={17} className="mr-3" />
                  Buy now
                </button>
              </Link>
              <div>
                <span className="font-bold text-gray-700 dark:text-gray-300">Product Description:</span>
                <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">{product.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;