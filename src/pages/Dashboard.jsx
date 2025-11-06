import { useNavigate } from "react-router-dom";
import {
  useDeleteUserMutation,
  useLogoutMutation,
} from "../redux/features/auth/authApiSlice";
import { useGetUsersQuery } from "../redux/features/users/usersApiSlice";
import styles from "../styles/Dashboard.module.css";
import ModalStyles from "../styles/ModalContent.module.css";
import Cookies from "js-cookie";
import Modal from "../components/Modal";
import Header from "../components/Header";
import { useEffect, useState } from "react";
import Table from "../components/Table";
import Spinner from "../components/Spinner";
import { useTranslation } from "react-i18next";

const Dashboard = () => {
  const {
    data: users,
    isLoading: usersIsLoading,
    isError: usersIsError,
    error: usersError,
    isSuccess: usersIsSuccess,
  } = useGetUsersQuery(undefined, {
    refetchOnMountOrArgChange: false, // if true, Always refetch
  });
  const [logout, { isLoading: logoutIsLoading, isSuccess: logoutIsSuccess }] =
    useLogoutMutation();
  const [
    deleteUser,
    { isLoading: deleteIsLoading, isSuccess: deleteIsSuccess },
  ] = useDeleteUserMutation();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleLogout = async () => {
    Cookies.remove("accessToken");

    // that mutation clears "jwt" cookie
    await logout();
  };
  useEffect(() => {
    if (logoutIsSuccess) {
      navigate("/auth/login", { replace: true });
    }
  }, [logoutIsSuccess, navigate]);

  const handleDeleteAccount = async () => {
    await deleteUser();
  };

  useEffect(() => {
    if (deleteIsSuccess) {
      Cookies.remove("accessToken");
      Cookies.remove("jwt");
      navigate("/auth/signup", { replace: true });
    }
  }, [deleteIsSuccess, navigate]);

  // Modal states
  const [isLogoutOpen, setIsLogoutOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);

  // Change page title
  useEffect(() => {
    document.title = t("dashboard.pageTitle");
  }, [t]);

  return (
    <>
      <Header />
      <div className={styles.mainContent}>
        <div className={styles.container}>
          {/* dashboard header */}
          <div className={styles.dashboardHeader}>
            <div className={styles.dashboardInfo}>
              <h1>{t("dashboard.title")}</h1>
              <p>{t("dashboard.subtitle")}</p>
            </div>
            <div className={styles.dashboardActions}>
              <button
                type="button"
                className={`${styles.btn}  ${styles.btnDelete}`}
                id={styles.deleteBtn}
                onClick={() => setIsDeleteOpen(true)}
              >
                <svg
                  width="18"
                  height="18"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                  />
                </svg>
                {t("dashboard.deleteAccount")}
              </button>
              <button
                type="button"
                className={`${styles.btn}  ${styles.btnLogout}`}
                id={styles.logoutBtn}
                onClick={() => setIsLogoutOpen(true)}
              >
                <svg
                  width="18"
                  height="18"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                  />
                </svg>
                {t("dashboard.logout")}
              </button>
            </div>
          </div>
          {/* table */}
          <div className={styles.tableSection}>
            {usersIsLoading && !usersIsError && (
              <p className={styles.tableLaoding}>
                {" "}
                <Spinner /> {t("common.loading")}
              </p>
            )}
            {!usersIsLoading && usersIsError && (
              <p>Error: {usersError.data.message}</p>
            )}
            {!usersIsLoading && usersIsSuccess && users && users.length > 0 && (
              <Table users={users} />
            )}
          </div>
        </div>
      </div>

      {/* Logout Modal */}
      <Modal open={isLogoutOpen} onClose={() => setIsLogoutOpen(false)}>
        <div className={ModalStyles.modalHeader}>
          <div className={`${ModalStyles.modalIcon} ${ModalStyles.logout}`}>
            <svg
              width="32"
              height="32"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
              />
            </svg>
          </div>
          <h3 className={`${ModalStyles.modalTitle}`}>
            {t("modal.logout.title")}
          </h3>
          <p className={ModalStyles.modalDescription}>
            {t("modal.logout.description")}
          </p>
        </div>

        <div className={ModalStyles.modalActions}>
          <button
            type="button"
            className={`${ModalStyles.modalBtn} ${ModalStyles.cancel}`}
            onClick={() => setIsLogoutOpen(false)}
            disabled={logoutIsLoading}
          >
            {t("modal.logout.cancel")}
          </button>
          <button
            type="button"
            className={`${ModalStyles.modalBtn} ${ModalStyles.danger}`}
            onClick={handleLogout}
            disabled={logoutIsLoading}
          >
            <svg
              width="18"
              height="18"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
              />
            </svg>
            {logoutIsLoading ? t("common.wait") : t("modal.logout.confirm")}
          </button>
        </div>
      </Modal>

      {/* Delete Account Modal */}
      <Modal open={isDeleteOpen} onClose={() => setIsDeleteOpen(false)}>
        <div className={ModalStyles.modalHeader}>
          <div className={`${ModalStyles.modalIcon} ${ModalStyles.delete}`}>
            <svg
              width="32"
              height="32"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              />
            </svg>
          </div>
          <h3 className={`${ModalStyles.modalTitle}`}>
            {t("modal.deleteAccount.title")}
          </h3>
          <p className={ModalStyles.modalDescription}>
            {t("modal.deleteAccount.description")}
          </p>
        </div>

        <div className={ModalStyles.modalActions}>
          <button
            type="button"
            className={`${ModalStyles.modalBtn} ${ModalStyles.cancel}`}
            onClick={() => setIsDeleteOpen(false)}
            disabled={deleteIsLoading}
          >
            {t("modal.deleteAccount.cancel")}
          </button>
          <button
            type="button"
            className={`${ModalStyles.modalBtn} ${ModalStyles.danger}`}
            onClick={handleDeleteAccount}
            disabled={deleteIsLoading}
          >
            <svg
              width="18"
              height="18"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              />
            </svg>
            {deleteIsLoading
              ? t("common.wait")
              : t("modal.deleteAccount.confirm")}
          </button>
        </div>
      </Modal>
    </>
  );
};

export default Dashboard;
