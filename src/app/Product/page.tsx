import React from 'react';

interface ProductCardProps {
    brand: string;
    productName: string;
    price: string;
    originalPrice: string;
    imageSrc: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ brand, productName, price, originalPrice, imageSrc }) => {
    return (
        <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
            <a href="#">
                <img src={imageSrc} alt={productName} className="h-80 w-72 object-cover rounded-t-xl" />
                <div className="px-4 py-3 w-72">
                    <span className="text-gray-400 mr-3 uppercase text-xs">{brand}</span>
                    <p className="text-lg font-bold text-black truncate block capitalize">{productName}</p>
                    <div className="flex items-center">
                        <p className="text-lg font-semibold text-black cursor-auto my-3">{price}</p>
                        <del>
                            <p className="text-sm text-gray-600 cursor-auto ml-2">{originalPrice}</p>
                        </del>
                        <div className="ml-auto">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="h-5 w-5">
                                <path fillRule="evenodd" d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"/>
                                <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"/>
                            </svg>
                        </div>
                    </div>
                </div>
            </a>
        </div>
    );
};

const products = [
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
    {
        brand: 'FitnessHub',
        productName: 'Yoga Mat with Alignment Lines',
        price: '$20',
        originalPrice: '$35',
        imageSrc: 'https://images.unsplash.com/photo-1649261191624-ca9f79ca3fc6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NDd8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
        brand: 'SmartHome',
        productName: 'Wi-Fi Smart Plug',
        price: '$15',
        originalPrice: '$25',
        imageSrc: 'https://images.unsplash.com/photo-1649261191606-cb2496e97eee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
    }
];

const ProductList: React.FC = () => {
    return (
        <div className="text-center p-10">
            <h1 className="font-bold text-4xl mb-4">Responsive Product Card Grid</h1>
            <h1 className="text-3xl">Tailwind CSS</h1>
            <section id="Projects" className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
                {products.map((product, index) => (
                    <ProductCard
                        key={index}
                        brand={product.brand}
                        productName={product.productName}
                        price={product.price}
                        originalPrice={product.originalPrice}
                        imageSrc={product.imageSrc}
                    />
                ))}
            </section>
        </div>
    );
};

export default ProductList;