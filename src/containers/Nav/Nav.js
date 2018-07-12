import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './Nav.css';
//import components below

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

export default Nav;
