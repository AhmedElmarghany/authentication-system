import { useState } from "react";
import Cookies from "js-cookie";
import { useLoginMutation } from "../../redux/features/auth/authApiSlice";
import styles from "../../styles/Form.module.css"
import { useNavigate } from "react-router-dom";
const LoginForm = () => {
    const navigate = useNavigate();
    const [ userInputs, setUserInputs ] = useState({ email: "", password: "" });
    const [ login, {isError, isLoading, error} ] = useLoginMutation();

    const handleSubmit = async(e) => {
        e.preventDefault();
        try {
          const { data } = await login({
            email: userInputs.email,
            password: userInputs.password,
          });
          const accessToken = data.accessToken;
          if (accessToken) {
            Cookies.set("accessToken", accessToken);
            setUserInputs({
              email: "",
              password: "",
            });
            navigate("/dashboard");
          }
        } catch (error) {
          console.log(error);
        }
    };
    return (
    <>
        <form className={styles.form} onSubmit={handleSubmit}>
            <fieldset>
                <label htmlFor="email">Email</label>
                <input 
                    id="email" 
                    type="email" 
                    name="email" 
                    required 
                    value={userInputs.email}
                    onChange={(e)=>setUserInputs((prev)=>{return { ...prev, email: e.target.value }})}
                />
            </fieldset>
            <fieldset>
                <label htmlFor="password">Password</label>
                <input 
                id="password" 
                type="password" 
                name="password"
                minLength={6}
                required
                value={userInputs.password}
                onChange={(e)=>setUserInputs((prev)=>{return { ...prev, password: e.target.value }})}
                />
            </fieldset>
            <button type="submit" disabled={isLoading}>
            { isLoading? "Wait..." : "Login" }
            </button>
        </form>
        { isError && error && <p>{error.data.message}</p> }
    </>
    )
};

export default LoginForm;