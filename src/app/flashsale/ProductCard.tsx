// src/components/ProductCard.tsx

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface ProductCardProps {
    name: string;
    price: string;
    imageSrc: string;
    slug: string; // Thêm slug để truyền xuống
    onSelect: (slug: string) => void; // Hàm để gọi khi chọn sản phẩm
}

const ProductCard: React.FC<ProductCardProps> = ({ name, price, imageSrc, slug, onSelect }) => {
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105 hover:shadow-lg">
            <Image src={imageSrc} alt={name} width={300} height={200} className="w-full h-48 object-cover" />
            <div className="p-4">
                <h3 className="text-lg font-semibold">{name}</h3>
                <p className="text-xl font-bold">{price}</p>
                <Link href="#order-form" onClick={() => onSelect(slug)} className="mt-2 inline-block bg-orange-500 text-white py-2 px-4 rounded-md text-center transition duration-300 hover:bg-orange-400">
                    Mua Ngay
                </Link>
            </div>
        </div>
    );
};

export default ProductCard;