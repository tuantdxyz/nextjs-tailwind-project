"use client";

import React, { useState } from 'react';
import ProductCard from './ProductCard';
import CustomerFeedback from './CustomerFeedback';
import OrderForm from './OrderForm';
import Achievements from './Achievements';

// Định nghĩa interface cho sản phẩm
interface Product {
    name: string;
    price: string;
    originalPrice?: string;
    imageSrc: string;
    slug: string;
}

// Định nghĩa interface cho feedback
interface Feedback {
    name: string;
    feedback: string;
    avatarSrc: string;
}

// Dữ liệu sản phẩm
const products: Product[] = [
    { name: "Tiramisu", price: "80.000 ₫", originalPrice: "100.000 ₫", imageSrc: "/img4.jpg", slug: "tiramisu" },
    { name: "Bánh rán hồ Điều Hòa hà nội", price: "30.000 ₫", originalPrice: "40.000 ₫", imageSrc: "/img5.jpg", slug: "banh-ran-doremon" },
    { name: "Black Forest", price: "150.000 ₫", originalPrice: "180.000 ₫", imageSrc: "/img6.jpg", slug: "black-forest" },
    { name: "Pavlova", price: "80.000 ₫", originalPrice: "100.000 ₫", imageSrc: "/img4.jpg", slug: "pavlova" },
];

// Dữ liệu feedback với avatar từ Unsplash
const feedbacks: Feedback[] = [
    {
        name: "Chị Vi",
        feedback: "Tôi rất thích bánh Tiramisu!",
        avatarSrc: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=48&h=48&fit=crop",
    },
    {
        name: "Anh Hùng",
        feedback: "Bánh rất ngon và chất lượng!",
        avatarSrc: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=48&h=48&fit=crop",
    },
];

const LandingPage: React.FC = () => {
    const [selectedProduct, setSelectedProduct] = useState<string | null>(null);

    const handleSelectProduct = (slug: string) => {
        setSelectedProduct(slug);
    };

    return (
        <div className="container mx-auto px-4 py-10">
            {/* Phần số liệu */}
            <section className="mb-12">
                <div className="flex flex-col items-center text-center">
                    <h2 className="text-2xl font-bold tracking-tight md:text-4xl text-gray-800">
                        Thành Tích Nổi Bật
                    </h2>
                    <div className="mt-2 h-1 w-24 rounded-full bg-blue-600"></div>
                </div>
                <Achievements />
            </section>

            {/* Phần Bán Chạy Nhất */}
            <section className="mb-12">
                <div className="flex flex-col items-center text-center">
                    <h2 className="text-2xl font-bold tracking-tight md:text-4xl text-gray-800">
                        Sản Phẩm Bán Chạy
                    </h2>
                    <div className="mt-2 h-1 w-24 rounded-full bg-blue-600"></div>
                    <p className="mt-4 max-w-2xl text-gray-600">
                        Dựa trên lượt yêu thích, đánh giá phản hồi tốt từ khách hàng
                    </p>
                </div>
                <div className="mt-8 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {products.map((product) => (
                        <ProductCard
                            key={product.slug}
                            name={product.name}
                            price={product.price}
                            imageSrc={product.imageSrc}
                            slug={product.slug}
                            onSelect={handleSelectProduct}
                        />
                    ))}
                </div>
            </section>

            {/* Phần Phản Hồi Từ Khách Hàng */}
            <section className="mb-12">
                <div className="flex flex-col items-center text-center">
                    <h2 className="text-2xl font-bold tracking-tight md:text-4xl text-gray-800">
                        Phản Hồi Từ Khách Hàng
                    </h2>
                    <div className="mt-1 h-1 w-64 rounded-full bg-blue-600"></div>
                </div>
                <div className="mt-4 space-y-4 max-w-2xl mx-auto">
                    {feedbacks.map((feedback, index) => (
                        <CustomerFeedback
                            key={feedback.name}
                            name={feedback.name}
                            feedback={feedback.feedback}
                            avatarSrc={feedback.avatarSrc}
                            isReversed={index % 2 !== 0}
                        />
                    ))}
                </div>
            </section>

            {/* Phần Đặt Hàng */}
            <section id="order-form">
                <OrderForm selectedProduct={selectedProduct} />
            </section>
        </div>
    );
};

export default LandingPage;