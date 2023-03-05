import React from 'react'
import ReactDOM from 'react-dom'

import { Rotas } from './routes/Routes';

import { RouterProvider } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <RouterProvider router={Rotas}/>
  </React.StrictMode>,
  document.getElementById("root")
);