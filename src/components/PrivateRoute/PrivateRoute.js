import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, activeUser, ...rest }) =>
  <Route
    {...rest}
    render={props =>
      activeUser ?
        <Component {...props} />
        : <Redirect
          to={{
            pathname: "/",
            state: { }
          }}//to
        />//redirect

    }//render
  />;//route

export default PrivateRoute;
