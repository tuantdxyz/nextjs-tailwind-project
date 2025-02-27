import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

// ✅ Lấy ngôn ngữ từ localStorage
const savedLanguage = typeof window !== "undefined" ? localStorage.getItem("lng") : null;

i18n
  .use(Backend) // Load file JSON dịch
  .use(LanguageDetector) // Tự động phát hiện ngôn ngữ
  .use(initReactI18next) // Kết nối với React
  .init({
    fallbackLng: savedLanguage || "en",
    supportedLngs: ["en", "vi"],
    debug: process.env.NODE_ENV === "development",
    interpolation: { escapeValue: false },
    backend: { loadPath: "/locales/{{lng}}/common.json" },
    detection: {
      order: ["localStorage", "navigator"], // Lưu ngôn ngữ vào localStorage
      caches: ["localStorage"], // Giữ lại khi reload trang
    },
  });

export default i18n;
