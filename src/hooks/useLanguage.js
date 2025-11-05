import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';

export const useLanguage = () => {
  const { i18n, t } = useTranslation();

  useEffect(() => {
    // Set document direction and language
    document.documentElement.dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = i18n.language;
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