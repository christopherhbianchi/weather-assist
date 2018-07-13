import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './Nav.css';
//import components below
import { login, logout, isLoggedIn } from '../../utils/AuthService.js';

class Nav extends Component {

  constructor(){
    super();
    this.state = {};
  }

  render(){
    return(
      <nav className='nav-bar'>
        <NavLink className='nav-link' to='/home'>Home</NavLink>
      </nav>
    );//closes return
  }//closes render

}

/*
{
    ( isLoggedIn() ) ? <NavLink className='nav-link' to='/home'>Home</NavLink> : null
}
{
  ( isLoggedIn()) ? ( <button className="btn btn-danger log" onClick={() => logout()}>Log out </button> )
  : ( <button className="btn btn-info log" onClick={() => login()}>Log In</button> )
}

*/

export default Nav;
