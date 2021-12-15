import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import AuthenticationService from '../src/services/authentification-service';
  
const PrivateRoute = ({ component: Component, ...rest }: any) => (
  <Route {...rest} render={(props) => {
    const isAuthentificated = AuthenticationService.isAuthentificated;
    if (!isAuthentificated) {    
      return <Redirect to={{ pathname: '/login' }} />
    }
  
    return <Component {...props} />
  }} />
);
  
export default PrivateRoute;