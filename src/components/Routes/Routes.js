import React, { Component } from 'react';
import { Route, withRouter, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
//import needed components below
import Nav from '../../containers/Nav/Nav.js';
import Home from '../../containers/Home/Home.js';
import LogIn from '../../containers/LogIn/LogIn.js';
import NotFound from '../NotFound/NotFound.js';

class Routes extends Component {

//With switch, it goes through each of your routes like a switch statement
//Nav outside so it can be rendered regardless anyways

  render() {
    return (
      (!this.props.activeUser.username) ?
        <Switch>
          <Route exact path='/' component={LogIn} />
          <Route component={NotFound} />
        </Switch>
        :
        <div>
          <Route path='/' component={Nav} />
          <Switch>
            <Route exact path='/home' component={Home} />
            <Route component={NotFound} />
          </Switch>
        </div>
    );//return
  }
}

const mapStateToProps = state => ({
  activeUser: state.activeUser
});

export default withRouter(connect(mapStateToProps, null)(Routes));
