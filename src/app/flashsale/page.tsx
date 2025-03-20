"use client";

import React, { useState } from 'react';
import ProductCard from './ProductCard';
import CustomerFeedback from './CustomerFeedback';
import OrderForm from './OrderForm';
import Achievements from './Achievements';

const LandingPage: React.FC = () => {
    const [selectedProduct, setSelectedProduct] = useState<string | null>(null);

    const handleSelectProduct = (slug: string) => {
        setSelectedProduct(slug);
    };

    return (
        <div className="container mx-auto p-6">
            {/* Phần Số Liệu */}
            <Achievements /> {/* Thêm phần Achievements */}

            {/* Phần Bán Chạy Nhất */}
            <div className="mb-8 flex flex-col items-center text-center">
                <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Shop by Category</h2>
                <div className="mt-2 h-1 w-20 rounded-full bg-orange-500"></div>
                <p className="mt-4 max-w-2xl text-center text-gray-500">Find the perfect device for your needs from our curated collections</p>
            </div>
            <div className="text-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <ProductCard name="Tiramisu" price="80.000 ₫" imageSrc="/img4.jpg" slug="tiramisu" onSelect={handleSelectProduct} />
                <ProductCard name="Bánh rán Doremon" price="30.000 ₫" imageSrc="/img5.jpg" slug="banh-ran-doremon" onSelect={handleSelectProduct} />
                <ProductCard name="Black Forest" price="150.000 ₫" imageSrc="/img6.jpg" slug="black-forest" onSelect={handleSelectProduct} />
                <ProductCard name="Pavlova" price="80.000 ₫" imageSrc="/img4.jpg" slug="pavlova" onSelect={handleSelectProduct} />
            </div>

            {/* Phần Danh Sách Món */}
            <h2 className="text-3xl font-bold my-6 text-center">Danh Sách Món</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <ProductCard name="Cupcake" price="50.000 ₫" imageSrc="/img4.jpg" slug="cupcake" onSelect={handleSelectProduct} />
                <ProductCard name="Sữa kem" price="20.000 ₫" imageSrc="/img5.jpg" slug="sua-kem" onSelect={handleSelectProduct} />
                <ProductCard name="Bông lan trứng muối" price="45.000 ₫" imageSrc="/img6.jpg" slug="bong-lan-trung-muoi" onSelect={handleSelectProduct} />
            </div>

            {/* Phần Phản Hồi Từ Khách Hàng */}
            <h2 className="text-3xl font-bold my-6 text-center">Phản Hồi Từ Khách Hàng</h2>
            <CustomerFeedback name="Chị Vi" feedback="Tôi rất thích bánh Tiramisu!" />
            <CustomerFeedback name="Anh Hùng" feedback="Bánh rất ngon và chất lượng!" />

            {/* Phần Đặt Hàng */}
            <div id="order-form">
                <OrderForm selectedProduct={selectedProduct} />
            </div>
        </div>
    );
};

export default LandingPage;