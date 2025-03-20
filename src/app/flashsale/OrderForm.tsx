// src/components/OrderForm.tsx

import React, { useState, useEffect } from 'react';

interface OrderFormProps {
    selectedProduct: string | null; // Nhận slug đã chọn
}

const OrderForm: React.FC<OrderFormProps> = ({ selectedProduct }) => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [selectedProducts, setSelectedProducts] = useState<{ name: string; price: number; quantity: number }[]>([]);
    const [shippingFee] = useState(20000); // Phí ship cố định

    const products = [
        { id: 1, name: "Tiramisu", price: 80000, slug: "tiramisu" },
        { id: 2, name: "Bánh rán Doremon", price: 30000, slug: "banh-ran-doremon" },
        { id: 3, name: "Black Forest", price: 150000, slug: "black-forest" },
        { id: 4, name: "Pavlova", price: 80000, slug: "pavlova" },
    ];

    const handleProductChange = (productName: string, price: number) => {
        const existingProduct = selectedProducts.find(product => product.name === productName);
        if (existingProduct) {
            setSelectedProducts(prev =>
                prev.map(product =>
                    product.name === productName
                        ? { ...product, quantity: product.quantity + 1 }
                        : product
                )
            );
        } else {
            setSelectedProducts(prev => [...prev, { name: productName, price, quantity: 1 }]);
        }
    };

    const handleQuantityChange = (productName: string, quantity: number) => {
        setSelectedProducts(prev =>
            prev.map(product =>
                product.name === productName
                    ? { ...product, quantity }
                    : product
            )
        );
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Xử lý gửi đơn hàng
        console.log({ name, phone, address, selectedProducts });
    };

    const calculateTotal = () => {
        const productTotal = selectedProducts.reduce((total, product) => total + product.price * product.quantity, 0);
        return productTotal + shippingFee;
    };

    // Tự động thêm sản phẩm đã chọn vào danh sách
    useEffect(() => {
        if (selectedProduct && !selectedProducts.some(p => p.name === selectedProduct)) {
            const product = products.find(p => p.slug === selectedProduct);
            if (product) {
                handleProductChange(product.name, product.price);
            }
        }
    }, [selectedProduct]);

    return (
        <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Đặt Hàng</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block mb-2">Họ Tên</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="border border-gray-300 rounded-md p-2 w-full"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-2">Số Điện Thoại</label>
                    <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="border border-gray-300 rounded-md p-2 w-full"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-2">Địa Chỉ</label>
                    <input
                        type="text"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        className="border border-gray-300 rounded-md p-2 w-full"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-2">Chọn Sản Phẩm</label>
                    {products.map((product) => (
                        <div key={product.id} className="flex items-center mb-2">
                            <input
                                type="checkbox"
                                checked={selectedProducts.some(p => p.name === product.name)}
                                onChange={() => handleProductChange(product.name, product.price)}
                                className="mr-2"
                            />
                            <label className="text-gray-700">{product.name} - {product.price.toLocaleString()} ₫</label>
                            {selectedProducts.some(p => p.name === product.name) && (
                                <div className="flex items-center ml-4">
                                    <input
                                        type="number"
                                        min="1"
                                        value={selectedProducts.find(p => p.name === product.name)?.quantity || 1}
                                        onChange={(e) => handleQuantityChange(product.name, Number(e.target.value))}
                                        className="border border-gray-300 rounded-md p-1 w-16 text-center"
                                    />
                                </div>
                            )}
                        </div>
                    ))}
                </div>
                <div className="mb-4">
                    <h3 className="text-lg font-semibold">Tổng Tiền:</h3>
                    <p className="text-xl font-bold">{calculateTotal().toLocaleString()} ₫ (Bao gồm {shippingFee.toLocaleString()} ₫ phí ship)</p>
                </div>
                <button
                    type="submit"
                    className="bg-orange-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-orange-400 transition"
                >
                    Đặt Hàng
                </button>
            </form>
        </div>
    );
};

export default OrderForm;