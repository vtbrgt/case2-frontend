import { useState } from 'react'
import './App.css'
import  'bootstrap/dist/css/bootstrap.min.css' ;
import NavbarReact from './components/Navbar'
import { Outlet } from 'react-router-dom';

function App() {
  return (
  <>
    <div>
      <NavbarReact />
    </div>
    <div>
      <Outlet/>
    </div>
  </>
  );
}

export default App;

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <div className="App">
//       <NavbarReact />
//       <Rotas />

//     </div>
//   )
// }

// export default App
