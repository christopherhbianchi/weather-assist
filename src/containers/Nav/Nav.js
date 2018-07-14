import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './Nav.css';
//import components below
import { logoutUserSuccess } from '../../actions/activeUserActions.js';


class Nav extends Component {

  constructor(){
    super();
    this.state = {};
  }

  render(){
    const activeUser = this.props.activeUser; //this is always an object. Always truthy
    const keys = Object.keys(activeUser);
    console.log(keys.length);
    return(
      <nav className='nav-bar'>
        <NavLink className='nav-link' to='/home'>Home</NavLink>
      { keys.length === 2 ? <NavLink className='nav-link' to='/login' onClick={ e => {e.preventDefault(); this.props.logoutUserSuccess();} }>Log Out</NavLink> : null }
      </nav>
    );//closes return
  }//closes render

}

const mapStateToProps = state => ({
  //needs the active user
  activeUser: state.activeUser
});
const mapDispatchToProps = dispatch => ({
  //needs the logout action
  logoutUserSuccess: () => dispatch(logoutUserSuccess())
});

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
