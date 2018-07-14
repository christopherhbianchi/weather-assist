import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './Nav.css';
//import components below
import { logout, login } from '../../utils/Auth.js';


class Nav extends Component {

  constructor(){
    super();
    this.state = {};
  }

  render(){
    return(
      <nav className='nav-bar'>
        <NavLink className='nav-link' to='/home'>Home</NavLink>
        <NavLink className='nav-link' to='/login'>Log In</NavLink>  
      </nav>
    );//closes return
  }//closes render

}
//<button onClick={ (e) =>{ e.preventDefault(); logout();} }>Log Out</button>
//<button onClick={ (e) =>{ e.preventDefault(); login();} }>Log In</button>


export default Nav;
