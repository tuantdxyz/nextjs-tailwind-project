// src/components/Navbar.tsx
"use client";

import { useState } from 'react';
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import CartIcon from './cartIcon';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { data: session } = useSession(); // Lấy session từ next-auth

    const toggleMenu = () => {
        setIsMenuOpen(prev => !prev);
    };

    return (
        <nav className="fixed top-0 left-0 right-0 flex flex-wrap items-center justify-between p-4 bg-gray-200 z-10">
            <img src="/akrapovic.svg" className="h-10 w-10" alt="Logo" />
            <div className="flex md:hidden ml-auto">
                <button id="hamburger" onClick={toggleMenu}>
                    <img className="toggle block"
                        src={isMenuOpen ? "https://img.icons8.com/fluent-systems-regular/2x/close-window.png" : "https://img.icons8.com/fluent-systems-regular/2x/menu-squared-2.png"}
                        width="48" height="48"
                        alt={isMenuOpen ? "Close" : "Menu"}
                    />
                </button>
            </div>


            <div className={`toggle ${isMenuOpen ? 'flex-col items-start' : 'hidden'} w-full md:w-auto md:flex text-center md:text-center mt-5 md:mt-0`}>
                <Link href="/" className="block text-teal-900 font-bold hover:text-teal-500 text-xl px-3 py-4 border-b-2 border-teal-900 md:border-none transition duration-200 ease-in-out hover:scale-105">Home</Link>
                <Link href="/services" className="block text-teal-900 font-bold hover:text-teal-500 text-xl px-3 py-4 border-b-2 border-teal-900 md:border-none transition duration-200 ease-in-out hover:scale-105">Services</Link>
                <Link href="#" className="block text-teal-900 font-bold hover:text-teal-500 text-xl px-3 py-4 border-b-2 border-teal-900 md:border-none transition duration-200 ease-in-out hover:scale-105">Products</Link>
                <Link href="#" className="block text-teal-900 font-bold hover:text-teal-500 text-xl px-3 py-4 border-b-2 border-teal-900 md:border-none transition duration-200 ease-in-out hover:scale-105">Noti</Link>

                {/* Hiển thị thông tin người dùng trong menu toggle */}
                {isMenuOpen && session && session.user && (
                    <div className="flex items-center justify-center mt-4">
                        <img src={`${session.user.image}`} alt="User Icon" className="h-8 w-8 rounded-full mr-2" />
                        <span className="text-teal-900">{session.user.name}</span>
                        {/* Thêm biểu tượng giỏ hàng */}
                        <CartIcon />
                    </div>
                )}

                {/* Nút Login trong Mobile Menu */}
                {!session && isMenuOpen && (
                    <div className="w-full mt-4 flex justify-center">
                        <Link href="/auth/signin" className="rounded-md bg-gradient-to-br from-green-600 to-emerald-400 px-3 py-1.5 font-dm text-sm font-medium text-white shadow-md shadow-green-400/50 transition-transform duration-200 ease-in-out hover:scale-[1.03]">
                            Login
                        </Link>
                        {/* Thêm biểu tượng giỏ hàng */}
                        <CartIcon />
                    </div>
                )}
            </div>
            <div> <div className="hidden md:flex md:ml-auto items-center">
                {session && session.user ? (
                    <div className="flex items-center">
                        <img src={`${session.user.image}`} alt="User Icon" className="h-8 w-8 rounded-full mr-2" />
                        <span className="text-teal-900">{session.user.name}</span>
                        {/* Thêm biểu tượng giỏ hàng */}
                        <CartIcon />
                    </div>
                ) : (
                    <Link href="/auth/signin" className="rounded-md bg-gradient-to-br from-green-600 to-emerald-400 px-3 py-1.5 font-dm text-sm font-medium text-white shadow-md shadow-green-400/50 transition-transform duration-200 ease-in-out hover:scale-[1.03]">
                        Login
                    </Link>
                )}
            </div></div>

        </nav>
    );
};

export default Navbar;