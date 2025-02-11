import React from 'react';

interface PromotionProductCardProps {
    brand: string;
    productName: string;
    price: string;
    originalPrice: string;
    imageSrc: string;
}

const PromotionProductCard: React.FC<PromotionProductCardProps> = ({ brand, productName, price, originalPrice, imageSrc }) => {
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
                            {/* sua anh */}
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5">
                                <path fill="#FF6F61" d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z"/>
                                <path fill="#FF6F61" d="M7.293 13.293l4-4a.999.999 0 1 1 1.414 1.414l-4 4a.999.999 0 1 1-1.414-1.414zM12.707 13.293l-4-4a.999.999 0 1 1 1.414-1.414l4 4a.999.999 0 1 1-1.414 1.414zM15.5 8C14.672 8 14 7.328 14 6.5S14.672 5 15.5 5 17 5.672 17 6.5 16.328 8 15.5 8zM15.5 11C14.672 11 14 10.328 14 9.5S14.672 8 15.5 8 17 8.672 17 9.5 16.328 11 15.5 11z"/>
                            </svg>
                        </div>
                    </div>
                </div>
            </a>
        </div>
    );
};

export default PromotionProductCard;