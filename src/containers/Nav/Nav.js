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
    await localStorage.clear();
    this.props.history.push('/');
  }

  render(){
    return (localStorage.getItem('activeUser')) ? (
      <nav className='nav-bar'>
        <NavLink className='nav-link' to='/home'>WEATHER ASSIST</NavLink>
        <NavLink className='nav-link-logout' to='/' onClick={this.handleLogout}>LOG OUT</NavLink>
      </nav>
    ) : ( <div></div> );
  }//closes render
}//Nav

//needs the active user
export const mapStateToProps = (state) => ({
  activeUser: state.activeUser
});
//needs the logout action
export const mapDispatchToProps = (dispatch) => ({
  logoutUserSuccess: () => dispatch(logoutUserSuccess())
});

Nav.propTypes = {
  logoutUserSuccess: PropTypes.func,
  activeUser: PropTypes.object
};

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
