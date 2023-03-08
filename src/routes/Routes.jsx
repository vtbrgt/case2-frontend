// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from '../pages/Home'
import Sobre from '../pages/Sobre'
import Menu from '../pages/Menu'
import Login from '../pages/Login'
import Contato from '../pages/Contato'
import Admin from '../pages/admin'
import Register from '../pages/Register'
import App from '../App'
import { createBrowserRouter } from 'react-router-dom';
import Principal from '../pages/adminPrincipal'

export const Rotas = createBrowserRouter([
  {
    element: <App/>,
    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/menu',
        element: <Menu/>
      },
      {
        path: '/sobre',
        element: <Sobre/>
      },
      {
        path: '/login',
        element: <Login/>
      },
      {
        path: '/contato',
        element: <Contato/>
      },
      {
        path: '/register',
        element: <Register/>
      },
      {
        path: '/adm',
        element: <Admin/>
      }
      ,
      {
        path: '/adm/principal',
        element: <Principal/>
      }
    ]
  }
])




// import { isAuthenticated } from '../auth'

// const Rotas = () => (
//         <Router>
//           <Routes>
//             <Route exact path="/" element={<Home />} />
//             <Route exact path="/sobre" element={<Sobre/>} />
//             <Route exact path="/menu" element={<Menu/>} /> 
//             <Route exact path="/contato" element={<Contato/>} />
//             {/* <PrivateRoute exact path="/adm" element={<Admin />} isAuthenticated={isAuthenticated} /> */}
//         <Route path="/login" element={<Login />} />
//           </Routes>
//         </Router>
//     )

// export default Rotas