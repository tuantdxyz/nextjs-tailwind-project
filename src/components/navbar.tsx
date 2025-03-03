"use client";

import Link from "next/link";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { useTranslation } from "react-i18next";
import { usePathname } from "next/navigation";
import CartIcon from "./cartIcon";

const Navbar = () => {
    const { data: session } = useSession();
    const { i18n, t } = useTranslation();
    const pathname = usePathname();

    // ✅ Thay đổi ngôn ngữ
    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
        localStorage.setItem("lng", lng); // Lưu ngôn ngữ vào localStorage
    };

    const menuItems = [
        { href: "/", label: "home" },
        { href: "/services", label: "services" },
        { href: "/product", label: "products" },
        { href: "/notifications", label: "notifications", auth: true },
    ];

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
                            onError={(e) => (e.currentTarget.src = "/fallback-logo.png")}
                        />
                    </Link>

                    {/* Menu Desktop */}
                    <div className="hidden md:flex space-x-6">
                        {menuItems.map((item) => {
                            if (item.auth && !session?.user) return null;
                            return (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className={`text-lg font-bold text-gray-800 dark:text-gray-300 hover:text-black dark:hover:text-white transition relative group ${pathname === item.href ? "active" : ""
                                        }`}
                                >
                                    {t(item.label)}
                                    <span
                                        className={`absolute bottom-0 left-0 right-0 h-0.5 transform transition-transform duration-300 ${pathname === item.href
                                                ? "scale-x-100 bg-blue-500"
                                                : "scale-x-0 group-hover:scale-x-100 bg-gray-800 dark:bg-white"
                                            }`}
                                    ></span>
                                </Link>
                            );
                        })}
                    </div>

                    {/* Cart + User + Login + Language */}
                    <div className="flex items-center space-x-3">
                        <CartIcon />
                        {/* 🔥 Nút chọn ngôn ngữ */}
                        {/* <select
                            className="bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white px-2 py-1 rounded-md"
                            value={i18n.language}
                            onChange={(e) => changeLanguage(e.target.value)}
                        >
                            <option value="en">🇺🇸 English</option>
                            <option value="vi">🇻🇳 Tiếng Việt</option>
                        </select> */}

                        {/* User Info */}
                        {session?.user ? (
                            <Link href="/profile">
                                <Image
                                    src={session.user.image || "/default-avatar.svg"}
                                    alt="User Avatar"
                                    width={32}
                                    height={32}
                                    className="rounded-full border"
                                />
                            </Link>
                        ) : (
                            <Link href="/auth/signin" className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-500 transition">
                            Login
                            </Link>
                        )}
                    </div>
                </div>

                {/* 📌 Navbar Mobile */}
                <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-900 shadow-md border-t border-gray-300 dark:border-gray-700 z-50">
                    <div className="flex justify-around p-3">
                        {menuItems.map((item) => {
                            if (item.auth && !session?.user) return null;
                            return (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className={`flex flex-col items-center text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white relative group ${pathname === item.href ? "active" : ""
                                        }`}
                                >
                                    <Image
                                        src={`/${item.label}.svg`}
                                        width={24}
                                        height={24}
                                        alt={item.label}
                                    />
                                    <span className="text-xs">{t(item.label)}</span>
                                </Link>
                            );
                        })}
                    </div>
                </nav>
            </div>
        </>
    );
};

export default Navbar;