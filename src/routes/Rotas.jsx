
import { Routes, Route, Navigate, BrowserRouter as Routers } from 'react-router-dom'
// import { AuthContext } from '../contexts/auth'

import Home from '../pages/Home'
import Sobre from '../pages/Sobre'
import Menu from '../pages/Menu'
import Login from '../pages/Login'
import Contato from '../pages/Contato'
import Admin from '../pages/admin'
import { useState } from 'react'


function Rotas() {
    // const[user,setUser]= useState(null)
    
    // const login = (email,password) =>{

    // }
    return (
        <Routes>
          {/* <AuthContext.Provider value={{authenticated: !!user, user,login}}> */}
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<Sobre/>} />
            <Route path="/menu" element={<Menu/>} /> 
            
            <Route path="/login" element={<Login/>} />
            <Route path="/contato" element={<Contato/>} />
            <Route path="/admin" element={<Admin/>} />
{/* </AuthContext.Provider> */}
        </Routes>
    )
}
export default Rotas