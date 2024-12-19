import {useState} from "react"
import { Link } from "react-router-dom";
import './LoginPage.css';

const Register = () => {
      const[username, setUsername] = useState('');
      const[password, setPassword] = useState('');
      const[email,setEmail] = useState('')

      const onChangeUsername = (e) => {
        const value = e.target.value
        setUsername(value)
      }

      const onChangeEmail = (e) => {
        const value = e.target.value
        setEmail(value)
      }
      const onChangePassword = (e) => {
        const value = e.target.value
        setPassword(value)
      }

    return (
       <div className="wrapper">
           <form action="">
               <h1> Register</h1>
               <div className="input-box">
                   < input
                   type ="text" 
                   placeholder="UserName"
                   className = "form-control"
                   value={username}
                   onChange = {onChangeUsername}
                   />     
               </div>
               <div className="input-box">
                   < input
                   type ="text" 
                   placeholder="Email"
                   className = "form-control"
                   value={email}
                   onChange = {onChangeEmail}
                   />     
               </div>
               <div className="input-box">
                   < input
                   type ="password" 
                   placeholder="Password"
                   className = "form-control"
                   value={password}
                   onChange = {onChangePassword}
                   />     
               </div>
               <button type="submit">
                    Register
                </button>
                <button type="submit">
                    <Link to="/" > Cancel </Link>
                </button>
           </form>
       </div>
    )
}

export default Register;