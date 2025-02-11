import React from 'react';
import TopSellerCard from './topSellerCard';

const topSellers = [
    {
        category: 'Indoor Plants',
        title: 'Peace Lily',
        price: '$36.00',
        imageSrc: 'https://user-images.githubusercontent.com/2805249/64069899-8bdaa180-cc97-11e9-9b19-1a9e1a254c18.png'
    },
    {
        category: 'Outdoor Plants',
        title: 'Monstera Deliciosa',
        price: '$45.00',
        imageSrc: 'https://user-images.githubusercontent.com/2805249/64069998-305de300-cc9a-11e9-8ae7-5a0fe00299f2.png'
    },
    {
        category: 'Outdoor Trees',
        title: 'Japanese Maple',
        price: '$68.50',
        imageSrc: 'https://user-images.githubusercontent.com/2805249/64069899-8bdaa180-cc97-11e9-9b19-1a9e1a254c18.png'
    },
    {
        category: 'Indoor Plants',
        title: 'Fiddle Leaf Fig',
        price: '$52.00',
        imageSrc: 'https://user-images.githubusercontent.com/2805249/64069899-8bdaa180-cc97-11e9-9b19-1a9e1a254c18.png'
    }
];

const TopSellersSection: React.FC = () => {
    return (
        <section className="bg-white pb-6">
            <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
                <div className="mb-10 space-y-4 px-6 md:px-0">
                    <h2 className="text-center text-2xl font-bold text-gray-800 dark:text-white md:text-4xl">
                        Top Seller của tháng
                    </h2>
                </div>
                <div className="w-fit mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {topSellers.map((seller, index) => (
                        <TopSellerCard
                            key={index}
                            category={seller.category}
                            title={seller.title}
                            price={seller.price}
                            imageSrc={seller.imageSrc}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TopSellersSection;