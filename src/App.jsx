// import { Outlet } from 'react-router-dom'

import { useState } from 'react'
import './App.css'
import  'bootstrap/dist/css/bootstrap.min.css' ;
import Routes from './routes/Routes.jsx'

import NavbarReact from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <NavbarReact />
      <Routes />

    </div>
  )
}

export default App
