import { Routes, Route, Navigate, BrowserRouter as Routers } from 'react-router-dom'

import Home from '../pages/Home'
import Sobre from '../pages/Sobre'
import Menu from '../pages/Menu'
import Login from '../pages/Login'
import Contato from '../pages/Contato'
import Admin from '../pages/admin'


function Rotas() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<Sobre/>} />
            <Route path="/menu" element={<Menu/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/contato" element={<Contato/>} />
            <Route path="/contato" element={<Contato/>} />
            
            <Route path="/admin" element={<Admin/>} />

        </Routes>
    )
}

export default Rotas