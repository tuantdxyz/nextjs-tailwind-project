"use client";

import { useState } from "react";
import Link from "next/link";
import { useSession } from "next-auth/react";
import CartIcon from "./cartIcon";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { data: session } = useSession();

    const toggleMenu = () => setIsMenuOpen((prev) => !prev);
    const closeMenu = () => setIsMenuOpen(false);

    return (
        <>
            {/* 🌟 Navbar trên cùng dành cho Desktop */}
            <nav className="hidden md:flex fixed top-0 left-0 right-0 bg-white shadow-md border-b border-gray-300 z-50">
                <div className="container mx-auto flex justify-between items-center px-6 py-3">
                    <img src="/akrapovic.svg" className="h-10" alt="Logo" />

                    {/* Menu Desktop */}
                    <div className="flex space-x-6">
                        <Link href="/" className="text-gray-800 font-medium hover:text-black transition">Home</Link>
                        <Link href="/services" className="text-gray-800 font-medium hover:text-black transition">Services</Link>
                        <Link href="/product" className="text-gray-800 font-medium hover:text-black transition">Products</Link>
                        <Link href="#" className="text-gray-800 font-medium hover:text-black transition">Noti</Link>
                    </div>

                    {/* Hiển thị user / login */}
                    {session && session.user ? (
                        <div className="flex items-center space-x-3">
                            <img src={session.user.image} alt="User Icon" className="h-8 w-8 rounded-full" />
                            <span className="text-gray-900">{session.user.name}</span>
                            <CartIcon />
                        </div>
                    ) : (
                        <Link href="/auth/signin" className="bg-green-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-green-500 transition">
                            Login
                        </Link>
                    )}
                </div>
            </nav>

            {/* 📌 Navbar dưới dành cho Mobile */}
            <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white shadow-md border-t border-gray-300 z-50">
                <div className="flex justify-around items-center p-3">
                    <Link href="/" className="flex flex-col items-center text-gray-700 hover:text-black">
                        <img src="/home.svg" className="w-6 h-6" alt="Home" />
                        <span className="text-xs">Home</span>
                    </Link>

                    <Link href="/services" className="flex flex-col items-center text-gray-700 hover:text-black">
                        <img src="services.svg" className="w-6 h-6" alt="Services" />
                        <span className="text-xs">Services</span>
                    </Link>

                    <Link href="/product" className="flex flex-col items-center text-gray-700 hover:text-black">
                        <img src="/products.svg" className="w-6 h-6" alt="Products" />
                        <span className="text-xs">Products</span>
                    </Link>

                    <Link href="#" className="flex flex-col items-center text-gray-700 hover:text-black">
                        <img src="/notification.svg" className="w-6 h-6" alt="Notifications" />
                        <span className="text-xs">Noti</span>
                    </Link>

                    <CartIcon />
                </div>
            </nav>

            {/* 📌 Menu mở rộng (ẩn/hiện) */}
            {isMenuOpen && (
                <div className="absolute bottom-12 left-0 w-full bg-white p-4 shadow-md rounded-t-lg transition-all duration-300 ease-in-out md:hidden">
                    {session && session.user ? (
                        <div className="flex items-center justify-between">
                            <img src={session.user.image} alt="User Icon" className="h-8 w-8 rounded-full" />
                            <span className="text-gray-800">{session.user.name}</span>
                        </div>
                    ) : (
                        <Link
                            href="/auth/signin"
                            className="block text-center bg-green-600 text-white rounded-md px-4 py-2 mt-2"
                            onClick={closeMenu}
                        >
                            Login
                        </Link>
                    )}
                </div>
            )}
        </>
    );
};

export default Navbar;
