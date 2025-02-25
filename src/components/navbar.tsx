"use client";

import Link from "next/link";
import Image from "next/image";
import { useSession, signOut } from "next-auth/react";
import CartIcon from "./cartIcon";

const Navbar = () => {
    const { data: session } = useSession();

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
                        <Link href="/" className="text-gray-800 dark:text-gray-300 font-medium hover:text-black dark:hover:text-white transition">Home</Link>
                        <Link href="/services" className="text-gray-800 dark:text-gray-300 font-medium hover:text-black dark:hover:text-white transition">Services</Link>
                        <Link href="/product" className="text-gray-800 dark:text-gray-300 font-medium hover:text-black dark:hover:text-white transition">Products</Link>
                        {session?.user && (
                            <Link href="/notifications" className="text-gray-800 dark:text-gray-300 font-medium hover:text-black dark:hover:text-white transition">Noti</Link>
                        )}
                    </div>

                    {/* Cart + User + Login/Logout */}
                    <div className="flex items-center space-x-3">
                        <CartIcon />
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

            {/* 📌 Navbar Mobile */}
            <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-900 shadow-md border-t border-gray-300 dark:border-gray-700 z-50">
                <div className="flex justify-around p-3">
                    <Link href="/" className="flex flex-col items-center text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white">
                        <Image src="/home.svg" width={24} height={24} alt="Home" />
                        <span className="text-xs">Home</span>
                    </Link>
                    <Link href="/services" className="flex flex-col items-center text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white">
                        <Image src="/services.svg" width={24} height={24} alt="Services" />
                        <span className="text-xs">Services</span>
                    </Link>
                    <Link href="/product" className="flex flex-col items-center text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white">
                        <Image src="/products.svg" width={24} height={24} alt="Products" />
                        <span className="text-xs">Products</span>
                    </Link>
                    {session?.user && (
                        <Link href="/notifications" className="flex flex-col items-center text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white">
                            <Image src="/notification.svg" width={24} height={24} alt="Notifications" />
                            <span className="text-xs">Noti</span>
                        </Link>
                    )}
                </div>
            </nav>
        </>
    );
};

export default Navbar;
