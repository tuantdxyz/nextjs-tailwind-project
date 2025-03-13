import React from 'react';
import Image from 'next/image';

const CustomerActivitySection: React.FC = () => {
    const latestReviews = [
        { user: "John Doe", review: "Great product, very satisfied!", date: "2025-03-10 14:30", product: "Smartphone XYZ" },
        { user: "Jane Smith", review: "Not bad, but could be better.", date: "2025-03-09 10:15", product: "Laptop ABC" },
        { user: "Alice Johnson", review: "Excellent quality and fast shipping.", date: "2025-03-08 09:20", product: "Headphones DEF" },
    ];

    const recentBuyers = [
        { user: "Michael Brown", date: "2025-03-11 16:45", product: "Smartwatch GHI" },
        { user: "Emily Davis", date: "2025-03-10 11:00", product: "Tablet JKL" },
        { user: "Sarah Wilson", date: "2025-03-09 08:30", product: "Camera MNO" },
    ];

    return (
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 border-b p-4">
            <div className="w-full lg:w-1/2 p-2 lg:pr-4 border-r border-gray-300">
                <div className="flex items-center mb-4 pb-2 border-b-2 border-gray-300">
                    <Image src="/star-icon.svg" alt="Star Icon" width={24} height={24} className="flex-shrink-0 mr-2" />
                    <h3 className="text-xl font-semibold text-left">Đánh giá mới nhất</h3>
                </div>
                {latestReviews.map((review, index) => (
                    <div key={index} className="p-2 w-full">
                        <div className="bg-gray-100 rounded flex p-4 h-full items-start">
                            <Image src="/star-icon.svg" alt="Star Icon" width={24} height={24} className="flex-shrink-0 mr-4" />
                            <div>
                                <span className="font-medium">{review.user}</span>
                                <p className="text-gray-600">{review.review}</p>
                                <p className="text-gray-400 text-sm">{review.date}</p>
                                <p className="text-gray-500 text-sm">Đã đánh giá: {review.product}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="w-full lg:w-1/2 p-2 lg:pl-4">
                <div className="flex items-center justify-center mb-4 pb-2 border-b-2 border-gray-300">
                    <Image src="/buyer-icon.svg" alt="Buyer Icon" width={24} height={24} className="flex-shrink-0 mr-2" />
                    <h3 className="text-xl font-semibold text-center">Người mua mới đặt hàng gần nhất</h3>
                </div>
                {recentBuyers.map((buyer, index) => (
                    <div key={index} className="p-2 w-full">
                        <div className="bg-gray-100 rounded flex p-4 h-full items-start">
                            <Image src="/buyer-icon.svg" alt="Buyer Icon" width={24} height={24} className="flex-shrink-0 mr-4" />
                            <div>
                                <span className="font-medium">{buyer.user}</span>
                                <p className="text-gray-400 text-sm">{buyer.date}</p>
                                <p className="text-gray-500 text-sm">Đã đặt: {buyer.product}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CustomerActivitySection;