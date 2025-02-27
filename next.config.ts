import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["lh3.googleusercontent.com"],
  },
  i18n: {
    locales: ["en", "vi"], // ✅ Định nghĩa các ngôn ngữ hỗ trợ
    defaultLocale: "en", // ✅ Ngôn ngữ mặc định
    localeDetection: false, // ✅ Không tự động phát hiện locale
  },
};

export default nextConfig;
