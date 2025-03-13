"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
// import ThemeToggle from './ThemeToggle';

const Footer: React.FC = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="px-4 pt-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <div className="bg-gray-400 text-white text-center py-6">
        <h2 className="text-xl md:text-2xl lg:text-4xl font-bold text-gray-800 dark:text-white">
          Liên hệ hợp tác
        </h2>
        <p className="mt-4 text-xs sm:text-base">INFO@MYSITE.COM | PHONE: 123-456-7890</p>
      </div>
      <div className="grid gap-8 row-gap-6 mt-4 mb-4 sm:grid-cols-2 lg:grid-cols-3">
        <div className="sm:col-span-2">
          <div aria-label="Go home" title="Company" className="inline-flex items-center">
            <svg className="w-8 text-deep-purple-accent-400 dark:text-white" viewBox="0 0 24 24" strokeLinejoin="round" strokeWidth="2" strokeLinecap="round" strokeMiterlimit="10" stroke="currentColor" fill="none">
              <rect x="3" y="1" width="7" height="12"></rect>
              <rect x="3" y="17" width="7" height="6"></rect>
              <rect x="14" y="1" width="7" height="6"></rect>
              <rect x="14" y="11" width="7" height="12"></rect>
            </svg>
            <span className="ml-2 text-xl md:text-2xl lg:text-4xl font-bold tracking-wide text-gray-800 dark:text-white">Company</span>
          </div>
          <div className="mt-6 lg:max-w-sm">
            <p className="text-sm text-gray-800 dark:text-gray-200">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.
            </p>
          </div>
        </div>
        <div className="space-y-2 text-sm lg:col-span-1">
          <p className="text-base md:text-lg lg:text-xl font-bold tracking-wide text-gray-800 dark:text-gray-100">Contacts</p>
          <div className="flex">
            <p className="mr-1 text-gray-800 dark:text-gray-200">Phone:</p>
            <Link href="tel:850-123-5021" aria-label="Our phone" title="Our phone" className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800 dark:hover:text-deep-purple-200">850-123-5021</Link>
          </div>
          <div className="flex">
            <p className="mr-1 text-gray-800 dark:text-gray-200">Email:</p>
            <Link href="mailto:info@lorem.mail" aria-label="Our email" title="Our email" className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800 dark:hover:text-deep-purple-200">info@lorem.mail</Link>
          </div>
          <div className="flex">
            <p className="mr-1 text-gray-800 dark:text-gray-200">Address:</p>
            <Link href="https://www.google.com/maps/place/321+%C4%90.+La+Th%C3%A0nh,+Ch%E1%BB%A3+D%E1%BB%ABa,+%C4%90%E1%BB%91ng+%C4%90a,+H%C3%A0+N%E1%BB%99i+100000,+Vi%E1%BB%87t+Nam/@21.0227315,105.8195578,17z/data=!3m1!4b1!4m6!3m5!1s0x3135ab70bbebab27:0x5443699060eaaa48!8m2!3d21.0227315!4d105.8221327!16s%2Fg%2F11fm_j85bd?entry=ttu&g_ep=EgoyMDI1MDIwNS4xIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" aria-label="Our address" title="Our address" className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800 dark:hover:text-deep-purple-200">
              321 Đ. La Thành, Chợ Dừa, Đống Đa, Hà Nội.
            </Link>
          </div>
        </div>
        <div className="space-y-2 text-sm">
          <p className="text-base md:text-lg lg:text-xl font-bold tracking-wide text-gray-800 dark:text-gray-100">Social</p>
          <div className="flex items-center space-x-3">
            <Link href="https://www.youtube.com" aria-label="YouTube" className="transition-transform duration-300 hover:scale-110">
              <Image src="/youtube-icon.svg" alt="YouTube Icon" width={48} height={48} className="h-6 w-6" />
            </Link>
            <Link href="https://www.facebook.com" aria-label="Facebook" className="transition-transform duration-300 hover:scale-110">
              <Image src="/facebook-icon.svg" alt="Facebook Icon" width={48} height={48} className="h-6 w-6" />
            </Link>
            <Link href="https://zalo.me" aria-label="Zalo" className="transition-transform duration-300 hover:scale-110">
              <Image src="/zalo-icon.svg" alt="Zalo Icon" width={48} height={48} className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row">
        <p className="text-sm text-gray-600 dark:text-gray-300">
          © Copyright 2020 Lorem Inc. All rights reserved.
        </p>
        <ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
          <li>
            <Link href="/" className="text-sm text-gray-600 dark:text-gray-300 transition-colors duration-300 hover:text-deep-purple-accent-400 dark:hover:text-deep-purple-200">F.A.Q</Link>
          </li>
          <li>
            <Link href="/" className="text-sm text-gray-600 dark:text-gray-300 transition-colors duration-300 hover:text-deep-purple-accent-400 dark:hover:text-deep-purple-200">Privacy Policy</Link>
          </li>
          <li>
            <Link href="/" className="text-sm text-gray-600 dark:text-gray-300 transition-colors duration-300 hover:text-deep-purple-accent-400 dark:hover:text-deep-purple-200">Terms &amp; Conditions</Link>
          </li>
          {/* <li className="mt-3 sm:mt-0">
            <div className="text-sm text-gray-600 dark:text-gray-300 transition-colors duration-300 hover:text-deep-purple-accent-400 dark:hover:text-deep-purple-200">
              <ThemeToggle />
            </div>
          </li> */}
        </ul>
      </div>
    </div>
  );
};

export default Footer;