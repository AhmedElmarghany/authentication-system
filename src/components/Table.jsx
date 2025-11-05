import { useTranslation } from "react-i18next";
import styles from "../styles/Table.module.css"

function toArabicDigits(input) {
  const arabicDigits = ["٠","١","٢","٣","٤","٥","٦","٧","٨","٩"];
  return input.replace(/[0-9]/g, digit => arabicDigits[digit]);
};

function FormatDate(dateString) {
  const { i18n } = useTranslation();
  const currentLang = i18n.language === "ar" ? "ar" : "en";
  
  // Match the date parts (YYYY-MM-DD)
  const match = dateString.match(/^(\d{4})-(\d{2})-(\d{2})/);
  if (!match) return null;

  const [, year, month, day] = match;
  const en_months = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ];
  const ar_months = [
    "يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو",
    "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"
  ];

  if(currentLang === "ar") return `${toArabicDigits(day)} ${ar_months[parseInt(month) - 1]} ${toArabicDigits(year)}`
  else   return `${parseInt(day)} ${en_months[parseInt(month) - 1]} ${year}`;

}


const Table = ({users}) => {
  const { t } = useTranslation();
  return (
    <div className={styles.tableContainer}>
        <div className={styles.tableWrapper}>
                <table id={styles.usersTable}>
                  <thead>
                    <tr>
                      <th>{t("dashboard.usersTable.name")}</th>
                      <th>{t("dashboard.usersTable.email")}</th>
                      <th>{t("dashboard.usersTable.joinDate")}</th>
                    </tr>
                  </thead>
                  <tbody id={styles.tableBody}>
                    {users.map((user, index) => (
                      <tr key={index}>
                        <td>{user.first_name + " " + user.last_name}</td>
                        <td>{user.email}</td>
                        <td>{FormatDate(user.createdAt)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
        </div>
    </div>
    
  )
}

export default Table