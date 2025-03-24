// src/components/OrderForm.tsx

import React, { useState, useEffect, useCallback } from 'react';

// Định nghĩa interface cho sản phẩm
interface Product {
    id: number;
    name: string;
    price: number;
    slug: string;
}

// Định nghĩa interface cho selectedProducts (chỉ cần slug và quantity)
interface SelectedProduct {
    slug: string;
    quantity: number;
}

interface OrderFormProps {
    selectedProduct: string | null; // Nhận slug đã chọn
    products: Product[]; // Nhận danh sách sản phẩm từ parent
}

const OrderForm: React.FC<OrderFormProps> = ({ selectedProduct, products }) => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [note, setNote] = useState('');
    const [selectedProducts, setSelectedProducts] = useState<SelectedProduct[]>([]);
    const [errorMessage, setErrorMessage] = useState('');
    const [showPopup, setShowPopup] = useState(false);
    const [processedProduct, setProcessedProduct] = useState<string | null>(null);

    const additionalShippingFee = 20000; // Phí ship bổ sung nếu không thỏa mãn điều kiện

    // Tính tổng số lượng sản phẩm
    const totalQuantity = selectedProducts.reduce((total, product) => total + product.quantity, 0);

    // Kiểm tra điều kiện freeship
    const isFreeShipping = selectedProducts.length >= 2 || totalQuantity >= 2;
    const shippingFee = isFreeShipping ? 0 : selectedProducts.length === 1 && totalQuantity === 1 ? additionalShippingFee : 0;

    // Hàm helper để tìm sản phẩm theo slug
    const findProductBySlug = (slug: string): Product | undefined => {
        return products.find(product => product.slug === slug);
    };

    // Memoize các hàm xử lý
    const handleProductChange = useCallback(
        (slug: string, checked: boolean) => {
            setSelectedProducts(prev => {
                if (checked) {
                    const existingProduct = prev.find(product => product.slug === slug);
                    if (existingProduct) {
                        return prev.map(product =>
                            product.slug === slug ? { ...product, quantity: product.quantity + 1 } : product
                        );
                    }
                    return [...prev, { slug, quantity: 1 }];
                }
                return prev.filter(product => product.slug !== slug);
            });
        },
        []
    );

    const handleQuantityChange = useCallback((productSlug: string, quantity: number) => {
        setSelectedProducts(prev => {
            if (quantity < 1) {
                return prev.filter(product => product.slug !== productSlug);
            }
            return prev.map(product =>
                product.slug === productSlug ? { ...product, quantity } : product
            );
        });
    }, []);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!name.trim()) {
            setErrorMessage('Phải nhập Họ Tên để đặt hàng');
            return;
        }
        if (!phone) {
            setErrorMessage('Phải nhập Số để đặt hàng');
            return;
        }
        const phoneRegex = /^[0-9]{10}$/;
        if (!phoneRegex.test(phone)) {
            setErrorMessage('Số phải là 10 chữ số');
            return;
        }
        if (!address.trim()) {
            setErrorMessage('Phải nhập Địa Chỉ để đặt hàng');
            return;
        }
        setErrorMessage('');
        // Khi submit, lấy thông tin đầy đủ từ products
        const submittedProducts = selectedProducts.map(item => {
            const product = findProductBySlug(item.slug);
            return {
                name: product?.name || '',
                price: product?.price || 0,
                quantity: item.quantity,
                slug: item.slug,
            };
        });
        console.log({ name, phone, address, note, selectedProducts: submittedProducts });
        setShowPopup(true);
    };

    const handleClosePopup = () => {
        setShowPopup(false);
        // Reset form
        setName('');
        setPhone('');
        setAddress('');
        setNote('');
        setSelectedProducts([]);
        setProcessedProduct(null);
        // Cuộn về đầu trang
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const calculateProductTotal = () => {
        return selectedProducts.reduce((total, item) => {
            const product = findProductBySlug(item.slug);
            return total + (product ? product.price * item.quantity : 0);
        }, 0);
    };

    const calculateTotal = () => {
        return calculateProductTotal() + shippingFee;
    };

    // Kiểm tra điều kiện hiển thị thẻ quà tặng
    const showGiftTag = calculateProductTotal() > 200000;

    useEffect(() => {
        if (selectedProduct && processedProduct !== selectedProduct) {
            const product = products.find(p => p.slug === selectedProduct);
            if (product && !selectedProducts.some(p => p.slug === selectedProduct)) {
                handleProductChange(product.slug, true);
                setProcessedProduct(selectedProduct);
            }
        }
    }, [selectedProduct, products, processedProduct, handleProductChange, selectedProducts]);

    return (
        <div className="p-4 sm:p-6 rounded-lg shadow-md relative bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-600">
            <form onSubmit={handleSubmit}>
                {/* Thông báo lỗi */}
                {errorMessage && (
                    <div className="mb-4 p-2 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 rounded-md">
                        {errorMessage}
                    </div>
                )}
                {/* Chia thành 2 cột bằng flex */}
                <div className="flex flex-col md:flex-row md:gap-6">
                    {/* Cột trái: Nhập thông tin */}
                    <div className="w-full md:w-1/2">
                        {/* <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white text-center">
                            Thông Tin Giao Hàng
                        </h3> */}
                        <div className="mb-4">
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                onInvalid={(e) => e.currentTarget.setCustomValidity('Trường bắt buộc phải nhập')}
                                onInput={(e) => e.currentTarget.setCustomValidity('')}
                                className="border border-gray-300 dark:border-gray-600 rounded-md p-2 w-full bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-orange-500 dark:focus:ring-orange-400"
                                placeholder="Họ Tên"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <input
                                type="number"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                onInvalid={(e) => e.currentTarget.setCustomValidity('Trường bắt buộc phải nhập')}
                                onInput={(e) => e.currentTarget.setCustomValidity('')}
                                className="border border-gray-300 dark:border-gray-600 rounded-md p-2 w-full bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-orange-500 dark:focus:ring-orange-400"
                                placeholder="Số Điện Thoại"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <input
                                type="text"
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                                onInvalid={(e) => e.currentTarget.setCustomValidity('Trường bắt buộc phải nhập')}
                                onInput={(e) => e.currentTarget.setCustomValidity('')}
                                className="border border-gray-300 dark:border-gray-600 rounded-md p-2 w-full bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-orange-500 dark:focus:ring-orange-400"
                                placeholder="Địa Chỉ"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <textarea
                                value={note}
                                onChange={(e) => setNote(e.target.value)}
                                className="border border-gray-300 dark:border-gray-600 rounded-md p-2 w-full bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-orange-500 dark:focus:ring-orange-400"
                                rows={3}
                                placeholder="Ghi Chú (nếu có)"
                            />
                        </div>
                    </div>

                    {/* Cột phải: Chọn sản phẩm và tổng tiền */}
                    <div className="w-full md:w-1/2 relative md:pl-6">
                        <div className="mb-4">
                            {products.map((product) => (
                                <div key={product.id} className="flex items-center mb-2">
                                    <input
                                        type="checkbox"
                                        checked={selectedProducts.some(p => p.slug === product.slug)}
                                        onChange={(e) => handleProductChange(product.slug, e.target.checked)}
                                        className="mr-2 text-orange-500 focus:ring-orange-500 dark:focus:ring-orange-400"
                                    />
                                    <label className="text-gray-700 dark:text-gray-300 text-base">
                                        {product.name} - {product.price.toLocaleString()} ₫
                                    </label>
                                    {selectedProducts.some(p => p.slug === product.slug) && (
                                        <div className="flex items-center ml-4">
                                            <input
                                                type="number"
                                                min="1"
                                                value={selectedProducts.find(p => p.slug === product.slug)?.quantity || 1}
                                                onChange={(e) => handleQuantityChange(product.slug, Number(e.target.value))}
                                                className="border border-gray-300 dark:border-gray-600 rounded-md p-1 w-16 text-center bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-orange-500 dark:focus:ring-orange-400"
                                            />
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                        <div className="mb-4">
                            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">Tổng Tiền:</h3>
                            <p className="text-base text-gray-700 dark:text-gray-300">
                                Tiền hàng: {calculateProductTotal().toLocaleString()} ₫
                            </p>
                            <p className="text-base text-gray-700 dark:text-gray-300">
                                Phí ship:{' '}
                                {selectedProducts.length === 0 || isFreeShipping ? (
                                    <span className="line-through text-red-600 dark:text-red-500">0 ₫</span>
                                ) : (
                                    `${additionalShippingFee.toLocaleString()} ₫`
                                )}
                            </p>
                            <p className="text-xl font-bold mt-2 text-gray-800 dark:text-gray-200">
                                Tổng: {calculateTotal().toLocaleString()} ₫
                            </p>
                            {/* Thẻ quà tặng */}
                            {showGiftTag && (
                                <div className="mt-2 flex items-center text-sm text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/20 p-2 rounded-md">
                                    <svg
                                        className="w-5 h-5 mr-2"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                        />
                                    </svg>
                                    <span>Đơn hàng trên 200,000đ: Tặng 1 phần quà bất ngờ!</span>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Nút Đặt Hàng */}
                <div className="flex justify-center mt-6">
                    <button
                        type="submit"
                        className="bg-orange-500 text-white px-6 py-2 sm:px-8 sm:py-3 rounded-md shadow-md hover:scale-105 hover:brightness-110 transition text-base sm:text-lg font-semibold"
                    >
                        Đặt Hàng
                    </button>
                </div>
            </form>

            {/* Popup Đặt Hàng Thành Công */}
            {showPopup && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-lg max-w-sm w-full text-center border border-gray-200 dark:border-gray-600">
                        <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
                            Đặt Hàng Thành Công!
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300 mb-6">
                            Chúng tôi sẽ sớm liên hệ để giao hàng.
                        </p>
                        <button
                            onClick={handleClosePopup}
                            className="bg-orange-500 text-white px-6 py-2 rounded-md hover:bg-orange-400 transition"
                        >
                            OK
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default OrderForm;