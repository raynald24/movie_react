import './App.css'
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom"
import Login from './components/pages/LoginPage'
import Register from './components/pages/RegisterPage'

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
        <Route exact path="/" element={<Navigate to = "Login" replace/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register/>} />
      </Routes>
    </BrowserRouter>
    </> 
  )
}

export default App
