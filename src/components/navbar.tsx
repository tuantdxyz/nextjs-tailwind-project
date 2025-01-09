// src/components/Navbar.tsx
"use client";

import { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="flex flex-wrap items-center justify-between p-3 bg-teal-200/20">
            <img src="/akrapovic.svg" className="h-10 w-10" alt="Logo" />
            <div className="flex md:hidden">
                <button id="hamburger" onClick={toggleMenu}>
                    {isMenuOpen ? (
                        <img className="toggle block" src="https://img.icons8.com/fluent-systems-regular/2x/close-window.png" width="48" height="48" alt="Close" />
                    ) : (
                        <img className="toggle block" src="https://img.icons8.com/fluent-systems-regular/2x/menu-squared-2.png" width="48" height="48" alt="Menu" />
                    )}
                </button>
            </div>
            <div className={`toggle ${isMenuOpen ? 'block' : 'hidden'} w-full md:w-auto md:flex text-center md:text-left text-bold mt-5 md:mt-0 border-t-2 border-teal-900 md:border-none`}>
                <Link href="#" className="block text-teal-900 hover:text-teal-500 px-3 py-3 border-b-2 border-teal-900 md:border-none">Home</Link>
                <Link href="#" className="block text-teal-900 hover:text-teal-500 px-3 py-3 border-b-2 border-teal-900 md:border-none">Products</Link>
                <Link href="#" className="block text-teal-900 hover:text-teal-500 px-3 py-3 border-b-2 border-teal-900 md:border-none">Pricing</Link>
                <Link href="#" className="block text-teal-900 hover:text-teal-500 px-3 py-3 border-b-2 border-teal-900 md:border-none">Contact</Link>
            </div>
            <Link href="#" className="hidden md:flex px-4 py-2 text-right bg-teal-900 hover:bg-teal-500 text-white rounded ml-auto">
                Login
            </Link>
            {/* Create Account Button, only visible when menu is open */}
            {isMenuOpen && (
                <div className="w-full mt-4">
                    <Link href="#" className="w-full px-4 py-2 text-center bg-teal-900 hover:bg-teal-500 text-white rounded">
                        Login
                    </Link>
                </div>
            )}
        </nav>
    );
};

export default Navbar;