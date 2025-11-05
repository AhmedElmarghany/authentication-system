import { Link } from "react-router-dom";
import SignupForm from "../../components/auth/SignupForm";
import styles from "../../styles/Form.module.css";
import { useEffect } from "react";
import { useTranslation } from 'react-i18next';

const Signup = () => {
  const { t } = useTranslation();

  // Change page title
  useEffect(() => {
    document.title = `${t('name')} | ${t('auth.signup.pageTitle')}`;
  }, [t]);
  return (
    <div className={styles.formContainer}>
      <div className={styles.formHeader}>
        <h2 className={styles.formTitle}>{t("auth.signup.title")}</h2>
      </div>
      <SignupForm />
      <div className={styles.formFooter}>
        {t("auth.signup.haveAccount")} <Link to="/auth/login">{t("auth.signup.login")}</Link>
      </div>
    </div>
  );
};

export default Signup;
