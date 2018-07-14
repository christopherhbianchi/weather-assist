import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
//import needed components below
import Nav from '../../containers/Nav/Nav.js';
import Home from '../../containers/Home/Home.js';
import LogIn from '../../containers/LogIn/LogIn.js';

export const Routes = (props) => {


  return (
    <div>
      <Route path='/' component={Nav} />
      <Route exact path='/home' component={Home} />
      <Route exact path='/login' component={LogIn} />
    </div>
  );

//mapStateToProps
//propTypes

}
export default withRouter(connect(null, null)(Routes));
