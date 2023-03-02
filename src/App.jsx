import { Outlet } from 'react-router-dom'

import { useState } from 'react'
import './App.css'
import  'bootstrap/dist/css/bootstrap.min.css' ;
import Rotas from './routes/Rotas.jsx'

import NavbarReact from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <NavbarReact />
      <Rotas />

    </div>
  )
}

export default App
