import { useEffect} from "react";
import Cookies from "js-cookie";
import Header from "../components/Header"
import { useTranslation, Trans } from "react-i18next";
import styles from "../styles/Home.module.css"
import { Link } from "react-router-dom";

const Home = () => {
  const { t } = useTranslation();

  // Change page title
  useEffect(() => {
    document.title = t('name');
  }, [t]);
  const accessToken = Cookies.get("accessToken");
  const isLoggedIn = !!accessToken;

  return (
    <>
      <Header />
    <div className={styles.container}>
      {/* Main Content */}
      <main className={styles.main}>
        <div className={styles.content}>
          {/* Left Section */}
          <div className={styles.leftSection}>
            <div className={styles.badge}>
              <svg width="16" height="16" fill="currentColor" viewBox="0 0 20 20">
                 <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
               </svg>
              {t("home.badge")}
              </div>
            
            <h1 className={styles.title}>{t("home.title")}</h1>

            {/* Features with Icons (2x2 grid) */}
            <div className={styles.featuresGrid}>
              <div className={styles.feature}>
                <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <span>{t("home.features.multilingual")}</span>
              </div>

              <div className={styles.feature}>
                <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/>
                </svg>
                <span>{t("home.features.darkLight")}</span>
              </div>

              <div className={styles.feature}>
                <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"/>
                </svg>
                <span>{t("home.features.responsive")}</span>
              </div>

              <div className={styles.feature}>
                <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
                </svg>
                <span>{t("home.features.protectedRoutes")}</span>
              </div>
            </div>

            {/* Divider */}
            <hr className={styles.divider} />

            {/* Architecture Items with Bullets (2x2 grid) */}
            <div className={styles.architectureGrid}>
              <div className={styles.architectureItem}>
                <span className={styles.bullet}></span>
                <span>{t("home.architecture.modular")}</span>
              </div>

              <div className={styles.architectureItem}>
                <span className={styles.bullet}></span>
                <span>{t("home.architecture.reusable")}</span>
              </div>

              <div className={styles.architectureItem}>
                <span className={styles.bullet}></span>
                <span>{t("home.architecture.protectedPages")}</span>
              </div>

              <div className={styles.architectureItem}>
                <span className={styles.bullet}></span>
                <span>{t("home.architecture.notFound")}</span>
              </div>
            </div>

            {/* CTA Button */}
            <Link to={isLoggedIn ? "/dashboard" : "/auth/signup"} className={styles.ctaButton}>
            {isLoggedIn ? t("home.cta.dashboard") : t("home.cta.getStarted")}
              <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
              </svg>
              </Link>
        
          </div>

          {/* Right Section - Code Windows */}
          <div className={styles.rightSection}>
            {/* Frontend Code Window */}
            <div className={styles.codeWindow}>
              <div className={styles.codeHeader}>
                <span className={styles.codeTitle}>{t("home.frontend.title")}</span>
                <div className={styles.windowControls}>
                  <span className={styles.dot} style={{ background: '#FF5F56' }}></span>
                  <span className={styles.dot} style={{ background: '#FFBD2E' }}></span>
                  <span className={styles.dot} style={{ background: '#27C93F' }}></span>
                </div>
              </div>
              <div className={styles.codeBody}>
                <Trans 
                    i18nKey="home.frontend.description"
                    components={{ code: <code/> }}
                  />
                {/* <p>Developed with <code>React.js</code> for interactive UI and <code>vite</code> for fast building, <code>React-Router-Dom</code> for seamless navigation, Redux toolkit <code>RTK Query</code> for managing API calls, Used pure <code>CSS</code> for styling and CSS modules to avoid conflicts, <code>i18next</code> for internationalization to handle language switching</p> */}
              </div>
            </div>

            {/* Backend Code Window */}
            <div className={styles.codeWindow}>
              <div className={styles.codeHeader}>
                <span className={styles.codeTitle}>{t("home.backend.title")}</span>
                <div className={styles.windowControls}>
                  <span className={styles.dot} style={{ background: '#FF5F56' }}></span>
                  <span className={styles.dot} style={{ background: '#FFBD2E' }}></span>
                  <span className={styles.dot} style={{ background: '#27C93F' }}></span>
                </div>
              </div>
              <div className={styles.codeBody}>
                <Trans 
                    i18nKey="home.backend.description"
                    components={{ code: <code/> }}
                  />
                {/* <p>Developed with <code>Node.js</code> and <code>Express.js</code> framework, <code>MongoDB</code> as a database and <code>Mongoose</code> for data modeling, JSON Web Token <code>JWT</code> for secure authentication, <code>Bcrypt</code> for password hashing</p> */}
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className={styles.footer}>
        <p>{t("common.footer")}</p>
      </footer>
    </div>
    </>
  )
}

export default Home