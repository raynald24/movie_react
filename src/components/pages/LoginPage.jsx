import { FaUserAlt,FaLock } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";
import './LoginPage.css';

 
const Login = () => {
  const[username, setUsername] = useState('');
  const[password, setPassword] = useState('');
  //menangkap value dari input username dan password
  const onChangeUsername = (e) => {
    const value = e.target.value
    setUsername(value)
  }
  const onChangePassword = (e) => {
    const value = e.target.value 
    setPassword (value)
  }

  return (
    <div className="wrapper">   
        <form action="">
          <h1>Login</h1>
          <div className="input-box">
            <input 
            type="text" 
            placeholder="Username" 
            value={username} 
            onChange={onChangeUsername} />
            <FaUserAlt className="icon"/>
          </div>
          <div className="input-box">
          <input type="password" placeholder='     Password' value={password} onChange={onChangePassword} required />
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
              <p>
                Don't you have an account? 
                <Link to="/Register" className="pull-right" > register here</Link>
              </p>
            </div>
        
        </form>
    </div>
  )
}

export default Login;