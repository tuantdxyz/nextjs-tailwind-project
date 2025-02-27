"use client";

import Link from "next/link";
import Image from "next/image";
import { useSession, signOut } from "next-auth/react";
import { useTranslation } from "react-i18next";
import CartIcon from "./cartIcon";

const Navbar = () => {
    const { data: session } = useSession();
    const { i18n, t } = useTranslation();

    // ✅ Thay đổi ngôn ngữ
    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
        localStorage.setItem("lng", lng); // Lưu ngôn ngữ vào localStorage
    };

    return (
        <>
            {/* 🌟 Header trên cùng */}
            <div className="fixed top-0 left-0 right-0 bg-white dark:bg-gray-900 shadow-md border-b border-gray-300 dark:border-gray-700 z-50">
                <div className="container mx-auto flex justify-between items-center px-6 py-2">
                    
                    {/* ✅ Logo Gốc */}
                    <Link href="/">
                        <Image 
                            src="/akrapovic.svg"
                            alt="Logo"
                            width={60}
                            height={40}
                            priority
                            layout="intrinsic"
                            onError={(e) => e.currentTarget.src = "/fallback-logo.png"}
                        />
                    </Link>

                    {/* Menu Desktop */}
                    <div className="hidden md:flex space-x-6">
                        <Link href="/" className="text-gray-800 dark:text-gray-300 font-medium hover:text-black dark:hover:text-white transition">
                            {t("home")}
                        </Link>
                        <Link href="/services" className="text-gray-800 dark:text-gray-300 font-medium hover:text-black dark:hover:text-white transition">
                            {t("services")}
                        </Link>
                        <Link href="/product" className="text-gray-800 dark:text-gray-300 font-medium hover:text-black dark:hover:text-white transition">
                            {t("products")}
                        </Link>
                        {session?.user && (
                            <Link href="/notifications" className="text-gray-800 dark:text-gray-300 font-medium hover:text-black dark:hover:text-white transition">
                                {t("notifications")}
                            </Link>
                        )}
                    </div>

                    {/* Cart + User + Login/Logout + Language */}
                    <div className="flex items-center space-x-3">
                        <CartIcon />
                        {/* 🔥 Nút chọn ngôn ngữ */}
                        <select
                            className="bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white px-2 py-1 rounded-md"
                            value={i18n.language}
                            onChange={(e) => changeLanguage(e.target.value)}
                        >
                            <option value="en">🇺🇸 English</option>
                            <option value="vi">🇻🇳 Tiếng Việt</option>
                        </select>

                        {/* User Info */}
                        {session?.user ? (
                            <div className="flex items-center space-x-3">
                                <Image
                                    src={session.user.image || "/default-avatar.png"}
                                    alt="User Avatar"
                                    width={32}
                                    height={32}
                                    className="rounded-full border"
                                />
                                <span className="text-gray-700 dark:text-gray-300 font-medium">{session.user.name}</span>
                                <button 
                                    onClick={() => signOut()} 
                                    className="bg-red-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-red-500 transition">
                                    Logout
                                </button>
                            </div>
                        ) : (
                            <Link href="/auth/signin" className="bg-green-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-green-500 transition">
                                Login
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;
