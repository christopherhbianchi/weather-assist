import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './Home.css';
//import in components and other files below
import WeatherBoard from '../WeatherBoard/WeatherBoard';
import AddWeather from '../AddWeather/AddWeather';

export class Home extends Component {

  constructor(){
    super();
    this.state = {};
  }

  render(){
    return(
      <div>
        <AddWeather />
        <WeatherBoard />
      </div>
    );//closes return
  }//closes render
}

export default connect(null, null)(Home);
