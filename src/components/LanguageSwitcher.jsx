import { useTranslation } from "react-i18next";
import { useLanguage } from "../hooks/useLanguage";

import styles from "../styles/LanguageSwitcher.module.css";
import { useEffect, useRef, useState } from "react";

const NewLangSwitch = () => {
  const { i18n } = useTranslation();
  const { changeLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const languages = [
    { code: "en", name: "English", native: "English" },
    { code: "ar", name: "Arabic", native: "العربية" },
  ];

  const currentLang = languages.find((lang) => lang.code === i18n.language);
  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (langCode) => {
    changeLanguage(langCode);
    setIsOpen(false);
  };
  return (
    <div className={styles.languageSwitcher} ref={dropdownRef}>
      <button
        className={styles.trigger}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
      >
        {/* Globe Icon */}
        <svg
          className={styles.globeIcon}
          width="20"
          height="20"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>

        <span className={styles.currentLang}>{currentLang?.native}</span>

        {/* Chevron Icon */}
        <svg
          className={`${styles.chevronIcon} ${isOpen ? styles.open : ""}`}
          width="16"
          height="16"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className={styles.dropdown}>
          {languages.map((lang) => (
            <button
              key={lang.code}
              className={`${styles.option} ${
                i18n.language === lang.code ? styles.active : ""
              }`}
              onClick={() => handleSelect(lang.code)}
              role="option"
              aria-selected={i18n.language === lang.code}
            >
              <span className={styles.langName}>{lang.native}</span>
              {i18n.language === lang.code && (
                <svg
                  className={styles.checkIcon}
                  width="16"
                  height="16"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default NewLangSwitch;
