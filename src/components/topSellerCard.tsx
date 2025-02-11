import React from 'react';

interface TopSellerCardProps {
    category: string;
    title: string;
    price: string;
    imageSrc: string;
}

const TopSellerCard: React.FC<TopSellerCardProps> = ({ category, title, price, imageSrc }) => {
    return (
        <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl relative overflow-hidden">
            <a href="#">
                <img src={imageSrc} alt={title} className="h-80 w-72 object-cover rounded-t-xl" />
                <div className="px-4 py-3 w-72">
                    <span className="text-gray-400 mr-3 uppercase text-xs">{category}</span>
                    <p className="text-lg font-bold text-black truncate block capitalize">{title}</p>
                    <div className="flex items-center">
                        <p className="text-lg font-semibold text-black cursor-auto my-3">{price}</p>
                        <div className="ml-auto">
                             {/* sua anh */}
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill text-yellow-500" viewBox="0 0 16 16">
                                <path d="M3.612 15.443c-.396.198-.86-.149-.741-.592l.83-4.73L.173 6.765c-.329-.32-.158-.888.283-.95l4.898-.696 2.197-4.342c.197-.392.73-.392.927 0l2.197 4.342 4.898.696c.441.062.612.63.283.95l-3.527 3.356.83 4.73c.12.443-.345.79-.741.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                        </div>
                    </div>
                </div>
            </a>
        </div>
    );
};

export default TopSellerCard;