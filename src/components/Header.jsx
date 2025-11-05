import { useTranslation } from "react-i18next";
import styles from "../styles/Header.module.css";
import LanguageSwitcher from "./LanguageSwitcher";
import ThemeToggle from "./ThemeToggler";
import { Link } from "react-router-dom";

const Header = () => {
    const { t } = useTranslation();
  return (
        <header className={styles.header}>
        <div className={styles.container}>
            <div className={styles.headerContent}>
                <Link to="/" className={styles.logo}>
                    <img src="/logo.svg" className={styles.logoIcon}></img>
                    <span className={styles.logoText}>{t("name")}</span>
                </Link>
                <div className={styles.headerControls}>
                    <LanguageSwitcher />
                    <ThemeToggle />
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header