import { Link } from "react-router-dom";
import LoginForm from "../../components/auth/LoginForm";

const Login = () => {
    return(
        <>
            <h3>Welcome Back</h3>
            <LoginForm />
            <Link to="/auth/signup" style={{color: "white", fontSize: "30px"}}>signup</Link>
        </>
    )
}

export default Login;