import React, { Component } from 'react';
import logo from '../../logo.svg';
import './App.css';
import Routes from '../../components/Routes/Routes.js';
//components below


class App extends Component {

  render() {
    return (
      <div className="App">
        <Routes />
      </div>
    );//return
  }//render
}//App

export default App;
