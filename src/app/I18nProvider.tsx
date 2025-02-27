"use client"; // ✅ Nếu dùng Next.js 13+ cần có dòng này

import React, { useEffect, useState } from "react";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n"; // ✅ Import i18n instance

const I18nProvider = ({ children }: { children: React.ReactNode }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    i18n.init().then(() => setIsLoaded(true)); // Khởi tạo i18n
  }, []);

  if (!isLoaded) return <p>Loading translations...</p>; // Hiển thị khi đang tải

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
};

export default I18nProvider;
