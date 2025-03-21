// src/components/ProductCard.tsx

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface ProductCardProps {
    name: string;
    price: string; // Giá sale
    originalPrice?: string; // Giá gốc (tùy chọn)
    imageSrc: string;
    slug: string;
    onSelect: (slug: string) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ name, price, originalPrice, imageSrc, slug, onSelect }) => {
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105 hover:shadow-lg flex flex-col h-[300px] relative">
            {/* Ảnh sản phẩm */}
            <div className="relative w-full h-40">
                <Image
                    src={imageSrc}
                    alt={name}
                    width={300}
                    height={160}
                    className="w-full h-40 object-cover"
                />
                {/* Biểu tượng SALE (góc trên bên phải, to hơn, nhấp nháy) */}
                <div className="absolute top-2 right-2">
                    <Image
                        src="https://img.icons8.com/color/48/000000/sale--v1.png"
                        alt="Sale"
                        width={40}
                        height={40}
                        className="animate-pulse shadow-md"
                    />
                </div>
                {/* Biểu tượng GIFT (giữa, sát đáy ảnh, không nhấp nháy) */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
                    <Image
                        src="https://img.icons8.com/color/48/000000/gift--v1.png"
                        alt="Gift"
                        width={32}
                        height={32}
                        className="shadow-md"
                    />
                </div>
            </div>
            {/* Nội dung */}
            <div className="p-4 flex flex-col items-center justify-center flex-grow space-y-1">
                <h3 className="text-lg font-semibold text-gray-800 truncate max-w-[180px]">{name}</h3>
                <div className="flex items-center gap-2">
                    {originalPrice && (
                        <p className="text-sm text-gray-400 line-through">{originalPrice}</p>
                    )}
                    <p className="text-lg font-bold text-red-600">{price}</p>
                </div>
                <Link
                    href="#order-form"
                    onClick={() => onSelect(slug)}
                    className="inline-block bg-orange-500 text-white py-2 px-4 rounded-md transition duration-300 hover:bg-orange-600"
                >
                    Mua Ngay
                </Link>
            </div>
        </div>
    );
};

export default ProductCard;