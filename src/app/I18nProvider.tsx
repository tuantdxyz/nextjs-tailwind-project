"use client"; // ✅ Nếu dùng Next.js 13+ cần có dòng này

import React, { useEffect, useState } from "react";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n"; // ✅ Import i18n instance

const I18nProvider = ({ children }: { children: React.ReactNode }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    i18n.init().then(() => setIsLoaded(true)); // Khởi tạo i18n
  }, []);

  if (!isLoaded) {
    return (
      <div className="flex justify-center items-center h-screen">
        <button type="button" className="bg-blue-500 text-white font-bold py-2 px-4 rounded flex items-center" disabled>
          <svg className="animate-spin h-10 w-10 mr-3 text-white" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          Processing...
        </button>
      </div>
    );
  }

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
};

export default I18nProvider;