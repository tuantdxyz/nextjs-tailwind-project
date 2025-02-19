"use client"; // Đánh dấu đây là Client Component

import { useEffect } from 'react';
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
  imageSrc: string;
}

const products: Product[] = [
  {
    id: '1',
    slug: 'essential-plan',
    name: 'Essential Plan',
    shortDescription: 'Unlock unlimited features with our Essential Plan.',
    detailedDescription: 'Unlock unlimited features with our Essential Plan, including premium support and access to new features as they are released.',
    price: 29,
    imageSrc: 'https://cdn.pixabay.com/photo/2020/05/22/17/53/mockup-5206355_960_720.jpg'
  },
  {
    id: '2',
    slug: 'premium-plan',
    name: 'Premium Plan',
    shortDescription: 'Get more with our Premium Plan.',
    detailedDescription: 'The Premium Plan provides additional storage and advanced analytics tools for your business needs.',
    price: 49,
    imageSrc: 'https://cdn.pixabay.com/photo/2020/05/22/17/53/mockup-5206355_960_720.jpg'
  },
  {
    id: '3',
    slug: 'enterprise-plan',
    name: 'Enterprise Plan',
    shortDescription: 'All features for enterprises, enterprises plan.',
    detailedDescription: 'The Enterprise Plan includes all features and custom solutions tailored specifically for large organizations.',
    price: 79,
    imageSrc: 'https://cdn.pixabay.com/photo/2020/05/22/17/53/mockup-5206355_960_720.jpg'
  },
];

const ProductDetail = ({ params }: { params: Promise<{ slug: string }> }) => {
  const [slug, setSlug] = React.useState<string>('');
  const { state: cart, dispatch } = useCart();

  useEffect(() => {
    params.then(p => setSlug(p.slug));
  }, [params]);

  const product = products.find(p => p.slug === slug);

  if (!product) {
    return <h1>Product not found</h1>;
  }

  const handleAddToCart = () => {
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
    { name: 'Services', href: '/services', current: false },
    { name: product.name, href: `/services/${product.slug}`, current: true },
  ];

  return (
    <>
      <div className="bg-gray-100 dark:bg-gray-800 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mt-20"> {/* Thêm khoảng cách phía trên để tránh bị che bởi Navbar */}
            <Breadcrumbs items={breadcrumbItems} />
          </div>
          <div className="flex flex-col md:flex-row -mx-4 mt-4">
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