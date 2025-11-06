import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';

export const useLanguage = () => {
  const { i18n, t } = useTranslation();

  useEffect(() => {
    // Set document direction and language
    const lang = i18n.language?.split("-")[0];
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  }, [i18n.language]);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('language', lng);
  };

  const isRTL = i18n.language === 'ar';
  const currentLanguage = i18n.language;

  return {
    t,
    i18n,
    changeLanguage,
    isRTL,
    currentLanguage
  };
};