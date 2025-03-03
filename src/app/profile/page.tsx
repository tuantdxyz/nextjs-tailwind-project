"use client";

import { useSession, signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const ProfilePage = () => {
    const { data: session } = useSession();
    const [isCouponOpen, setIsCouponOpen] = useState(false);

    if (!session) {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
                <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-200">You are not logged in</h1>
                <Link href="/auth/signin" className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-500 transition">
                    Login
                </Link>
            </div>
        );
    }

    const handleToggleCoupon = () => {
        setIsCouponOpen(!isCouponOpen);
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
                <div className="flex flex-col items-center">
                    <Image
                        src={session.user.image || "/default-avatar.svg"}
                        alt="User Avatar"
                        width={150}
                        height={150}
                        className="rounded-full border mb-4"
                    />
                    <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-2">{session.user.name}</h1>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">{session.user.email}</p>
                </div>
                <hr className="my-4 border-gray-200 dark:border-gray-600" />
                <div className="flex flex-col space-y-4">
                    <Link
                        href="/profile/wallet"
                        className="flex items-center gap-3 px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-primary"
                    >
                        <Image
                            src="/wallet.svg"
                            alt="Wallet Icon"
                            width={20}
                            height={20}
                            className="w-5 h-5"
                        />
                        Ví của bạn: 1000 USD
                    </Link>
                    <hr className="my-4 border-gray-200 dark:border-gray-600" />
                    <details 
                        className="bg-gray-200 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg"
                        open={isCouponOpen}
                        onToggle={handleToggleCoupon}
                    >
                        <summary className="font-semibold text-gray-800 dark:text-gray-200 flex items-center gap-3 px-4 py-2 cursor-pointer">
                            <Image
                                src="/coupon-arrow.svg"
                                alt="Coupon Icon"
                                width={20}
                                height={20}
                                className="w-5 h-5"
                            />
                            Mã giảm giá của bạn
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                fill="none" 
                                viewBox="0 0 24 24" 
                                strokeWidth="1.5" 
                                stroke="currentColor" 
                                aria-hidden="true" 
                                className={`stroke-current shrink-0 w-6 h-6 ml-auto transition-transform duration-300 ${isCouponOpen ? 'rotate-45' : 'rotate-0'}`}
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15"></path>
                            </svg>
                        </summary>
                        <div className="text-sm p-4 text-gray-700 dark:text-gray-300">
                            <p>GIAMGIAV10</p>
                            <p>GIAMGIA50K</p>
                        </div>
                    </details>
                    <hr className="my-4 border-gray-200 dark:border-gray-600" />
                    <Link
                        href="/profile/order-history"
                        className="flex items-center gap-3 px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-primary"
                    >
                        <Image
                            src="/order-history.svg"
                            alt="Order History Icon"
                            width={20}
                            height={20}
                            className="w-5 h-5"
                        />
                        Lịch sử đặt hàng
                    </Link>
                    <hr className="my-4 border-gray-200 dark:border-gray-600" />
                    <Link
                        href="/profile/notifications"
                        className="flex items-center gap-3 px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-primary"
                    >
                        <Image
                            src="/notifications.svg"
                            alt="Notifications Icon"
                            width={20}
                            height={20}
                            className="w-5 h-5"
                        />
                        Thông báo của bạn
                    </Link>
                </div>
                <button
                    onClick={() => signOut()}
                    className="mt-6 bg-red-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-red-500 transition w-full"
                >
                    Logout
                </button>
            </div>
        </div>
    );
};

export default ProfilePage;