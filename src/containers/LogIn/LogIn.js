import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { loginUserSuccess, initializeActiveUserSuccess } from '../../actions/activeUserActions.js';
import  { loadUsersSuccess, registerUserSuccess } from '../../actions/usersActions.js';
import './LogIn.css';
//import components here
const users = require('../../resources/SeedUsers.js'); //object of objects


export class LogIn extends Component {

  constructor(){
    super();
    this.state = ({
      username:'',
      password:''
    });
  }

  async componentDidMount(){
    //making sure all our users have been seeded prior to anything else
    await this.props.loadUsersSuccess(this.seedData());
  }
  seedData = () => { //seed data from hard coded data
    let usersToSeed = {};
    for(let usr in users) usersToSeed[usr] = users[usr];
    return usersToSeed;
  }

  handleChange = event => {
    event.preventDefault();
    const {name, value} = event.target;
    this.setState({ [name]: value });
  }//handleChange

  handleLogIn = async event => {
    //we need to validate users. not simply add one to the redux store. We need a way to initialize our group
    //of users on page load as well.
    event.preventDefault();
    const allUsers = this.props.users;
    const givenUsername = this.state.username;
    const givenPassword = this.state.password;

    if(allUsers[givenUsername]){
      const targetUser = allUsers[givenUsername];
      if(targetUser.password === givenPassword){ //if username exists, check password
        await this.props.loginUserSuccess(this.state); //add this user to our activeUser state
        this.props.history.push('/home'); //move over to the home page.
      }
    }//outer if
    else return (alert('Incorrect username and or password'));
  }//handleSubmit

  handleRegister = async event => {
    event.preventDefault();
    const allUsers = this.props.users;
    const givenUsername = this.state.username;
    const givenPassword = this.state.password;

    if(allUsers[givenUsername]) return alert('Registered user already exists');
    else if(this.state.username === '' || this.state.password){
      return (alert('Please enter a valid username and password to register.'));
    }
    else{
      await this.props.registerUserSuccess(this.state);
      await this.props.loginUserSuccess(this.state);
      this.props.history.push('/home');
    }//else
  }//handleRegister



  render(){
    return(
      <div>
        <h2 className='banner'>WEATHER ASSIST</h2>
        <form className='logInForm'>
          <input className='selectBox' type='text' name='username' placeholder='Username' onChange={this.handleChange}/><br/>
          <input className='selectBox' type='password' name='password' placeholder='Password' onChange={this.handleChange}/><br/>
          <div className='logInBumper'></div>
          <button className='logInButtons' onClick={this.handleLogIn}>Log In</button>
          <div className='logInBumper'></div>
          <button className='logInButtons' onClick={this.handleRegister}>Register</button>
        </form>
        <div className='loginPhoto'></div>
      </div>
    );//return
  }//render
}

export const mapStateToProps = (state) => ({
  users: state.users //an object of objects
});
export const mapDispatchToProps = (dispatch) => ({
  loginUserSuccess: user => dispatch(loginUserSuccess(user)),
  loadUsersSuccess: usersObj => dispatch(loadUsersSuccess(usersObj)),
  registerUserSuccess: user => dispatch(registerUserSuccess(user))
});

LogIn.propTypes = {
  users: PropTypes.object,
  loadUsersSuccess: PropTypes.func,
  registerUserSuccess: PropTypes.func,
  loginUsersSuccess: PropTypes.func
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LogIn));
