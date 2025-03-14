import React from 'react';
import Image from 'next/image';

const FEATURES_TEXT = "Tại Sao Chọn Chúng Tôi";

const features = [
    {
        title: 'Giao Hàng Miễn Phí',
        description: 'Chúng tôi cung cấp dịch vụ giao hàng miễn phí cho tất cả các đơn hàng.',
    },
    {
        title: 'Đổi Trả Trong 90 Ngày',
        description: 'Khách hàng có thể đổi trả và bảo hành sản phẩm trong thời gian lên đến 90 ngày.',
    },
    {
        title: 'Thanh Toán Đa Dạng',
        description: 'Chúng tôi hỗ trợ nhiều hình thức thanh toán linh hoạt và tiện lợi.',
    },
    {
        title: 'Hỗ Trợ 24/7',
        description: 'Đội ngũ hỗ trợ khách hàng của chúng tôi luôn sẵn sàng phục vụ 24/7.',
    },
    {
        title: 'Chiết Khấu Lần 2',
        description: 'Khách hàng sẽ nhận được chiết khấu đặc biệt khi mua hàng lần thứ hai.',
    },
    {
        title: 'Giảm Giá Khi Giới Thiệu Bạn Bè',
        description: 'Khách hàng sẽ nhận được mã giảm giá khi giới thiệu bạn bè mua hàng.',
    }
];

const FeaturesSection: React.FC = () => {
    return (
        <div className="pb-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-2">
                    <h2 className="text-xl md:text-2xl lg:text-4xl font-bold text-gray-800 dark:text-white">
                        {FEATURES_TEXT}
                    </h2>
                </div>
                <div className="flex flex-wrap">
                    {features.map((feature) => (
                        <div key={feature.title} className="w-full border-b md:w-1/2 lg:w-1/3 p-4 sm:p-6">
                            <div className="flex items-center mb-2 sm:mb-4">
                                <Image src="/icon_checked.svg" alt="Checked Icon" width={20} height={20} className="h-6 w-6" />
                                <div className="ml-2 sm:ml-4 text-lg sm:text-xl text-gray-800 dark:text-gray-200">{feature.title}</div>
                            </div>
                            <p className="leading-loose text-gray-600 dark:text-gray-400 text-justify">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FeaturesSection;