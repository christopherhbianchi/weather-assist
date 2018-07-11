import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
//import components below

class Nav extends Component {

  constructor(){
    super();
    this.state = {};
  }

  render(){
    return(
      <nav>
        <NavLink to='/home'>
          Home
        </NavLink>
      </nav>
    );//closes return
  }//closes render

}

export default Nav;
