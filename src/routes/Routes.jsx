
import {Route, Routes, Navigate } from 'react-router-dom'

import Home from '../pages/Home'
import Sobre from '../pages/Sobre'
import Menu from '../pages/Menu'
import Login from '../pages/Login'
import Contato from '../pages/Contato'
import Admin from '../pages/admin'

import { isAuthnticated } from '../auth'

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest } render={props =>(
    isAuthnticated() ? (
      <Component { ... props}/>
    ) : (
      <Navigate to={{pathname: '/login', state:{ from: props.location}}} />
    )
  )}/>
)


const Rotas = () => (
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/sobre" element={<Sobre/>} />
            <Route exact path="/menu" element={<Menu/>} /> 
            <Route exact path="/login" element={<Login/>} />
            <Route exact path="/contato" element={<Contato/>} />
            <Route exact path="/adm" component={<PrivateRoute component={ <Admin />} />} />
          </Routes>
    )

export default Rotas