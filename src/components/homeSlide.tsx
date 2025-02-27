"use client"; // ✅ Next.js 13+ cần "use client" cho hooks

import React from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";

const HomeSlide = () => {
  const { t } = useTranslation(); // ✅ Hook để lấy chuỗi dịch

  return (
    <div className="flex flex-col items-center gap-4 p-20 mt-20">
      <h1 className="text-2xl font-bold text-gray-800">{t("welcome")}</h1> {/* ✅ Hiển thị chuỗi dịch */}

      <div className="flex flex-wrap justify-center gap-4">
        <Link href="#">
          <div className="group relative flex h-40 w-40 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg cursor-pointer">
            <img src="/img1.jpg" loading="lazy" alt="img1" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
            <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">VR</span>
          </div>
        </Link>

        <Link href="#">
          <div className="group relative flex h-40 w-40 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg cursor-pointer">
            <img src="/img2.jpg" loading="lazy" alt="img2" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
            <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">VX</span>
          </div>
        </Link>

        <Link href="#">
          <div className="group relative flex h-40 w-40 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg cursor-pointer">
            <img src="/img3.jpg" loading="lazy" alt="img3" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
            <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">VW</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default HomeSlide;
