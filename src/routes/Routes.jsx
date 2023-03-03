import React from 'react'
import {Route, BrowserRouter, Switch, Redirect } from 'react-router-dom'

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
      <Redirect to={{pathname: '/login', state:{ from: props.location}}} />
    )
  )}/>
)


const Routes = () => (
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={() => <Home />} />
            <Route exact path="/sobre" component={() => <Sobre/>} />
            <Route exact path="/menu" component={() => <Menu/>} /> 
            <Route exact path="/login" component={() => <Login/>} />
            <Route exact path="/contato" component={() => <Contato/>} />
            <PrivateRoute exact path="/adm" component={() => <Admin/>} />
          </Switch>
        </BrowserRouter>
    )

export default Routes