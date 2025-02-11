import React from 'react';
import PromotionProductCard from './promotionProductCard';

const promotions = [
    {
        brand: 'EcoHome',
        productName: 'Eco-friendly Bamboo Toothbrush',
        price: '$5',
        originalPrice: '$10',
        imageSrc: 'https://images.unsplash.com/photo-1646753522408-077ef9839300?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
        brand: 'Techie',
        productName: 'Wireless Bluetooth Headphones',
        price: '$79',
        originalPrice: '$129',
        imageSrc: 'https://images.unsplash.com/photo-1651950519238-15835722f8bb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8Mjh8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
        brand: 'KitchenPro',
        productName: 'Stainless Steel Chef Knife',
        price: '$29',
        originalPrice: '$49',
        imageSrc: 'https://images.unsplash.com/photo-1651950537598-373e4358d320?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MjV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
        brand: 'Glamour',
        productName: 'Luxury Silk Scarf',
        price: '$45',
        originalPrice: '$75',
        imageSrc: 'https://images.unsplash.com/photo-1651950540805-b7c71869e689?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8Mjl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
    },
    // {
    //     brand: 'FitnessHub',
    //     productName: 'Yoga Mat with Alignment Lines',
    //     price: '$20',
    //     originalPrice: '$35',
    //     imageSrc: 'https://images.unsplash.com/photo-1649261191624-ca9f79ca3fc6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NDd8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
    // },
    // {
    //     brand: 'SmartHome',
    //     productName: 'Wi-Fi Smart Plug',
    //     price: '$15',
    //     originalPrice: '$25',
    //     imageSrc: 'https://images.unsplash.com/photo-1649261191606-cb2496e97eee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
    // }
];

const PromotionsSection: React.FC = () => {
    return (
        <section className="bg-white pb-6">
            <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
                <div className="mb-10 space-y-4 px-6 md:px-0">
                    <h2 className="text-center text-2xl font-bold text-gray-800 dark:text-white md:text-4xl">
                        Top Sản Phẩm Đang Khuyến Mại
                    </h2>
                </div>
                <div className="w-fit mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {promotions.map((promotion, index) => (
                        <PromotionProductCard
                            key={index}
                            brand={promotion.brand}
                            productName={promotion.productName}
                            price={promotion.price}
                            originalPrice={promotion.originalPrice}
                            imageSrc={promotion.imageSrc}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PromotionsSection;