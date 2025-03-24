// src/components/Achievements.tsx

import React from 'react';
import Image from 'next/image';

const Achievements: React.FC = () => {
  return (
    <div className="relative mt-6">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1280&h=720&fit=crop" // Giảm kích thước ảnh để tối ưu
          alt="Background"
          layout="fill"
          className="object-cover"
          loading="lazy" // Thêm lazy loading
        />
      </div>

      {/* Achievements Flex Container */}
      <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 py-8 px-6 sm:px-8 md:px-12 max-w-5xl mx-auto">
        {/* Achievement 1: 3000+ Customers */}
        <div className="flex flex-col justify-center items-center h-[90px] w-[130px] sm:h-[100px] sm:w-[140px] md:h-[110px] md:w-[150px] bg-white/50 border border-gray-200 rounded-xl shadow-md backdrop-blur-sm transition-all hover:shadow-lg hover:scale-105">
          <div className="flex items-center gap-2">
            <Image
              src="/customers_icon.svg"
              width={20}
              height={20}
              alt="customers"
              loading="lazy" // Thêm lazy loading
            />
            <p className="font-bold text-xl sm:text-2xl md:text-3xl text-blue-600">3000+</p>
          </div>
          <p className="font-medium text-sm sm:text-base mt-2 text-gray-800 text-center">Khách Hàng</p>
        </div>

        {/* Achievement 2: 80+ Products */}
        <div className="flex flex-col justify-center items-center h-[90px] w-[130px] sm:h-[100px] sm:w-[140px] md:h-[110px] md:w-[150px] bg-white/50 border border-gray-200 rounded-xl shadow-md backdrop-blur-sm transition-all hover:shadow-lg hover:scale-105">
          <div className="flex items-center gap-2">
            <Image
              src="/products_icon.svg"
              width={20}
              height={20}
              alt="products"
              loading="lazy" // Thêm lazy loading
            />
            <p className="font-bold text-xl sm:text-2xl md:text-3xl text-blue-600">80+</p>
          </div>
          <p className="font-medium text-sm sm:text-base mt-2 text-gray-800 text-center">Sản Phẩm</p>
        </div>

        {/* Achievement 3: 24 Months Warranty */}
        <div className="flex flex-col justify-center items-center h-[90px] w-[130px] sm:h-[100px] sm:w-[140px] md:h-[110px] md:w-[150px] bg-white/50 border border-gray-200 rounded-xl shadow-md backdrop-blur-sm transition-all hover:shadow-lg hover:scale-105">
          <div className="flex items-center gap-2">
            <Image
              src="/months_warranty_icon.svg"
              width={20}
              height={20}
              alt="months_warranty"
              loading="lazy" // Thêm lazy loading
            />
            <p className="font-bold text-xl sm:text-2xl md:text-3xl text-blue-600">24</p>
          </div>
          <p className="font-medium text-sm sm:text-base mt-2 text-gray-800 text-center">Tháng Bảo Hành</p>
        </div>

        {/* Achievement 4: 1000+ Orders Daily */}
        <div className="flex flex-col justify-center items-center h-[90px] w-[130px] sm:h-[100px] sm:w-[140px] md:h-[110px] md:w-[150px] bg-white/50 border border-gray-200 rounded-xl shadow-md backdrop-blur-sm transition-all hover:shadow-lg hover:scale-105">
          <div className="flex items-center gap-2">
            <Image
              src="/orders_daily_icon.svg"
              width={20}
              height={20}
              alt="orders_daily"
              loading="lazy" // Thêm lazy loading
            />
            <p className="font-bold text-xl sm:text-2xl md:text-3xl text-blue-600">1000+</p>
          </div>
          <p className="font-medium text-sm sm:text-base mt-2 text-gray-800 text-center">Đơn Mỗi Ngày</p>
        </div>
      </div>
    </div>
  );
};

export default Achievements;