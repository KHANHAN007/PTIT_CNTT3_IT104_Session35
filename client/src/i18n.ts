import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      dashboard: "Dashboard",
      account: "Account",
      finance: "Finance",
      statistics: "Statistics",
      documents: "Documents",
      collapse: "Collapse",
      language: "Language",
      switchToVietnamese: "Switch to Vietnamese",
      switchToEnglish: "Switch to English",
      currentLanguage: "Current Language: English",
      mainContent: "Main Content Area",
      menuStatus: "Menu is",
      collapsed: "collapsed",
      expanded: "expanded",
      toggleMenu: "Toggle Menu",
      welcome: "Welcome to our application",
      settings: "Settings",
      logout: "Logout",
    },
  },
  vi: {
    translation: {
      dashboard: "Bảng điều khiển",
      account: "Tài khoản",
      finance: "Tài sản",
      statistics: "Thống kê",
      documents: "Tài liệu",
      collapse: "Thu gọn",
      language: "Ngôn ngữ",
      switchToVietnamese: "Chuyển sang Tiếng Việt",
      switchToEnglish: "Chuyển sang Tiếng Anh",
      settings: "Cài đặt",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",
  keySeparator: false,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
