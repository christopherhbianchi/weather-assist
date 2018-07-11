import React, { Component } from 'react';
import { connect } from 'react-redux';
//import components below
import { createWeather } from '../../actions/index.js';
import { LasVegas, NewYork, LosAngeles, Miami } from '../../resources/CityCoordinates.js';

export class AddWeather extends Component {
  constructor(){
    super();
    this.state = {
      locationToAdd: NewYork
    }
  }//closes constructor

  handleChange = (event) => {
    console.log('AddWeather.js handleChange: ' + event.target.value.latitude);
    // console.log('CityCoordinates.NewYork: ' + CityCoordinates.NewYork);
    // --> this value below is an obj of 2 properties: lat and long
    return this.setState({ locationToAdd: event.target.value },
    () => { console.log('setState callback in handleChange: ' + this.state.locationToAdd.latitude) });//closes setState

  }//closes handleChange

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.createWeather(this.state);
  }

  render(){
    console.log('inside render New York: ' + NewYork.latitude);
    console.log('inside render Las Vegas: ' + LasVegas.latitude);
    return(
      <div>
        <h3>AddWeather Container</h3>
        <form>
          <select value={this.state.locationToAdd} onChange={this.handleChange}>
            <option value={NewYork}>New York</option>
            <option value={LasVegas}>Las Vegas</option>
            <option value={Miami}>Miami</option>
            <option value={LosAngeles}>Los Angeles</option>
          </select>
          <button onClick={this.handleSubmit}>Add this city</button>
        </form>
      </div>
    );//closes return
  }//closes render
}//closes class

const mapDispatchToProps = (dispatch) => ({
  createWeather: cityCoordinates => dispatch(createWeather(cityCoordinates))
});

export default connect(null, mapDispatchToProps)(AddWeather);
