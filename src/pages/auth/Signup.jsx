import { Link } from "react-router-dom";
import SignupForm from "../../components/auth/SignupForm";

const Signup = () => {
    return(
        <>
            <h3>Welcome Back</h3>
            <SignupForm />
            <Link to="/auth/login" style={{color: "white", fontSize: "30px"}}>login</Link>
        </>
    )
}

export default Signup;