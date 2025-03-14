"use client"; // Declare this as a Client Component

import { useEffect, useState } from 'react';
import Link from 'next/link';
import React from 'react';
import { toast } from 'react-toastify';
import Image from 'next/image';
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
  sold: number;
  notes: string;
  promotionStartTime: Date | null;
  promotionEndTime: Date | null;
  soldDuringPromotion: number;
  totalSale: number;
}

const products: Product[] = [
  {
    id: '1',
    slug: 'airpod-2',
    name: 'Airpod 2',
    price: 150,
    shortDescription: 'Tai nghe không dây Airpod 2',
    detailedDescription: 'Tai nghe không dây Airpod 2 với âm thanh chất lượng cao và thời lượng pin lâu.',
    quantity: 100,
    brand: 'Apple',
    originalPrice: '200',
    imageSrc: 'https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    sold: 50,
    notes: 'Sản phẩm chất lượng cao',
    promotionStartTime: new Date("2025-03-14T17:35:00"),
    promotionEndTime: new Date("2025-03-21T17:35:00"),
    soldDuringPromotion: 30,
    totalSale: 1000
  },
  {
    id: '2',
    slug: 'airpod-3',
    name: 'Airpod 3',
    price: 180,
    shortDescription: 'Tai nghe không dây Airpod 3',
    detailedDescription: 'Tai nghe không dây Airpod 3 với âm thanh không gian và thời lượng pin lâu.',
    quantity: 100,
    brand: 'Apple',
    originalPrice: '230',
    imageSrc: 'https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    sold: 60,
    notes: 'Sản phẩm mới nhất của Apple',
    promotionStartTime: new Date("2025-03-14T17:35:00"),
    promotionEndTime: new Date("2025-03-21T17:35:00"),
    soldDuringPromotion: 40,
    totalSale: 1000
  },
  {
    id: '3',
    slug: 'airpod-pro',
    name: 'Airpod Pro',
    price: 250,
    shortDescription: 'Tai nghe không dây Airpod Pro',
    detailedDescription: 'Tai nghe không dây Airpod Pro với chống ồn chủ động và âm thanh vượt trội.',
    quantity: 100,
    brand: 'Apple',
    originalPrice: '300',
    imageSrc: 'https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    sold: 70,
    notes: 'Sản phẩm cao cấp với chất lượng âm thanh tuyệt vời',
    promotionStartTime: new Date("2025-03-14T17:35:00"),
    promotionEndTime: new Date("2025-03-21T17:35:00"),
    soldDuringPromotion: 50,
    totalSale: 1000
  },
  {
    id: '4',
    slug: 'airpod-pro-2',
    name: 'Airpod Pro 2',
    price: 270,
    shortDescription: 'Tai nghe không dây Airpod Pro 2',
    detailedDescription: 'Tai nghe không dây Airpod Pro 2 với chống ồn và âm thanh không gian.',
    quantity: 100,
    brand: 'Apple',
    originalPrice: '320',
    imageSrc: 'https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    sold: 80,
    notes: 'Phiên bản mới nâng cấp với nhiều tính năng mới',
    promotionStartTime: new Date("2025-03-14T17:35:00"),
    promotionEndTime: new Date("2025-03-21T17:35:00"),
    soldDuringPromotion: 60,
    totalSale: 1000
  },
  {
    id: '5',
    slug: 'pin-iphone-8',
    name: 'Pin iPhone 8',
    price: 50,
    shortDescription: 'Pin thay thế cho iPhone 8',
    detailedDescription: 'Pin thay thế chất lượng cao cho iPhone 8, dung lượng lớn và bền bỉ.',
    quantity: 100,
    brand: 'Apple',
    originalPrice: '70',
    imageSrc: 'https://images.unsplash.com/photo-1511376777868-611b54f68947?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    sold: 100,
    notes: 'Pin chính hãng, đảm bảo chất lượng',
    promotionStartTime: new Date("2025-03-14T17:35:00"),
    promotionEndTime: new Date("2025-03-21T17:35:00"),
    soldDuringPromotion: 70,
    totalSale: 1000
  },
  {
    id: '6',
    slug: 'pin-iphone-9',
    name: 'Pin iPhone 9',
    price: 60,
    shortDescription: 'Pin thay thế cho iPhone 9',
    detailedDescription: 'Pin thay thế chất lượng cao cho iPhone 9, dung lượng lớn và bền bỉ.',
    quantity: 100,
    brand: 'Apple',
    originalPrice: '80',
    imageSrc: 'https://images.unsplash.com/photo-1511376777868-611b54f68947?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    sold: 90,
    notes: 'Pin chính hãng, đảm bảo chất lượng',
    promotionStartTime: new Date("2025-03-14T17:35:00"),
    promotionEndTime: new Date("2025-03-21T17:35:00"),
    soldDuringPromotion: 80,
    totalSale: 1000
  }
];

const ProductDetail = ({ params }: { params: Promise<{ slug: string }> }) => {
  const [slug, setSlug] = useState<string>('');
  const { state: cart, dispatch } = useCart();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const slideInterval = 5000; // 5 seconds

  useEffect(() => {
    params.then(p => setSlug(p.slug));
  }, [params]);

  const product = products.find(p => p.slug === slug);
  const similarProducts = products.filter(p => p.id !== product?.id);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const itemsToShow = isMobile ? 2 : 3;
      setCurrentIndex((prevIndex) => (prevIndex + itemsToShow) % similarProducts.length);
    }, slideInterval);

    return () => {
      clearInterval(interval);
    };
  }, [similarProducts.length, slideInterval, isMobile]);

  if (!product) {
    return <h1>Product not found</h1>;
  }

  const handleAddToCart = (product: Product) => {
    const existingProduct = cart.items.find(item => item.id === product.id);
    if (existingProduct) {
      toast.info(`${product.name} is already in the cart!`);
    } else {
      dispatch({ type: 'ADD_PRODUCT', payload: { ...product, quantity: 1 } });
      toast.success(`${product.name} was successfully added.`);
    }
  };

  const handleBuyNow = () => {
    handleAddToCart(product);
  };

  const breadcrumbItems = [
    { name: 'Home', href: '/', current: false },
    { name: 'Products', href: '/product', current: false },
    { name: product.name, href: `/product/${product.slug}`, current: true },
  ];

  const handlePrevSlide = () => {
    const itemsToShow = isMobile ? 2 : 3;
    setCurrentIndex((prevIndex) => (prevIndex - itemsToShow + similarProducts.length) % similarProducts.length);
  };

  const handleNextSlide = () => {
    const itemsToShow = isMobile ? 2 : 3;
    setCurrentIndex((prevIndex) => (prevIndex + itemsToShow) % similarProducts.length);
  };

  const getVisibleProducts = () => {
    const itemsToShow = isMobile ? 2 : 3;
    const endIndex = currentIndex + itemsToShow;
    if (endIndex > similarProducts.length) {
      return similarProducts.slice(currentIndex).concat(similarProducts.slice(0, endIndex - similarProducts.length));
    }
    return similarProducts.slice(currentIndex, endIndex);
  };

  return (
    <>
      <div className="py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mt-2">
            <Breadcrumbs items={breadcrumbItems} />
          </div>
          <div className="flex flex-col md:flex-row -mx-4 mt-4">
            <div className="md:flex-1 px-4">
              <div className="h-[460px] rounded-lg mb-4">
                <Image className="w-full h-full object-cover" src={product.imageSrc} alt={product.name} width={500} height={460} />
              </div>
              <div className="flex -mx-2 mb-4">
                <div className="w-1/2 px-2">
                  <button
                    onClick={() => handleAddToCart(product)}
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
                  <Image src="/buynow.svg" alt="Buy now icon" width={16} height={17} className="mr-3" />
                  Buy now
                </button>
              </Link>
              <div className="mt-6">
                <span className="font-bold text-gray-700 dark:text-gray-300">Product Description:</span>
                <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">{product.detailedDescription}</p>
              </div>
              <div className="mt-6 border-t max-w-sm mx-auto w-full"></div>
              <Link href="/" className="flex items-center font-semibold text-blue-600 text-sm mt-4">
                <Image src="/back.svg" alt="Back" width={20} height={20} className="mr-2" />
                <span className="ml-2">Continue Shopping</span>
              </Link>
            </div>
          </div>
          {/* sản phẩm tương tự */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Sản phẩm tương tự</h2>
            <div className="relative">
              <button
                className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-300 dark:bg-gray-700 p-2 rounded-full"
                onClick={handlePrevSlide}
              >
                <Image src="/prev_icon.svg" alt="Previous" width={24} height={24} />
              </button>
              <div className="flex justify-center overflow-hidden">
                {similarProducts.length > 0 && (
                  getVisibleProducts().slice(0, 4).map((similarProduct, index) => (
                    // lấy ra 4 sản phẩm tương tự
                    <div key={similarProduct.id} className={`w-44 flex-shrink-0 mx-1 ${isMobile ? 'w-1/3' : 'w-56'}`}>
                      <Link href={`/product/${similarProduct.slug}`}>
                        <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
                          <Image
                            className="w-full h-32 object-cover"
                            src={similarProduct.imageSrc}
                            alt={similarProduct.name}
                            width={224}
                            height={128}
                          />
                          <div className="p-4 flex justify-between items-center">
                            <div className="truncate w-4/5">
                              <h3 className="text-sm font-semibold text-gray-800 dark:text-white truncate">{similarProduct.name}</h3>
                              <p className="text-sm text-gray-600 dark:text-gray-300">${similarProduct.price.toFixed(2)}</p>
                            </div>
                            <button
                              onClick={(e) => { e.preventDefault(); handleAddToCart(similarProduct); }}
                              className="ml-2 flex items-center justify-center h-full"
                            >
                              <Image
                                src="/cart.svg"
                                alt="Add to Cart"
                                width={40}
                                height={40}
                                className="object-contain"
                              />
                            </button>
                          </div>
                        </div>
                      </Link>
                    </div>
                  ))
                )}
              </div>
              <button
                className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-300 dark:bg-gray-700 p-2 rounded-full"
                onClick={handleNextSlide}
              >
                <Image src="/next_icon.svg" alt="Next" width={24} height={24} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;