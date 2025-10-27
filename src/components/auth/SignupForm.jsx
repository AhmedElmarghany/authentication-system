import { useState } from "react";
import Cookies from "js-cookie";
import styles from "../../styles/Form.module.css"
import { useRegisterMutation } from "../../redux/features/auth/authApiSlice";
import { useNavigate } from "react-router-dom";
import { PasswordStrengthMeter } from "../PasswordStrengthMeter";
const validatePassword = (password) => {
  return /[A-Z]/.test(password) && password.length >= 6;
};

const SignupForm = () => {
    const navigate = useNavigate();
    const [userInput, setUserInput] = useState({
        first_name: "",
        last_name: "",
        email: "",
        password: "",
    });
    const [register, { isError, isLoading, error }] = useRegisterMutation();
    const handleSubmit = async(e) => {
      e.preventDefault();
      try {
        const { data } = await register({
          first_name: userInput.first_name,
          last_name: userInput.last_name,
          email: userInput.email,
          password: userInput.password,
        });
        const accessToken = data.accessToken;
        if(accessToken){
          Cookies.set("accessToken", accessToken);
          setUserInput({
            first_name: "",
            last_name: "",
            email: "",
            password: "",
          });
          navigate("/dashboard");
        }
      } catch (error) {
        console.log(error)
      }
    }
    return (
      <>
        <form className={styles.form} onSubmit={handleSubmit}>
          <fieldset>
            <label htmlFor="first_name">First name</label>
            <input 
              id="first_name" 
              type="text" 
              name="first_name" 
              required 
              value={userInput.first_name}
              onChange={(e)=>setUserInput((prev)=>{return { ...prev, first_name: e.target.value }})}
            />
          </fieldset>
          <fieldset>
            <label htmlFor="last_name">Last name</label>
            <input 
              id="last_name" 
              type="text" 
              name="last_name" 
              required 
              value={userInput.last_name}
              onChange={(e)=>setUserInput((prev)=>{return { ...prev, last_name: e.target.value }})}
              />
          </fieldset>
          <fieldset>
            <label htmlFor="email">Email</label>
            <input 
              id="email" 
              type="email" 
              name="email" 
              required 
              value={userInput.email}
              onChange={(e)=>setUserInput((prev)=>{return { ...prev, email: e.target.value }})}

              />
          </fieldset>
          <fieldset>
            <label htmlFor="password">Password</label>
            <input 
              id="password" 
              type="password" 
              name="password" 
              required 
              value={userInput.password}
              onChange={(e)=>setUserInput((prev)=>{return { ...prev, password: e.target.value }})}
              />
          </fieldset>
          <PasswordStrengthMeter password={userInput.password}/> 
          <button type="submit" disabled={isLoading || !validatePassword(userInput.password)}>
            { isLoading? "Submitting..." : "Create Account" }
          </button>
        </form>
        {/* { isError && error && <p>{JSON.stringify(error)}</p> } */}
        { isError && error && <p className={styles.error}>{error.data.message}</p> }
      </>
    );
}

export default SignupForm;