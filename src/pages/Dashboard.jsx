import { useNavigate } from "react-router-dom";
import { useDeleteUserMutation, useLogoutMutation } from "../redux/features/auth/authApiSlice";
import { useGetUsersQuery } from "../redux/features/users/usersApiSlice";
import styles from "../styles/Dashboard.module.css";
import Cookies from "js-cookie";
import Modal from "../components/Modal";
import { useState } from "react";

const BUTTON_WRAPPER_STYLES = {
  position: "relative",
  zIndex: 1,
};

const OTHER_CONTENT_STYLES = {
  position: "relative",
  backgroundColor: "red",
  padding: "10px",
  zIndex: 2
};

const Dashboard = () => {
    const {
      data: users,
      isLoading,
      isError,
      error,
      isSuccess,
    } = useGetUsersQuery(undefined, {
      refetchOnMountOrArgChange: false, // if true, Always refetch
    });
    const [ logout ] = useLogoutMutation();
    const [ deleteUser ] = useDeleteUserMutation();
    const navigate = useNavigate();
    const handleLogout = async()=>{
      // that mutation clears "jwt" cookie
      await logout();
      Cookies.remove("accessToken");
      navigate("/auth/login", { replace: true });
    };

    const handleDelete = async()=>{
      await deleteUser();
      
      Cookies.remove("accessToken");
      navigate("/auth/signup", { replace: true });
    };

    // that code for modal
    const [ isLogutOpen, setIsLogutOpen ] = useState(false);
    const [ isDeleteOpen, setIsDeleteOpen ] = useState(false);

    return (
      <>
        <div >
          <h1>Dashboard</h1>
          <button type="button" onClick={()=>setIsLogutOpen(true)} style={BUTTON_WRAPPER_STYLES}>
            logout
          </button>
          {/* <button type="button" onClick={()=>setIsOpen(true)} style={{ color: "red", backgroundColor: "#ffe8e8ff" }}> */}
          <button type="button" onClick={()=>setIsDeleteOpen(true)} style={BUTTON_WRAPPER_STYLES}>
            Delete User
          </button>
          <Modal open={isDeleteOpen} onClose={()=>setIsDeleteOpen(false)}>
            {/* <h5 style={{ color: "black" }}>Are you sure you want to delete your account?</h5> */}
            <h3 style={{ color: "red" }}>Delete Account</h3>
            <h5 style={{ color: "black" }}>Are you sure?</h5>
            <div>
              <button type="button" onClick={handleDelete} style={{ color: "red", backgroundColor: "#ff9f9fff" }}>
                Delete
              </button>
              <button type="button" onClick={()=>setIsDeleteOpen(false)}>
                Cancel
              </button>
            </div>
          </Modal>
          <Modal open={isLogutOpen} onClose={()=>setIsLogutOpen(false)}>
            {/* <h5 style={{ color: "black" }}>Are you sure you want to delete your account?</h5> */}
            <h3 style={{ color: "red" }}>Logout</h3>
            <h5 style={{ color: "black" }}>Are you sure?</h5>
            <div>
              <button type="button" onClick={handleLogout} style={{ color: "red", backgroundColor: "#ff9f9fff" }}>
                Logout
              </button>
              <button type="button" onClick={()=>setIsLogutOpen(false)}>
                Cancel
              </button>
            </div>
          </Modal>
          {isLoading && !isError && <p>Loading...</p>}
          {!isLoading && isError && <p>Error: {error.data.message}</p>}
          {!isLoading && isSuccess && users && users.length > 0 && (
            <table className={styles.table} style={OTHER_CONTENT_STYLES}>
              <thead>
                <tr>
                  <th>First Name</th>
                  <th>Last </th>
                  <th>Email</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user._id}>
                    <td>{user.first_name}</td>
                    <td>{user.last_name}</td>
                    <td>{user.email}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </>
    );
};

export default Dashboard;