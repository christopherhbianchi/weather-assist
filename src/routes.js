import React from 'react';
import { Route, Switch } from 'react-router-dom';

//import your components below
import App from './containers/App/App.js';



export default (
  <Switch>
    <Route exact path="/" component={App} />
  </Switch>
);
