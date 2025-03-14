import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const TOP_ACTIVE_TEXT = "Best Seller";

const topSellers = [
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
];

const TopSellersSection: React.FC = () => {
    return (
        <section className="pb-6">
            <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
                <div className="mb-3 space-y-4 px-6 md:px-0">
                    <h2 className="text-xl md:text-2xl lg:text-4xl font-bold text-gray-800 dark:text-white">
                        {TOP_ACTIVE_TEXT}
                    </h2>
                </div>
                <div className="w-fit mx-auto grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-6 gap-x-4 mt-2 mb-2">
                    {topSellers.map((seller, index) => (
                        <Link key={index} href={`/product/${seller.slug}`}>
                            <div className="w-36 md:w-72 bg-white dark:bg-gray-800 shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl cursor-pointer">
                                <Image src={seller.imageSrc} alt={seller.name} width={144} height={160} className="h-40 md:h-80 w-36 md:w-72 object-cover rounded-t-xl" />
                                <div className="px-2 md:px-4 py-3 w-36 md:w-72">
                                    <span className="text-gray-400 dark:text-gray-300 mr-3 uppercase text-xs">{seller.brand}</span>
                                    <p className="text-sm md:text-lg font-bold text-black dark:text-white truncate block capitalize">{seller.name}</p>
                                    <div className="flex items-center">
                                        <p className="text-sm md:text-lg font-semibold text-black dark:text-white cursor-auto my-3">${seller.price}</p>
                                        <del>
                                            <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400 cursor-auto ml-2">${seller.originalPrice}</p>
                                        </del>
                                        <div className="ml-auto">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill text-yellow-500" viewBox="0 0 16 16">
                                                <path d="M3.612 15.443c-.396.198-.86-.149-.741-.592l.83-4.73L.173 6.765c-.329-.32-.158-.888.283-.95l4.898-.696 2.197-4.342c.197-.392.73-.392.927 0l2.197 4.342 4.898.696c.441.062.612.63.283.95l-3.527 3.356.83 4.73c.12.443-.345.79-.741.592L8 13.187l-4.389 2.256z" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TopSellersSection;