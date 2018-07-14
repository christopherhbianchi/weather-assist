import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './Nav.css';
//import components below
import { logoutUserSuccess } from '../../actions/activeUserActions.js';


export class Nav extends Component {


  handleLogout = async (event) => {
    event.preventDefault();
    await this.props.logoutUserSuccess();
    await this.props.history.push('/login');
  }

  render(){
    const activeUser = this.props.activeUser; //this is always an object. Always truthy
    return(
      <nav className='nav-bar'>
        <NavLink className='nav-link' to='/home'>Home</NavLink>
        { activeUser['username'] !== 'inactive' ? <NavLink className='nav-link' to='/login' onClick={this.handleLogout}>Log Out</NavLink> : null }
      </nav>
    );//closes return
  }//closes render
}//Nav

//needs the active user
const mapStateToProps = (state) => ({
  activeUser: state.activeUser
});
//needs the logout action
const mapDispatchToProps = (dispatch) => ({
  logoutUserSuccess: () => dispatch(logoutUserSuccess())
});

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
