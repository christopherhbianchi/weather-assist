import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
//import in components and other files below
import WeatherBoard from '../WeatherBoard/WeatherBoard'

export class Home extends Component {

  constructor(){
    super();
    this.state = {};
  }

  render(){
    return(
      <div>
        <h2>Home Component</h2>
        <WeatherBoard />
      </div>
    );//closes return
  };//closes render
}

//mapStateToProps
//mapDispatchToProps
//PropTypes

export default connect(null, null)(Home);
