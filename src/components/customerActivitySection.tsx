import React from 'react';
import Image from 'next/image';

const CustomerActivitySection: React.FC = () => {
    const latestReviews = [
        { user: "Nguyễn Hà", review: "Sản phẩm tuyệt vời, rất hài lòng!", date: "2025-03-10 14:30", product: "AirPods 2" },
        { user: "Trần Anh", review: "Chất lượng xuất sắc và giao hàng nhanh chóng.", date: "2025-03-09 10:15", product: "AirPods Pro" },
        { user: "Lê Công", review: "Sản phẩm rất tốt, tôi sẽ mua lại.", date: "2025-03-08 09:20", product: "Pin iPhone 9" },
    ];

    const recentBuyers = [
        { user: "Phạm Vân", date: "2025-03-11 16:45", product: "AirPods 2" },
        { user: "Hoàng Dung", date: "2025-03-10 11:00", product: "AirPods Pro" },
        { user: "Đặng Anh", date: "2025-03-09 08:30", product: "Pin iPhone 9" },
    ];

    return (
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2">
            <div className="w-full lg:w-1/2 p-2 lg:pr-4">
                <div className="flex items-center mb-4 pb-2 border-b-2 border-gray-300 dark:border-gray-700">
                    <Image src="/star-icon.svg" alt="Star Icon" width={24} height={24} className="flex-shrink-0 mr-2" />
                    <h3 className="text-xl font-semibold text-left text-gray-800 dark:text-gray-200">Đánh giá mới nhất</h3>
                </div>
                {latestReviews.map((review, index) => (
                    <div key={index} className="p-2 w-full">
                        <div className="bg-gray-100 dark:bg-gray-800 rounded flex p-4 h-full items-start">
                            <Image src="/star-icon.svg" alt="Star Icon" width={24} height={24} className="flex-shrink-0 mr-4" />
                            <div>
                                <span className="font-medium text-gray-800 dark:text-gray-200">{review.user}</span>
                                <p className="text-gray-600 dark:text-gray-400">{review.review}</p>
                                <p className="text-gray-400 dark:text-gray-500 text-sm">{review.date}</p>
                                <p className="text-gray-500 dark:text-gray-400 text-sm">Đã đánh giá: {review.product}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="w-full lg:w-1/2 p-2 lg:pl-4">
                <div className="flex items-center justify-center mb-4 pb-2 border-b-2 border-gray-300 dark:border-gray-700">
                    <Image src="/buyer-icon.svg" alt="Buyer Icon" width={24} height={24} className="flex-shrink-0 mr-2" />
                    <h3 className="text-xl font-semibold text-center text-gray-800 dark:text-gray-200">Người mua mới đặt hàng</h3>
                </div>
                {recentBuyers.map((buyer, index) => (
                    <div key={index} className="p-2 w-full">
                        <div className="bg-gray-100 dark:bg-gray-800 rounded flex p-4 h-full items-start">
                            <Image src="/buyer-icon.svg" alt="Buyer Icon" width={24} height={24} className="flex-shrink-0 mr-4" />
                            <div>
                                <span className="font-medium text-gray-800 dark:text-gray-200">{buyer.user}</span>
                                <p className="text-gray-400 dark:text-gray-500 text-sm">{buyer.date}</p>
                                <p className="text-gray-500 dark:text-gray-400 text-sm">Đã đặt: {buyer.product}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CustomerActivitySection;