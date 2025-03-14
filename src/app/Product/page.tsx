"use client";

import React, { useEffect, useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import Image from "next/image";

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
  totalSale: number;  // nên tách ra 1 bảng Sale riêng, để so sánh số lượng bán từng đợt sale
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

const ProductCard: React.FC<Product> = React.memo(({ brand, name, price, originalPrice, imageSrc, slug }) => {
  const router = useRouter();

  const handleClick = useCallback(() => {
    router.push(`/product/${slug}`);
  }, [router, slug]);

  return (
    <div className="w-72 bg-white dark:bg-gray-800 shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl" onClick={handleClick}>
      <Image src={imageSrc} alt={name} width={288} height={320} className="object-cover rounded-t-xl" />
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
              <path fillRule="evenodd" d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z" />
              <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
});

ProductCard.displayName = 'ProductCard';

const ProductList: React.FC = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="text-center p-10">
      <h1 className="font-bold text-4xl mb-4 text-black dark:text-white">Tất cả sản phẩm</h1>
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