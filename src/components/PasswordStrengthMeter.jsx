import { useTranslation } from "react-i18next";
import styles from "../styles/PasswordStrengthMeter.module.css";

const PasswordCriteria = ({ password }) => {
    const { t } = useTranslation()
    const criteria = [
        {label: t('auth.passwordRequirements.length'), met: password.length >= 6 },
        {label: t('auth.passwordRequirements.capital'), met: /[A-Z]/.test(password) },
    ];

    return (
        <div>
            {criteria.map((item, index) => (
                <div key={index} className={`${styles.requirement} ${item.met ? styles.met : ''}`}>
                    {item.label}
                </div>
            ))}
        </div>
    );
};

export const PasswordStrengthMeter = ({ password }) => {
    const { t } = useTranslation();
  return (
    <div className={styles.passwordRequirements}>
        <div className={styles.passwordRequirementsTitle}>{t('auth.passwordRequirements.title')}</div>
        <PasswordCriteria password={password}/>
    </div>
  );
}
