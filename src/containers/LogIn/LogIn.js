import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { loginUserSuccess, initializeActiveUserSuccess } from '../../actions/activeUserActions.js';
import  { loadUsersSuccess } from '../../actions/usersActions.js';
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
    for(let u in users) usersToSeed[u] = users[u];
    return usersToSeed;
  }

  handleChange = event => {
    event.preventDefault();
    const {name, value} = event.target;
    this.setState({ [name]: value });
  }//handleChange

  handleSubmit = async event => {
    //we need to validate users. not simply add one to the redux store. We need a way to initialize our group
    //of users on page load as well.
    event.preventDefault();
    const allUsers = this.props.users;
    const givenUsername = this.state.username;
    const givenPassword = this.state.password;

    console.log('All users from imported json keys: ' + Object.keys(users));
    console.log('line 45 All Users: ' + allUsers);
    console.log('All keys of allUsers: ' + Object.keys(allUsers));
    console.log('All Users: ' + allUsers['cbianchi']);
    console.log('allUsers[givenUsername].password: ' + allUsers[givenUsername].password);
    if(allUsers[givenUsername]){
      const targetUser = allUsers[givenUsername];
      if(targetUser.password === givenPassword){//if username exists, check password
        await this.props.loginUserSuccess(this.state); //add this user to our activeUser state
        this.props.history.push('/home'); //move over to the home page.
      }
    }//outer if
    else return(alert('Incorrect username and or password'));

  }//handleSubmit

  render(){
    return(
      <div>
        <h2 className='banner'>WEATHER ASSIST</h2>
          <form className='logInForm'>
          <input className='selectBox' type='text' name='username' placeholder='Username' onChange={this.handleChange}/><br/>
          <input className='selectBox' type='text' name='password' placeholder='Password' onChange={this.handleChange}/><br/>
          <div id='logInBumper'></div>
          <button id='logInButton' onClick={this.handleSubmit}>Log In</button>
      </form>
      </div>
    );//return
  }//render
}

const mapStateToProps = (state) => ({
  users: state.users //an object of objects
});
const mapDispatchToProps = (dispatch) => ({
  loginUserSuccess: user => dispatch(loginUserSuccess(user)),
  loadUsersSuccess: usersObj => dispatch(loadUsersSuccess(usersObj))
  // initializeActiveUserSuccess: () => dispatch(initializeActiveUserSuccess())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LogIn));
