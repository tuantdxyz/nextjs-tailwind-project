// src/components/CustomerFeedback.tsx

import React from 'react';
import Image from 'next/image';

interface ReviewProps {
    name: string;
    content: string; // Đổi từ feedback thành content
    imageUrl: string; // Đổi từ avatarSrc thành imageUrl
    isReversed?: boolean;
    rating?: number; // Thêm rating
    productName?: string; // Thêm productName
    createdAt?: Date; // Thêm createdAt
}

const CustomerFeedback: React.FC<ReviewProps> = ({
    name,
    content,
    imageUrl,
    isReversed = false,
    rating,
    productName,
    createdAt,
}) => {
    return (
        <div
            className={`flex items-start gap-3 p-3 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md w-full ${isReversed ? 'flex-row-reverse' : ''
                }`}
        >
            {/* Avatar */}
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden flex-shrink-0">
                <Image
                    src={imageUrl}
                    alt={`${name}'s avatar`}
                    width={48}
                    height={48}
                    className="object-cover"
                />
            </div>

            {/* Tên, Đánh giá và Thông tin bổ sung */}
            <div
                className={`flex flex-col ${isReversed ? 'items-end' : 'items-start'}`}
            >
                {/* Tên và Thời gian */}
                <div className="flex items-center gap-2">
                    <div
                        className={`text-white px-2 py-0.5 rounded-md ${isReversed ? 'bg-green-600' : 'bg-blue-600'
                            }`}
                    >
                        <p className="text-xs sm:text-sm font-semibold">{name}</p>
                    </div>
                    {createdAt && (
                        <span className="text-xs text-gray-500 dark:text-gray-400">
                            {new Date(createdAt).toLocaleDateString('vi-VN')}
                        </span>
                    )}
                </div>

                {/* Sản phẩm và Đánh giá sao */}
                <div className="flex items-center gap-2 mt-1">
                    {productName && (
                        <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                            Sản phẩm: {productName}
                        </p>
                    )}
                    {rating && (
                        <div className="flex items-center">
                            {[...Array(5)].map((_, index) => (
                                <svg
                                    key={index}
                                    className={`w-4 h-4 ${index < rating ? 'text-yellow-400' : 'text-gray-300'
                                        }`}
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                            ))}
                        </div>
                    )}
                </div>

                {/* Nội dung đánh giá */}
                <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded-lg shadow-sm mt-0.5 w-fit">
                    <p className="text-gray-700 dark:text-gray-300 italic text-xs sm:text-sm">
                        {content}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default CustomerFeedback;