import { FaUserAlt,FaLock } from "react-icons/fa";
import './LoginPage.css';
function Login() {
  return (
    <div className="wrapper">   
        <form action="">
          <h1>Login</h1>
          <div className="input-box">
            <input type="text" placeholder='     Username' required />
            <FaUserAlt className="icon"/>
          </div>
          <div className="input-box">
          <input type="text" placeholder='     Password' required />
          <FaLock className="icon"/>
          </div>
          <div className="remember-forgot">
            <label> <input type="checkbox"/> Remember me </label>
            <a href="#reset-password">Forget Password? </a>
          </div>
          <button type="submit">
            Login
          </button>
          <div className="register-link">
            <p>Don't you have an account? <a href="#register"> register here</a> </p>
          </div>
        
        </form>
    </div>
  )
}

export default Login;