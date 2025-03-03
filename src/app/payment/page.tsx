"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useCart } from '../../lib/features/cart/cartContext';
import StepOrderProcess from '../../components/stepOrderProcess';

const PaymentPage: React.FC = () => {
    // const { state: cart } = useCart();
    const { state: cart, dispatch } = useCart();
    const [paymentStatus, setPaymentStatus] = useState<'Unpaid' | 'Paid' | 'Cancelled'>('Unpaid');
    const [timeRemaining, setTimeRemaining] = useState(10); // 10 giây
    const [loading, setLoading] = useState(false);
    const QRCodeImage = '/QRCodePayment.png'; // Đường dẫn đến ảnh QRCode

    useEffect(() => {
        if (paymentStatus === 'Unpaid') {
            const timer = setInterval(() => {
                setTimeRemaining((prev) => {
                    if (prev <= 1) {
                        clearInterval(timer);
                        // setPaymentStatus('Cancelled');
                        setPaymentStatus('Paid');    //test thanh toan thanh cong
                        return 0;
                    }
                    return prev - 1;
                });
            }, 1000);
            return () => clearInterval(timer);
        }
    }, [paymentStatus]);

    useEffect(() => {
        if (paymentStatus === 'Paid') {
            dispatch({ type: 'CLEAR_CART' });
            sendTelegramMessage('Payment was successful!');
        }
    }, [paymentStatus, dispatch]);

    const sendTelegramMessage = async (message: string) => {
        const telegramToken = process.env.TELEGRAM_TOKEN_BOT;
        const chatId = process.env.TELEGRAM_CHAT_ID;
        const url = `https://api.telegram.org/bot${telegramToken}/sendMessage`;
        // const url = process.env.TELEGRAM_GROUP_URL;

        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    chat_id: chatId,
                    text: message
                })
            });
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            console.log('Message sent to Telegram');
        } catch (error) {
            console.error('Error sending message to Telegram:', error);
        }
    };

    const totalAmount = cart.items.reduce((acc, product) => acc + product.price * product.quantity, 0);

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-indigo-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
            <div className="w-full max-w-2xl p-4 bg-white shadow-2xl dark:bg-gray-900 sm:p-10 sm:rounded-3xl">
                <form className="text-center" onSubmit={(e) => e.preventDefault()}>
                    <h1 className="text-4xl font-extrabold text-green-700 dark:text-green-400">Thông tin đặt hàng</h1>

                    {/* Steps for Order Process */}
                    <StepOrderProcess currentStep={1} paymentStatus={paymentStatus} />

                    <h2 className="mt-4 text-lg text-gray-800 dark:text-gray-300">Sản phẩm: {cart.items.map(item => item.name).join(', ')}</h2>
                    <p className="mt-2 text-lg text-gray-800 dark:text-gray-300">Tổng giá: ${totalAmount.toFixed(2)}</p>

                    {paymentStatus === 'Unpaid' && (
                        <div className="mt-6 ">
                            <img src="QRCodePayment.png" alt="QR Code" className="mx-auto w-300 h-300" />
                            <h2 className="mt-4 text-lg text-gray-800 dark:text-gray-300">Vui lòng quét mã QR để thanh toán</h2>
                            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">Hệ thống đang chờ xác nhận thanh toán của bạn.</p>
                            <p className="mt-2 text-lg text-blue-600 dark:text-blue-400">Thời gian còn lại: {timeRemaining} giây</p>
                            {loading && <div className="loader"></div>}
                        </div>
                    )}

                    {paymentStatus === 'Paid' && (
                        <div className="mt-6">
                            <h2 className="text-2xl text-green-700 dark:text-green-400">Cảm ơn bạn!</h2>
                            <p className="mt-2 text-lg text-gray-800 dark:text-gray-300">Thanh toán đã được xác nhận.</p>
                            <p className="mt-2 text-gray-700 dark:text-gray-400">Chúng tôi sẽ gửi thông tin đơn hàng cho bạn qua email và số điện thoại.</p>
                            <Link href="/">
                                <button className="mt-4 px-4 py-2 text-white bg-green-600 rounded">Đóng</button>
                            </Link>
                        </div>
                    )}

                    {paymentStatus === 'Cancelled' && (
                        <div className="mt-6">
                            <h2 className="text-red-600">Đơn hàng đã bị hủy</h2>
                            <p>Thời gian giao dịch đã hết. Vui lòng thử lại.</p>
                            <Link href="/">
                                <button className="mt-4 px-4 py-2 text-white bg-red-600 rounded">OK</button>
                            </Link>
                        </div>
                    )}
                </form>
            </div>
        </div>
    );
};

export default PaymentPage;