import React from 'react';
import { Route, Navigate } from 'react-router-dom';

// const PrivateRoute = ({ element: Component, isAuthenticated, ...rest }) => (
//   isAuthenticated ? (
//     <Route {...rest} element={<Component />} />
//   ) : (
//     <Navigate to="/login" />
//   )
// );


const PrivateRoute = ({ element: Component, ...rest }) => (
  <Route {...rest } render={props =>(
    isAuthnticated() ? (
      <Component { ... props}/>
    ) : (
      <Redirect to={{pathname: '/login', state:{ from: props.location}}} />
    )
  )}/>
)

export default PrivateRoute;