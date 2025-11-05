import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import styles from '../styles/PageNotFound.module.css';
import { useEffect } from 'react';

const PageNotFound = () => {
  const { t } = useTranslation();
  // Change page title
  useEffect(() => {
    document.title = t('notFound.title');
  }, [t]);
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {/* Animated 404 Illustration */}
        <div className={styles.illustration}>
          <div className={styles.number404}>
            <span className={styles.four}>4</span>
            <span className={styles.zero}>
              <svg viewBox="0 0 200 200" className={styles.zeroSvg}>
                <circle
                  cx="100"
                  cy="100"
                  r="80"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="8"
                  strokeDasharray="502"
                  strokeDashoffset="0"
                  className={styles.circle}
                />
                <circle
                  cx="100"
                  cy="100"
                  r="40"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="8"
                  className={styles.innerCircle}
                />
              </svg>
            </span>
            <span className={styles.four}>4</span>
          </div>

          {/* Floating particles */}
          <div className={styles.particles}>
            <div className={styles.particle}></div>
            <div className={styles.particle}></div>
            <div className={styles.particle}></div>
            <div className={styles.particle}></div>
            <div className={styles.particle}></div>
          </div>
        </div>

        {/* Text Content */}
        <div className={styles.textContent}>
          <h1 className={styles.title}>
            {t('notFound.title')}
          </h1>
          <p className={styles.description}>
            {t('notFound.description')}
          </p>

          {/* Action Buttons */}
          <div className={styles.actions}>
            <Link to="/" className={styles.btnPrimary}>
              <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
              </svg>
              {t('notFound.goHome')}
            </Link>
            
            <button onClick={handleGoBack} className={styles.btnSecondary}>
              <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
              </svg>
              {t('notFound.goBack')}
            </button>
          </div>

          {/* Quick Links */}
          <div className={styles.quickLinks}>
            <p className={styles.quickLinksTitle}>
              {t('notFound.helpfulLinks')}
            </p>
            <div className={styles.links}>
              <Link to="/dashboard">{t('dashboard.pageTitle')}</Link>
              <Link to="/auth/login">{t('auth.login.pageTitle')}</Link>
              <Link to="/auth/signup">{t('auth.signup.pageTitle')}</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;