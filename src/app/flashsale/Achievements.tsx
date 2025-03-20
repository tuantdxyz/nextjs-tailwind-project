import React from 'react';
import Image from 'next/image';

const Achievements: React.FC = () => {
  return (
    <section className="flex flex-col mt-20 relative">
      <p className="font-semibold text-2xl md:text-3xl text-center">Our Outstanding Achievements</p>
      <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-5 place-items-center w-full mx-auto max-w-7xl px-5">

        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/bg-fs01.jpg" // Đường dẫn đến tệp hình ảnh
            alt="Background"
            layout="fill" // Để hình ảnh phủ đầy
            className="object-cover opacity-30" // Đặt độ phủ và kiểu hiển thị
          />
        </div>

        {/* Achievement 1: 3000+ Customers */}
        <div className="flex flex-col justify-center items-center border border-white rounded-lg h-[100px] w-[100px] md:h-[140px] md:w-[140px] shadow-lg relative z-10 bg-[#FFFAF8]">
          <div className="flex flex-row justify-center items-center">
            <Image
              src='/customers_icon.svg'
              width={24} // Thay đổi kích thước icon
              height={24}
              alt='customers'
            />
            <p className="font-bold text-2xl sm:text-3xl lg:text-4xl leading-9 text-primary ml-2">3000+</p>
          </div>
          <p className="font-medium text-sm sm:text-base leading-6 mt-3 md:mt-6 text-center">Khách Hàng</p>
        </div>

        {/* Achievement 2: 80+ Products */}
        <div className="flex flex-col justify-center items-center border border-white rounded-lg h-[100px] w-[100px] md:h-[140px] md:w-[140px] shadow-lg relative z-10 bg-[#FFFAF8]">
          <div className="flex flex-row justify-center items-center">
            <Image
              src='/products_icon.svg'
              width={24} // Thay đổi kích thước icon
              height={24}
              alt='products'
            />
            <p className="font-bold text-2xl sm:text-3xl lg:text-4xl leading-9 text-primary ml-2">80+</p>
          </div>
          <p className="font-medium text-sm sm:text-base leading-6 mt-3 md:mt-6 text-center">Sản Phẩm</p>
        </div>

        {/* Achievement 3: 24 Months Warranty */}
        <div className="flex flex-col justify-center items-center border border-white rounded-lg h-[100px] w-[100px] md:h-[140px] md:w-[140px] shadow-lg relative z-10 bg-[#FFFAF8]">
          <div className="flex flex-row justify-center items-center">
            <Image
              src='/months_warranty_icon.svg'
              width={24} // Thay đổi kích thước icon
              height={24}
              alt='months_warranty'
            />
            <p className="font-bold text-2xl sm:text-3xl lg:text-4xl leading-9 text-primary ml-2">24</p>
          </div>
          <p className="font-medium text-sm sm:text-base leading-6 mt-3 md:mt-6 text-center">Tháng Bảo Hành</p>
        </div>

        {/* Achievement 4: 1000+ Orders Daily */}
        <div className="flex flex-col justify-center items-center border border-white rounded-lg h-[100px] w-[100px] md:h-[140px] md:w-[140px] shadow-lg relative z-10 bg-[#FFFAF8]">
          <div className="flex flex-row justify-center items-center">
            <Image
              src='/orders_daily_icon.svg'
              width={24} // Thay đổi kích thước icon
              height={24}
              alt='orders_daily'
            />
            <p className="font-bold text-2xl sm:text-3xl lg:text-4xl leading-9 text-primary ml-2">1000+</p>
          </div>
          <p className="font-medium text-sm sm:text-base leading-6 mt-3 md:mt-6 text-center">Đơn Hàng Mỗi Ngày</p>
        </div>
      </div>
    </section>
  );
};

export default Achievements;