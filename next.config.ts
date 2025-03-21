import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["lh3.googleusercontent.com", "mdbcdn.b-cdn.net", "images.unsplash.com", "img.icons8.com"],
  },
  i18n: {
    locales: ["en", "vi"], // ✅ Định nghĩa các ngôn ngữ hỗ trợ
    defaultLocale: "en", // ✅ Ngôn ngữ mặc định
    localeDetection: false, // ✅ Không tự động phát hiện locale
  },
};

export default nextConfig;
