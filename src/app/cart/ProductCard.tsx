"use client";

import Image from 'next/image';
// import { CartProduct } from '../../types/index';
import { Product } from '../../types/index';

// interface Product {
//     id: string;
//     name: string;
//     price: number;
//     shortDescription: string;
//     detailedDescription: string;
//     quantity: number;
//     imageSrc: string;
// }

interface ProductCardProps {
    product: Product;
    onQuantityChange: (id: string, quantity: number) => void;
    onRemove: (id: string) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onQuantityChange, onRemove }) => {
    return (
        <div className="mb-6 rounded-lg bg-white dark:bg-gray-700 p-6 shadow-md flex flex-col sm:flex-row sm:justify-between">
            <div className="flex justify-center items-center w-40 h-40 sm:w-40 sm:h-40 overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-800">
                <Image
                    src={product.imageSrc}
                    alt={product.name}
                    className="max-w-full max-h-full object-contain"
                    width={160}
                    height={160}
                />
            </div>
            <div className="flex flex-col sm:ml-4 sm:w-full">
                <div className="mt-5 sm:mt-0">
                    <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100">{product.name}</h2>
                    <p className="mt-1 text-xs text-gray-700 dark:text-gray-400">{product.shortDescription}</p>
                    <p className="mt-1 text-lg font-bold">Price: ${product.price.toFixed(2)}</p>
                </div>
                <div className="mt-4 flex items-center justify-between">
                    <div className="flex items-center border-gray-100 dark:border-gray-600">
                        <button
                            onClick={() => onQuantityChange(product.id, Math.max(product.quantity - 1, 1))}
                            className="cursor-pointer rounded-l bg-gray-100 dark:bg-gray-600 py-1 px-3 hover:bg-blue-500 hover:text-white"
                        >
                            <Image src="/quanlity_sub.svg" alt="Subtract" width={20} height={20} />
                        </button>
                        <input
                            className="h-8 w-12 border bg-white dark:bg-gray-600 text-center text-xs outline-none"
                            type="number"
                            value={product.quantity}
                            readOnly
                        />
                        <button
                            onClick={() => onQuantityChange(product.id, Math.min(product.quantity + 1, 10))}
                            className="cursor-pointer rounded-r bg-gray-100 dark:bg-gray-600 py-1 px-3 hover:bg-blue-500 hover:text-white"
                        >
                            <Image src="/quanlity_add.svg" alt="Add" width={20} height={20} />
                        </button>
                    </div>
                    <div className="flex items-center space-x-4">
                        <p className="text-sm text-gray-900 dark:text-gray-100">${(product.price * product.quantity).toFixed(2)}</p>
                        <svg
                            onClick={() => onRemove(product.id)}
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="h-5 w-5 cursor-pointer duration-150 hover:text-red-500"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;