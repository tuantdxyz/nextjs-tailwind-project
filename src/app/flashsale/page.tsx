// src/pages/LandingPage.tsx

"use client";

import React, { useState } from 'react';
import ProductCard from './ProductCard';
import CustomerFeedback from './CustomerFeedback';
import OrderForm from './OrderForm';
import Achievements from './Achievements';
import { Product, Review, User } from '../../types/index';

// Component tái sử dụng cho tiêu đề section
const SectionHeader: React.FC<{ title: string; underlineWidth?: string }> = ({ title, underlineWidth = 'w-24' }) => (
    <div className="flex flex-col items-center text-center">
        <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-gray-800 dark:text-white">
            {title}
        </h2>
        <div className={`mt-2 h-1 ${underlineWidth} rounded-full bg-blue-600`}></div>
    </div>
);

const products: Product[] = [
    {
        id: 1,
        slug: 'airpod-2',
        name: 'Airpod 2',
        price: 150000,
        shortDescription: 'Tai nghe không dây Airpod 2',
        detailedDescription: 'Tai nghe không dây Airpod 2 với âm thanh chất lượng cao và thời lượng pin lâu.',
        quantity: 100,
        brand: 'Apple',
        originalPrice: 200000,
        imageSrc: 'https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        sold: 50,
        notes: 'Sản phẩm chất lượng cao',
        categoryId: 1,
    },
    {
        id: 2,
        slug: 'airpod-3',
        name: 'Airpod 3',
        price: 180000,
        shortDescription: 'Tai nghe không dây Airpod 3',
        detailedDescription: 'Tai nghe không dây Airpod 3 với âm thanh không gian và thời lượng pin lâu.',
        quantity: 100,
        brand: 'Apple',
        originalPrice: 230000,
        imageSrc: 'https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        sold: 60,
        notes: 'Sản phẩm mới nhất của Apple',
        categoryId: 1,
    },
    {
        id: 3,
        slug: 'airpod-pro',
        name: 'Airpod Pro',
        price: 250000,
        shortDescription: 'Tai nghe không dây Airpod Pro',
        detailedDescription: 'Tai nghe không dây Airpod Pro với chống ồn chủ động và âm thanh vượt trội.',
        quantity: 100,
        brand: 'Apple',
        originalPrice: 300000,
        imageSrc: 'https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        sold: 70,
        notes: 'Sản phẩm cao cấp với chất lượng âm thanh tuyệt vời',
        categoryId: 1,
    },
    {
        id: 4,
        slug: 'airpod-pro-2',
        name: 'Airpod Pro 2',
        price: 250000,
        shortDescription: 'Tai nghe không dây Airpod Pro 2',
        detailedDescription: 'Tai nghe không dây Airpod Pro 2 với chống ồn và âm thanh không gian.',
        quantity: 100,
        brand: 'Apple',
        originalPrice: 320000,
        imageSrc: 'https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        sold: 80,
        notes: 'Phiên bản mới nâng cấp với nhiều tính năng mới',
        categoryId: 1,
    },
];

const reviews: Review[] = [
    {
        id: 1,
        userId: 1,
        productId: 1,
        content: 'Tôi rất thích sản phẩm Airpod Pro, chất lượng âm thanh tuyệt vời!',
        rating: 5,
        imageUrl: null,
        createdAt: new Date('2025-03-20T10:00:00'),
    },
    {
        id: 2,
        userId: 2,
        productId: 2,
        content: 'Airpod 3 có âm thanh không gian rất ấn tượng, đáng giá từng đồng!',
        rating: 4,
        imageUrl: null,
        createdAt: new Date('2025-03-21T15:30:00'),
    },
];

const users: User[] = [
    {
        id: 1,
        username: 'vinguyen',
        password: 'password123',
        email: 'vi.nguyen@example.com',
        createdAt: new Date('2025-01-01T10:00:00'),
        updatedAt: new Date('2025-03-20T15:00:00'),
        roleId: 1,
        walletId: null,
        userLevelId: 1,
        firstName: 'Vi',
        lastName: 'Nguyễn',
        phone: '0123456789',
        address: '123 Đường Láng, Đống Đa, Hà Nội',
    },
    {
        id: 2,
        username: 'hungtran',
        password: 'securepass456',
        email: 'hung.tran@example.com',
        createdAt: new Date('2025-02-01T12:00:00'),
        updatedAt: new Date('2025-03-21T16:00:00'),
        roleId: 2,
        walletId: 1,
        userLevelId: 2,
        firstName: 'Hùng',
        lastName: 'Trần',
        phone: '0987654321',
        address: '456 Nguyễn Trãi, Thanh Xuân, Hà Nội',
    },
];

const LandingPage: React.FC = () => {
    const [selectedProduct, setSelectedProduct] = useState<string | null>(null);

    const handleSelectProduct = (slug: string) => {
        setSelectedProduct(slug);
        // Cuộn mượt đến phần OrderForm
        const orderFormSection = document.getElementById('order-form');
        if (orderFormSection) {
            orderFormSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    // Hàm helper để lấy tên người dùng từ userId
    const getUserName = (userId: number): string => {
        const user = users.find((u) => u.id === userId);
        return user ? `${user.firstName} ${user.lastName}` : 'Khách hàng';
    };

    // Hàm helper để lấy tên sản phẩm từ productId
    const getProductName = (productId: number): string => {
        const product = products.find((p) => p.id === productId);
        return product ? product.name : 'Sản phẩm không xác định';
    };

    // Hàm định dạng giá
    const formatPrice = (price: number): string => {
        return `${price.toLocaleString('vi-VN')} đ`;
    };

    return (
        <div className="min-h-screen">
            <div className="container mx-auto px-4 py-10">
                {/* Phần số liệu */}
                <section className="mb-12">
                    <SectionHeader title="Thành Tích Nổi Bật" />
                    <Achievements />
                </section>

                {/* Phần Sản Phẩm Bán Chạy */}
                <section className="mb-16">
                    <SectionHeader title="Sản Phẩm Bán Chạy" />
                    <p className="mt-4 max-w-2xl text-gray-600 dark:text-white text-center mx-auto">
                        {/* Thêm lại text-center và mx-auto để đảm bảo căn giữa */}
                        Dựa trên lượt yêu thích, đánh giá phản hồi tốt từ khách hàng
                    </p>
                    <div className="mt-8 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {products.map((product) => (
                            <ProductCard
                                key={product.slug}
                                name={product.name}
                                price={formatPrice(product.price)}
                                originalPrice={
                                    product.originalPrice
                                        ? formatPrice(product.originalPrice)
                                        : undefined
                                }
                                imageSrc={product.imageSrc}
                                slug={product.slug}
                                onSelect={handleSelectProduct}
                            />
                        ))}
                    </div>
                </section>

                {/* Phần Đánh Giá Từ Khách Hàng */}
                <section className="mb-16">
                    <SectionHeader title="Đánh Giá Từ Khách Hàng" underlineWidth="w-64" />
                    <div className="mt-6 space-y-6 max-w-2xl mx-auto">
                        {reviews.length > 0 ? (
                            reviews
                                .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
                                .map((review, index) => (
                                    <CustomerFeedback
                                        key={review.id}
                                        name={getUserName(review.userId)}
                                        content={review.content}
                                        imageUrl={
                                            review.imageUrl ||
                                            'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=48&h=48&q=80'
                                        }
                                        isReversed={index % 2 !== 0}
                                        rating={review.rating}
                                        productName={getProductName(review.productId)}
                                        createdAt={review.createdAt}
                                    />
                                ))
                        ) : (
                            <p className="text-gray-600 dark:text-white text-center">
                                Chưa có đánh giá nào.
                            </p>
                        )}
                    </div>
                </section>

                {/* Phần Đặt Hàng */}
                <section id="order-form" className="mb-16">
                    <SectionHeader title="Thông Tin Giao Hàng" />
                    <div className="mt-6">
                        <OrderForm selectedProduct={selectedProduct} products={products} />
                    </div>
                </section>
            </div>
        </div>
    );
};

export default LandingPage;