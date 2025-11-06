import { Link } from "react-router-dom";
import LoginForm from "../../components/auth/LoginForm";
import styles from "../../styles/Form.module.css";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { t } = useTranslation();
  const accessToken = Cookies.get("accessToken");
  const navigate = useNavigate();

  useEffect(() => {
    if (accessToken) navigate("/dashboard", { replace: true });
  }, [accessToken, navigate]);

  // Change page title
  useEffect(() => {
    document.title = `${t("name")} | ${t("auth.login.pageTitle")}`;
  }, [t]);
  return (
    <div className={styles.formContainer}>
      <div className={styles.formHeader}>
        <h2 className={styles.formTitle}>{t("auth.login.title")}</h2>
      </div>
      <LoginForm />
      <div className={styles.formFooter}>
        {t("auth.login.noAccount")}{" "}
        <Link to="/auth/signup">{t("auth.login.signup")}</Link>
      </div>
    </div>
  );
};

export default Login;
